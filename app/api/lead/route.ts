import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { siteConfig } from "@/site.config";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

export async function POST(request: Request) {
  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  const name = String(body.name ?? "").trim();
  const email = String(body.email ?? "").trim();
  const company = String(body.company ?? "").trim();
  const message = String(body.message ?? "").trim();
  const honeypot = String(body.website ?? "").trim();

  // Bot caught by honeypot — pretend success, send nothing.
  if (honeypot) {
    return NextResponse.json({ ok: true });
  }

  if (!name || !email || !message) {
    return NextResponse.json(
      { error: "Please fill in your name, email and message." },
      { status: 400 },
    );
  }
  if (!EMAIL_RE.test(email)) {
    return NextResponse.json(
      { error: "Please enter a valid email address." },
      { status: 400 },
    );
  }

  const { SMTP_HOST, SMTP_PORT, SMTP_SECURE, SMTP_USER, SMTP_PASS } =
    process.env;
  const to = process.env.LEAD_NOTIFICATION_EMAIL ?? siteConfig.notificationEmail;

  if (!SMTP_HOST || !SMTP_PORT || !SMTP_USER || !SMTP_PASS) {
    console.error("SMTP environment variables are not configured.");
    return NextResponse.json(
      { error: "The form isn't configured yet. Please email us directly." },
      { status: 500 },
    );
  }

  const transporter = nodemailer.createTransport({
    host: SMTP_HOST,
    port: Number(SMTP_PORT),
    secure: SMTP_SECURE ? SMTP_SECURE === "true" : Number(SMTP_PORT) === 465,
    auth: { user: SMTP_USER, pass: SMTP_PASS },
  });

  const safe = {
    name: escapeHtml(name),
    email: escapeHtml(email),
    company: escapeHtml(company || "—"),
    message: escapeHtml(message).replace(/\n/g, "<br />"),
  };

  try {
    await transporter.sendMail({
      from: `"${siteConfig.brand.name} — Lead Form" <${SMTP_USER}>`,
      to,
      replyTo: email,
      subject: `New audit request from ${name}`,
      text: [
        `New free-audit request`,
        ``,
        `Name: ${name}`,
        `Email: ${email}`,
        `Company / website: ${company || "—"}`,
        ``,
        `Message:`,
        message,
      ].join("\n"),
      html: `
        <div style="font-family:Arial,Helvetica,sans-serif;color:#1A1A1A;line-height:1.6">
          <h2 style="color:#0A0A0A;margin:0 0 16px">New free-audit request</h2>
          <p><strong>Name:</strong> ${safe.name}</p>
          <p><strong>Email:</strong> <a href="mailto:${safe.email}">${safe.email}</a></p>
          <p><strong>Company / website:</strong> ${safe.company}</p>
          <p><strong>Message:</strong><br />${safe.message}</p>
        </div>
      `,
    });
  } catch (err) {
    console.error("Failed to send lead email:", err);
    return NextResponse.json(
      { error: "We couldn't send your request. Please try again shortly." },
      { status: 502 },
    );
  }

  return NextResponse.json({ ok: true });
}
