"use server"
import React from "react"
import { validateString, getErrorMessage } from "@/lib/utils"
import { Resend } from "resend"
import ContactFormEmail from "@/email/contact-form-email"

// Initializes a Resend instance using the API key from environment variables.
const resend = new Resend(process.env.RESEND_API_KEY)

// Retrieves the `senderEmail` field from the submitted form data.
export const sendEmail = async (formData: FormData) => {
  const senderEmail = formData.get("senderEmail")
  const message = formData.get("message")

  // Simple server-side validation to ensure the input values are valid.
  if (!validateString(senderEmail, 500)) {
    return {
      error: "Invalid sender email"
    }
  }
  if (!validateString(message, 5000)) {
    return {
      error: "Invalid message"
    }
  } 
  //Declare a variable to store the response data from the email-sending operation.
  let data

  try {
    // Attempt to send an email using the Resend email API.
    data = await resend.emails.send({
      from: "Contact Form <onboarding@resend.dev>",
      to: "roneehelepi70@gmail.com",
      subject: "Message from contact form",
      reply_to: senderEmail as string,
      // The 'react' property defines the React component used to render the email's content.
      react: React.createElement(ContactFormEmail, {
        // Pass the message and sender's email to the React component.
        message: message as string,
        senderEmail: senderEmail as string,
      })
    })
  } catch (error: unknown) {
    return {
      error: getErrorMessage(error),
    }
  }
   return {
    data,
   } 
}