"use client";

import { useState, FormEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import CTAButton from "./CTAButton";

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
      const webhookUrl = process.env.NEXT_PUBLIC_GHL_WEBHOOK_URL;
      if (!webhookUrl) {
        throw new Error("Webhook URL not configured");
      }

      const res = await fetch(webhookUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (res.ok) {
        setSubmitted(true);
      } else {
        setError("Something went wrong. Please try again.");
      }
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const inputStyles =
    "w-full rounded-md border border-brand-border bg-brand-black/50 px-4 py-3 text-sm text-brand-white placeholder:text-brand-muted/50 transition-colors focus:border-brand-accent/40 focus:outline-none focus:ring-1 focus:ring-brand-accent/20";

  return (
    <AnimatePresence mode="wait">
      {submitted ? (
        <motion.div
          key="success"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="rounded-lg border border-brand-accent/20 bg-brand-accent/5 p-8 text-center"
        >
          <div className="mb-4 flex justify-center">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-accent/10">
              <svg
                className="h-6 w-6 text-brand-accent"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
          </div>
          <h3 className="font-heading text-lg font-semibold text-brand-white mb-2">
            Message Received
          </h3>
          <p className="text-sm text-brand-muted">
            We&apos;ll reach out within 24 hours.
          </p>
        </motion.div>
      ) : (
        <motion.form
          key="form"
          onSubmit={handleSubmit}
          className="space-y-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label
                htmlFor="firstName"
                className="mb-1.5 block text-xs font-medium text-brand-muted"
              >
                First Name *
              </label>
              <input
                id="firstName"
                type="text"
                required
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                placeholder="John"
                className={inputStyles}
              />
            </div>
            <div>
              <label
                htmlFor="lastName"
                className="mb-1.5 block text-xs font-medium text-brand-muted"
              >
                Last Name *
              </label>
              <input
                id="lastName"
                type="text"
                required
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                placeholder="Smith"
                className={inputStyles}
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="businessName"
              className="mb-1.5 block text-xs font-medium text-brand-muted"
            >
              Business Name *
            </label>
            <input
              id="businessName"
              type="text"
              required
              value={businessName}
              onChange={(e) => setBusinessName(e.target.value)}
              placeholder="Smith's Plumbing LLC"
              className={inputStyles}
            />
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label
                htmlFor="industry"
                className="mb-1.5 block text-xs font-medium text-brand-muted"
              >
                Trade / Industry *
              </label>
              <select
                id="industry"
                required
                value={industry}
                onChange={(e) => setIndustry(e.target.value)}
                className={`${inputStyles} ${
                  !industry ? "text-brand-muted/50" : ""
                }`}
              >
                <option value="">Select your trade</option>
                <option value="Plumbing">Plumbing</option>
                <option value="HVAC">HVAC</option>
                <option value="Electrical">Electrical</option>
                <option value="Painting">Painting</option>
                <option value="Roofing">Roofing</option>
                <option value="Landscaping">Landscaping</option>
                <option value="Auto Detailing">Auto Detailing</option>
                <option value="General Contractor">General Contractor</option>
                <option value="Cleaning">Cleaning</option>
                <option value="Pressure Washing">Pressure Washing</option>
                <option value="Other">Other</option>
              </select>
            </div>
            <div>
              <label
                htmlFor="phone"
                className="mb-1.5 block text-xs font-medium text-brand-muted"
              >
                Phone *
              </label>
              <input
                id="phone"
                type="tel"
                required
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="(555) 123-4567"
                className={inputStyles}
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="email"
              className="mb-1.5 block text-xs font-medium text-brand-muted"
            >
              Email *
            </label>
            <input
              id="email"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="john@smithplumbing.com"
              className={inputStyles}
            />
          </div>

          <div>
            <label
              htmlFor="message"
              className="mb-1.5 block text-xs font-medium text-brand-muted"
            >
              Message
            </label>
            <textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Tell us about your business and what you're looking for..."
              rows={4}
              className={`${inputStyles} resize-none`}
            />
          </div>

          {error && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="rounded-md border border-red-500/20 bg-red-500/5 p-3"
            >
              <p className="text-sm text-red-400">{error}</p>
            </motion.div>
          )}

          <CTAButton
            type="submit"
            variant="primary"
            size="lg"
            className="w-full"
            disabled={loading}
          >
            {loading ? (
              <span className="flex items-center gap-2">
                <svg
                  className="h-4 w-4 animate-spin"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  />
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                  />
                </svg>
                Sending...
              </span>
            ) : (
              "Send Message"
            )}
          </CTAButton>

          <p className="text-xs text-brand-muted/60 leading-relaxed">
            By submitting this form, you agree to receive SMS and email
            communications from Xhine Systems. Reply STOP to opt out at any
            time.
          </p>
        </motion.form>
      )}
    </AnimatePresence>
  );
}
