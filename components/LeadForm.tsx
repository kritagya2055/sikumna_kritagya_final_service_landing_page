"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { siteConfig } from "@/site.config";

const { fields, submitLabel, submittingLabel, consentNote } = siteConfig.form;

type Status = "idle" | "submitting" | "error";

export function LeadForm() {
  const router = useRouter();
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");
    setError(null);

    const formData = new FormData(event.currentTarget);
    const payload = {
      name: String(formData.get("name") ?? "").trim(),
      email: String(formData.get("email") ?? "").trim(),
      company: String(formData.get("company") ?? "").trim(),
      message: String(formData.get("message") ?? "").trim(),
      // Honeypot — bots fill this, humans never see it.
      website: String(formData.get("website") ?? ""),
    };

    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => null);
        throw new Error(data?.error ?? "Something went wrong. Please try again.");
      }

      router.push("/thanks");
    } catch (err) {
      setStatus("error");
      setError(err instanceof Error ? err.message : "Something went wrong.");
    }
  }

  const labelClass = "block text-sm font-medium text-offwhite mb-2";
  const inputClass =
    "w-full rounded-md bg-charcoal border border-white/10 px-4 py-3 text-white placeholder:text-muted focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold transition-colors duration-200";

  return (
    <form onSubmit={handleSubmit} className="space-y-6" noValidate>
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
        <label htmlFor="company" className={labelClass}>
          {fields.company.label}
        </label>
        <input
          id="company"
          name="company"
          type="text"
          autoComplete="organization"
          placeholder={fields.company.placeholder}
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
          rows={4}
          required
          placeholder={fields.message.placeholder}
          className={`${inputClass} resize-none`}
        />
      </div>

      {/* Honeypot field — visually hidden, ignored by humans. */}
      <div className="absolute left-[-9999px]" aria-hidden="true">
        <label htmlFor="website">Leave this field empty</label>
        <input id="website" name="website" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      {error && (
        <p role="alert" className="text-sm text-gold">
          {error}
        </p>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="w-full rounded-md bg-gold px-6 py-4 font-medium text-black transition-opacity duration-200 hover:opacity-90 disabled:opacity-60"
      >
        {status === "submitting" ? submittingLabel : submitLabel}
      </button>

      <p className="text-xs text-muted text-center">{consentNote}</p>
    </form>
  );
}
