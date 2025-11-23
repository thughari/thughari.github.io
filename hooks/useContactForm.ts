import { useState } from "react";
import { ContactFormData } from "../types.ts";
import { submitContactForm } from "../utils/formSubmitter.ts";

export const useContactForm = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    message: "",
    phone: "",
  });
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    try {
      await submitContactForm(formData);
      setStatus("success");
      setFormData({ name: "", email: "", message: "", phone: "" }); // Reset form

      setTimeout(() => setStatus("idle"), 10000); // Reset status after 10 seconds
    } catch (error) {
      const message =
        error instanceof Error ? error.message : "An unknown error occurred.";
      setErrorMessage(message);
      setStatus("error");
    }
  };

  return { formData, status, errorMessage, handleChange, handleSubmit };
};
