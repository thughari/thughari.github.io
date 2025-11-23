import { ContactFormData } from "../types.ts";

export const submitContactForm = async (
  formData: ContactFormData
): Promise<string> => {
  const encodedScriptUrl = new Uint8Array([
    104, 116, 116, 112, 115, 58, 47, 47, 115, 99, 114, 105, 112, 116, 46, 103,
    111, 111, 103, 108, 101, 46, 99, 111, 109, 47, 109, 97, 99, 114, 111, 115,
    47, 115, 47, 65, 75, 102, 121, 99, 98, 121, 57, 83, 45, 78, 97, 78, 111,
    101, 97, 73, 84, 98, 86, 122, 88, 65, 109, 82, 109, 48, 98, 120, 85, 104,
    98, 72, 104, 84, 78, 67, 104, 120, 73, 97, 82, 97, 73, 109, 99, 107, 111,
    90, 74, 121, 111, 116, 114, 48, 78, 55, 105, 79, 90, 85, 111, 74, 72, 82,
    110, 77, 71, 69, 108, 49, 71, 88, 81, 47, 101, 120, 101, 99,
  ]);

  const td = new TextDecoder();

  const googleScriptUrl = td.decode(encodedScriptUrl);

  const formBody = new FormData();
  formBody.append("name", formData.name);
  formBody.append("email", formData.email);
  formBody.append("message", formData.message);

  try {
    const response = await fetch(googleScriptUrl, {
      method: "POST",
      body: formBody,
    });

    if (!response.ok) {
      throw new Error("Network response was not ok.");
    }

    const resultText = await response.text();
    return resultText;
  } catch (error) {
    console.error("Error submitting form:", error);
    const errorMessage =
      error instanceof Error ? error.message : "An unknown error occurred.";
    return Promise.reject(
      new Error(`Something went wrong. Please try again later. ${errorMessage}`)
    );
  }
};
