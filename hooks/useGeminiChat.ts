import { useState, useRef, useCallback } from "react";
import { GoogleGenAI, Chat } from "@google/genai";
import { ChatMessage, ContactFormData } from "../types.ts";
import { chatbotSystemInstruction } from "../constants.ts";
import { submitContactForm } from "../utils/formSubmitter.ts";

type ContactFlowState =
  | "idle"
  | "collecting_name"
  | "collecting_email"
  | "collecting_phone"
  | "collecting_message"
  | "sending";

export const useGeminiChat = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const chatRef = useRef<Chat | null>(null);

  // State for conversational contact form
  const [contactFlowState, setContactFlowState] =
    useState<ContactFlowState>("idle");
  const [contactData, setContactData] = useState<Partial<ContactFormData>>({});

  const addBotMessage = (text: string) => {
    setMessages((prev) => [...prev, { sender: "bot", text }]);
  };

  const handleContactFlow = (userInput: string) => {
    setMessages((prev) => [...prev, { sender: "user", text: userInput }]);

    switch (contactFlowState) {
      case "collecting_name":
        setContactData({ name: userInput });
        setContactFlowState("collecting_email");
        addBotMessage("Great, thanks! What's your email address?");
        break;

      case "collecting_email":
        setContactData((prev) => ({ ...prev, email: userInput }));
        setContactFlowState("collecting_phone");
        addBotMessage("Optional: Enter your mobile number, or type 'skip' to continue.");
        break;

      case "collecting_phone":
        if (userInput.trim().toLowerCase() !== "skip" && userInput.trim() !== "") {
          setContactData((prev) => ({ ...prev, phone: userInput }));
        }
        setContactFlowState("collecting_message");
        addBotMessage("Perfect. And what's the message you'd like to send?");
        break;

      case "collecting_message":
        const finalData = {
          ...contactData,
          message: userInput,
        } as ContactFormData;
        setContactData(finalData);
        setContactFlowState("sending");
        addBotMessage("Got it. Sending your message now...");

        submitContactForm(finalData)
          .then(() => {
            addBotMessage(
              "✅ Success! Your message has been sent to Hari. He'll get back to you soon."
            );
          })
          .catch((e) => {
            const errorMessage =
              e instanceof Error ? e.message : "An unknown error occurred.";
            addBotMessage(`❌ Oops! Something went wrong. ${errorMessage}`);
          })
          .finally(() => {
            setContactFlowState("idle");
            setContactData({});
          });
        break;
    }
  };

  const initializeChat = useCallback(() => {
    const encoded = new Uint8Array([
      65, 73, 122, 97, 83, 121, 65, 52, 111, 112, 57, 90, 114, 98, 54, 45, 110,
      74, 122, 50, 104, 89, 45, 118, 77, 120, 104, 111, 95, 89, 104, 65, 101,
      120, 111, 113, 72, 111, 65,
    ]);

    const td = new TextDecoder();

    const API_KEY = td.decode(encoded);
    try {
      const ai = new GoogleGenAI({ apiKey: API_KEY, vertexai: false });
      chatRef.current = ai.chats.create({
        model: "gemini-2.5-flash",
        config: {
          systemInstruction: chatbotSystemInstruction,
        },
      });
      setMessages([
        {
          sender: "bot",
          text: "Hi! I'm Hari's AI Twin. Feel free to ask me anything about his skills, projects, or experience.",
        },
      ]);
      setContactFlowState("idle");
      setContactData({});
    } catch (e) {
      const errorMessage =
        e instanceof Error
          ? e.message
          : "An unknown error occurred during initialization.";
      console.error("Chat initialization failed:", errorMessage);
      setError(`Failed to start the AI assistant. ${errorMessage}`);
      addBotMessage("Sorry, I am unable to start right now.");
    }
  }, []);

  const sendMessage = async (userMessage: string) => {
    if (contactFlowState !== "idle") {
      handleContactFlow(userMessage);
      return;
    }

    if (!chatRef.current) {
      setError("Chat is not initialized.");
      return;
    }

    setIsLoading(true);
    setError(null);
    setMessages((prev) => [...prev, { sender: "user", text: userMessage }]);

    try {
      const stream = await chatRef.current.sendMessageStream({
        message: userMessage,
      });

      let botReply = "";
      setMessages((prev) => [...prev, { sender: "bot", text: "" }]);

      for await (const chunk of stream) {
        botReply += chunk.text;
        setMessages((prev) => {
          const newMessages = [...prev];
          newMessages[newMessages.length - 1] = {
            sender: "bot",
            text: botReply,
          };
          return newMessages;
        });
      }

      if (botReply.trim() === "[START_CONTACT_FLOW]") {
        setMessages((prev) => prev.slice(0, -1));
        setContactFlowState("collecting_name");
        addBotMessage(
          "I can help with that! To send a message to Hari, what's your name?"
        );
      }
    } catch (e) {
      const errorMessage =
        e instanceof Error ? e.message : "An unknown error occurred.";
      console.error("Error sending message:", errorMessage);
      setError(`Sorry, something went wrong. ${errorMessage}`);
      addBotMessage("I encountered an error. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return { messages, isLoading, error, sendMessage, initializeChat };
};
