"use client";

import { useState, FormEvent } from "react";

const tradeOptions = [
  "Plumbing",
  "HVAC",
  "Electrical",
  "Roofing",
  "Painting",
  "Landscaping",
  "Pressure Washing",
  "Pest Control",
  "Moving",
  "Auto Detailing",
  "Remodeling",
  "Flooring & Carpet",
  "General Contractor",
  "Cleaning",
  "Other",
];

export default function LeadForm() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [businessName, setBusinessName] = useState("");
  const [industry, setIndustry] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    const payload = {
      firstName,
      lastName,
      email,
      phone,
      businessName,
      industry,
      message,
      source: "Xhine Systems Website",
      tags: ["website-lead"],
    };

    try {
      const url = process.env.NEXT_PUBLIC_GHL_WEBHOOK_URL;
      if (!url) throw new Error("Webhook not configured");

      const res = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (res.ok) setSubmitted(true);
      else setError("Something went wrong. Please try again.");
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const inputClass =
    "w-full rounded border border-xs-border bg-xs-black px-4 py-2.5 text-sm text-xs-white placeholder:text-xs-gray-dark focus:border-xs-green/40 focus:outline-none";

  if (submitted) {
    return (
      <div className="rounded-lg border border-xs-green/20 bg-xs-green/5 p-8 text-center">
        <div className="mb-3 text-3xl">✓</div>
        <h3 className="font-heading text-lg font-bold">Message Received</h3>
        <p className="mt-2 text-sm text-xs-gray">
          We&apos;ll reach out within 24 hours.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label className="mb-1 block text-xs text-xs-gray">First Name *</label>
          <input
            type="text"
            required
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            placeholder="John"
            className={inputClass}
          />
        </div>
        <div>
          <label className="mb-1 block text-xs text-xs-gray">Last Name *</label>
          <input
            type="text"
            required
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            placeholder="Smith"
            className={inputClass}
          />
        </div>
      </div>

      <div>
        <label className="mb-1 block text-xs text-xs-gray">Business Name *</label>
        <input
          type="text"
          required
          value={businessName}
          onChange={(e) => setBusinessName(e.target.value)}
          placeholder="Smith's Plumbing LLC"
          className={inputClass}
        />
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label className="mb-1 block text-xs text-xs-gray">
            Trade / Industry *
          </label>
          <select
            required
            value={industry}
            onChange={(e) => setIndustry(e.target.value)}
            className={`${inputClass} ${!industry ? "text-xs-gray-dark" : ""}`}
          >
            <option value="">Select your trade</option>
            {tradeOptions.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label className="mb-1 block text-xs text-xs-gray">Phone *</label>
          <input
            type="tel"
            required
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="(555) 123-4567"
            className={inputClass}
          />
        </div>
      </div>

      <div>
        <label className="mb-1 block text-xs text-xs-gray">Email *</label>
        <input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="john@smithplumbing.com"
          className={inputClass}
        />
      </div>

      <div>
        <label className="mb-1 block text-xs text-xs-gray">Message</label>
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Tell us a bit about your business..."
          rows={3}
          className={`${inputClass} resize-none`}
        />
      </div>

      {error && (
        <div className="rounded border border-red-500/20 bg-red-500/5 p-3 text-sm text-red-400">
          {error}
        </div>
      )}

      <button
        type="submit"
        disabled={loading}
        className="w-full rounded bg-xs-green py-3 text-sm font-semibold text-xs-black transition-colors hover:bg-xs-green-hover disabled:opacity-50"
      >
        {loading ? "Sending..." : "Send Message →"}
      </button>

      <p className="text-xs text-xs-gray/50 leading-relaxed">
        By submitting this form, you agree to receive SMS and email
        communications from Xhine Systems. Reply STOP to opt out at any time.
      </p>
    </form>
  );
}
