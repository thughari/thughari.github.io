
import { ContactFormData } from '../types.ts';

export const submitContactForm = async (formData: ContactFormData): Promise<string> => {
  // IMPORTANT: Replace this placeholder with your own Google Apps Script URL.
  // It is highly recommended to store this in an environment variable.
  const googleScriptUrl = "https://script.google.com/macros/s/AKfycby9S-NaNoeaITbVzXAmRm0bxUhbHhTNChxIaRaImckoZJyotr0N7iOZUoJHRnMGEl1GXQ/exec";

  // if (googleScriptUrl === "YOUR_GOOGLE_APPS_SCRIPT_URL_HERE") {
  //   const errorMessage = "The form is not configured correctly. Please contact the site owner.";
  //   console.error("Google Apps Script URL is not configured. Please replace the placeholder in utils/formSubmitter.ts.");
  //   return Promise.reject(new Error(errorMessage));
  // }

  const formBody = new FormData();
  formBody.append('name', formData.name);
  formBody.append('email', formData.email);
  formBody.append('message', formData.message);

  try {
    const response = await fetch(googleScriptUrl, {
      method: 'POST',
      body: formBody,
    });

    if (!response.ok) {
      throw new Error('Network response was not ok.');
    }

    const resultText = await response.text();
    return resultText;
  } catch (error) {
    console.error('Error submitting form:', error);
    const errorMessage = error instanceof Error ? error.message : 'An unknown error occurred.';
    return Promise.reject(new Error(`Something went wrong. Please try again later. ${errorMessage}`));
  }
};
