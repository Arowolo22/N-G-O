import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request) {
  try {
    const body = await request.json();
    const { name, phone, location, message } = body;

    if (!name?.trim() || !phone?.trim() || !message?.trim()) {
      return NextResponse.json(
        { error: "Name, phone, and message are required." },
        { status: 400 }
      );
    }

    const toEmail = process.env.MAIL_TO || process.env.SMTP_USER;
    if (!toEmail) {
      console.error("MAIL_TO or SMTP_USER not set");
      return NextResponse.json(
        { error: "Email is not configured. Please set MAIL_TO or SMTP_USER." },
        { status: 500 }
      );
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || "smtp.gmail.com",
      port: Number(process.env.SMTP_PORT) || 587,
      secure: process.env.SMTP_SECURE === "true",
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS || process.env.SMTP_PASSWORD,
      },
    });

    const mailOptions = {
      from: process.env.SMTP_FROM || process.env.SMTP_USER,
      to: toEmail,
      replyTo: body.email || undefined,
      subject: `[Get Help] Urgent request from ${name.trim()}`,
      text: [
        `Name: ${name.trim()}`,
        `Phone: ${phone.trim()}`,
        location?.trim() ? `Location: ${location.trim()}` : null,
        "",
        "Message:",
        message.trim(),
      ]
        .filter(Boolean)
        .join("\n"),
      html: `
        <div style="font-family: sans-serif; max-width: 600px;">
          <h2 style="color: #0f172a;">Urgent help request</h2>
          <p><strong>Name:</strong> ${escapeHtml(name.trim())}</p>
          <p><strong>Phone:</strong> ${escapeHtml(phone.trim())}</p>
          ${location?.trim() ? `<p><strong>Location:</strong> ${escapeHtml(location.trim())}</p>` : ""}
          <p><strong>Message:</strong></p>
          <p style="white-space: pre-wrap; background: #f1f5f9; padding: 12px; border-radius: 8px;">${escapeHtml(message.trim())}</p>
          <p style="color: #64748b; font-size: 12px; margin-top: 24px;">Sent from Arowolo NGO Get Help form.</p>
        </div>
      `,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Get Help email error:", err);
    return NextResponse.json(
      { error: err.message || "Failed to send request. Please try again or call the hotline." },
      { status: 500 }
    );
  }
}

function escapeHtml(text) {
  const map = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#039;" };
  return String(text).replace(/[&<>"']/g, (m) => map[m]);
}
