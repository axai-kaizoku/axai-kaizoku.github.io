import nodemailer from "nodemailer"
import { env } from "@/env"

let transporter: nodemailer.Transporter | null = null

function getTransporter() {
  if (!transporter) {
    const clientId = env.GOOGLE_CLIENT_ID
    const clientSecret = env.GOOGLE_CLIENT_SECRET
    const refreshToken = env.GOOGLE_REFRESH_TOKEN
    const user = env.GOOGLE_USER

    transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        type: "OAuth2",
        user,
        clientId,
        clientSecret,
        refreshToken,
      },
    })
  }
  return transporter
}

export async function sendEmail({
  to,
  subject,
  text,
  html,
}: {
  to: string
  subject: string
  text: string
  html?: string
}) {
  const transport = getTransporter()
  const from = env.GOOGLE_USER

  await transport.sendMail({
    from: `Akshay <${from}>`,
    to,
    subject,
    text,
    html,
  })
}
