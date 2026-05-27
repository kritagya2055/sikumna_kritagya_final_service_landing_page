"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { siteConfig } from "@/site.config";

const { fields, submitLabel, submittingLabel, consentNote } = siteConfig.form;

type Status = "idle" | "submitting" | "error";

const labelClass = "eyebrow block text-platinum";
const inputClass =
  "w-full border-0 border-b border-white/20 bg-transparent px-0 py-3 text-white placeholder:text-muted focus:border-white focus:outline-none focus:ring-0 transition-colors duration-200";

export function LeadForm() {
  const router = useRouter();
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");
    setError(null);

    const data = new FormData(event.currentTarget);
    const get = (key: string) => String(data.get(key) ?? "").trim();

    // Map the v3 form fields onto the existing /api/lead contract
    // (name, email, company, message, website-honeypot) so every detail
    // reaches the notification email without changing the API route.
    const note = get("message");
    const composedMessage = [
      `WhatsApp: ${get("whatsapp")}`,
      `Website / Facebook: ${get("link")}`,
      "",
      note ? `Message: ${note}` : "Message: (none)",
    ].join("\n");

    const payload = {
      name: get("name"),
      email: get("email"),
      company: get("business"),
      message: composedMessage,
      website: get("website"), // honeypot
    };

    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        const body = await res.json().catch(() => null);
        throw new Error(body?.error ?? "Something went wrong. Please try again.");
      }

      router.push("/thanks");
    } catch (err) {
      setStatus("error");
      setError(err instanceof Error ? err.message : "Something went wrong.");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-8" noValidate>
      <div>
        <label htmlFor="name" className={labelClass}>
          {fields.name.label}
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          autoComplete="name"
          placeholder={fields.name.placeholder}
          className={inputClass}
        />
      </div>

      <div>
        <label htmlFor="email" className={labelClass}>
          {fields.email.label}
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          autoComplete="email"
          placeholder={fields.email.placeholder}
          className={inputClass}
        />
      </div>

      <div>
        <label htmlFor="whatsapp" className={labelClass}>
          {fields.whatsapp.label}
        </label>
        <input
          id="whatsapp"
          name="whatsapp"
          type="tel"
          required
          autoComplete="tel"
          inputMode="tel"
          placeholder={fields.whatsapp.placeholder}
          className={inputClass}
        />
      </div>

      <div>
        <label htmlFor="business" className={labelClass}>
          {fields.business.label}
        </label>
        <input
          id="business"
          name="business"
          type="text"
          required
          autoComplete="organization"
          placeholder={fields.business.placeholder}
          className={inputClass}
        />
      </div>

      <div>
        <label htmlFor="link" className={labelClass}>
          {fields.link.label}
        </label>
        <input
          id="link"
          name="link"
          type="text"
          required
          autoComplete="url"
          placeholder={fields.link.placeholder}
          className={inputClass}
        />
      </div>

      <div>
        <label htmlFor="message" className={labelClass}>
          {fields.message.label}
        </label>
        <textarea
          id="message"
          name="message"
          rows={2}
          placeholder={fields.message.placeholder}
          className={`${inputClass} resize-none`}
        />
      </div>

      {/* Honeypot — visually hidden, ignored by humans. */}
      <div className="absolute left-[-9999px]" aria-hidden="true">
        <label htmlFor="website">Leave this field empty</label>
        <input
          id="website"
          name="website"
          type="text"
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      {error && (
        <p role="alert" className="text-sm text-red-400">
          {error}
        </p>
      )}

      <div className="pt-2">
        <button
          type="submit"
          disabled={status === "submitting"}
          className="w-full rounded-full bg-white px-8 py-4 text-sm font-medium text-ink transition-opacity duration-200 hover:opacity-90 disabled:opacity-60 md:text-base"
        >
          {status === "submitting" ? submittingLabel : submitLabel}
        </button>
        <p className="mt-4 text-center text-sm text-muted">{consentNote}</p>
      </div>
    </form>
  );
}
