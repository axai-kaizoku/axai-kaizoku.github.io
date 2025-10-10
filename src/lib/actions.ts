"use server"
import { sendEmail } from "@/lib/email"

export async function sendEmailWrapper({
  email,
  message,
  name,
}: {
  name: string
  email: string
  message: string
}) {
  try {
    await sendEmail({
      to: "akshayyelle6@gmail.com",
      subject: "Portfolio Contact Form Submission",
      html: `
    <div style="font-family: Arial, sans-serif; background-color: #f9fafb; padding: 20px;">
      <div style="max-width: 600px; margin: auto; background: #ffffff; border-radius: 8px; padding: 24px; box-shadow: 0 2px 6px rgba(0,0,0,0.05);">
        <h2 style="color: #4f46e5; margin-bottom: 16px;">📩 New Message from Your Portfolio</h2>
        <p style="color: #374151; line-height: 1.6;">You’ve received a new message from the contact form on your portfolio website.</p>
        
        <hr style="border: none; border-top: 1px solid #e5e7eb; margin: 20px 0;" />

        <table style="width: 100%; border-collapse: collapse;">
          <tr>
            <td style="padding: 8px 0; font-weight: bold; color: #111827;">Name:</td>
            <td style="padding: 8px 0; color: #374151;">${name}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; font-weight: bold; color: #111827;">Email:</td>
            <td style="padding: 8px 0; color: #374151;">${email}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; font-weight: bold; color: #111827; vertical-align: top;">Message:</td>
            <td style="padding: 8px 0; color: #374151; white-space: pre-line;">${message}</td>
          </tr>
        </table>

        <hr style="border: none; border-top: 1px solid #e5e7eb; margin: 20px 0;" />
        <p style="font-size: 14px; color: #6b7280;">This message was sent via your portfolio contact form.</p>
      </div>
    </div>
  `,
      text: `Portfolio Contact Form Submission\n\nName: ${name}\nEmail: ${email}\nMessage: ${message}`,
    })

    return { ok: true }
  } catch {
    return { ok: false }
  }
}
