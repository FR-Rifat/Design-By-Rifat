"use client";

import { FormEvent, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    const form = e.currentTarget;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await res.json();

      if (!res.ok) {
        throw new Error(result.error || "Failed to send message. Please try again.");
      }

      setIsSuccess(true);
    } catch (err: any) {
      setError(err.message || "Something went wrong. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="mx-auto w-full max-w-4xl rounded-[2rem] border border-white/8 bg-[#111111] p-6 sm:p-8 lg:p-10">
      <div className="mx-auto mb-10 max-w-2xl text-center">
        <p className="mb-3 font-accent text-lg text-[#999999]">Start a project</p>
        <h2 className="font-heading text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl">
          Let&apos;s work together.
        </h2>
        <p className="mx-auto mt-4 max-w-lg font-body text-sm leading-6 text-[#777777]">
          Have a project in mind? Tell me a little about it and I&apos;ll get back to you soon.
        </p>
      </div>

      <AnimatePresence mode="wait">
        {isSuccess ? (
          <motion.div
            key="success"
            initial={{ opacity: 0, y: 15, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -15, scale: 0.98 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="mx-auto max-w-xl text-center py-12 px-6 sm:px-8 rounded-2xl border border-white/10 bg-neutral-900/50 backdrop-blur-sm"
          >
            {/* Animated Checkmark Circle */}
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 260, damping: 20, delay: 0.1 }}
              className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-white/5 border border-white/15 text-white shadow-2xl relative"
            >
              {/* Subtle background glow */}
              <div className="absolute inset-0 rounded-full bg-white/10 blur-md pointer-events-none" />

              <svg
                className="h-9 w-9 text-white relative z-10"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <motion.path
                  d="M5 13l4 4L19 7"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 1 }}
                  transition={{
                    pathLength: { duration: 0.5, ease: "easeOut", delay: 0.25 },
                    opacity: { duration: 0.1, delay: 0.25 },
                  }}
                />
              </svg>
            </motion.div>

            {/* Title */}
            <motion.h3
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.3, ease: "easeOut" }}
              className="font-heading text-2xl font-bold tracking-tight text-white sm:text-3xl mb-3"
            >
              Successfully Sent!
            </motion.h3>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.4, ease: "easeOut" }}
              className="font-body text-sm sm:text-base leading-relaxed text-[#999999] mb-8 max-w-md mx-auto"
            >
              Thank you for reaching out. I will get back to you shortly.
            </motion.p>

            {/* Action Button */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.5, ease: "easeOut" }}
            >
              <button
                type="button"
                onClick={() => setIsSuccess(false)}
                className="group relative inline-flex items-center justify-center overflow-hidden rounded-full border border-white/20 bg-white/5 px-6 py-2.5 font-heading text-xs font-semibold text-white transition-all duration-300 hover:bg-white hover:text-[#0a0a0a] active:scale-95"
              >
                <span>Send Another Message</span>
              </button>
            </motion.div>
          </motion.div>
        ) : (
          <motion.form
            key="form"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            onSubmit={handleSubmit}
            className="mx-auto max-w-6xl space-y-6"
          >
            {error && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                className="rounded-xl border border-red-500/20 bg-red-500/10 p-4 text-center font-body text-sm text-red-400"
              >
                {error}
              </motion.div>
            )}

            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <label htmlFor="name" className="mb-2 block font-body text-sm text-white/70">
                  Full Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Enter your name"
                  required
                  className="w-full rounded-xl border border-white/10 bg-[#0a0a0a] px-4 py-3.5 font-body text-sm text-white outline-none placeholder:text-white/25 transition-all duration-300 focus:border-white/25 focus:bg-[#0d0d0d]"
                />
              </div>

              <div>
                <label htmlFor="email" className="mb-2 block font-body text-sm text-white/70">
                  Email Address
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Enter your email"
                  required
                  className="w-full rounded-xl border border-white/10 bg-[#0a0a0a] px-4 py-3.5 font-body text-sm text-white outline-none placeholder:text-white/25 transition-all duration-300 focus:border-white/25 focus:bg-[#0d0d0d]"
                />
              </div>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <label htmlFor="projectType" className="mb-2 block font-body text-sm text-white/70">
                  Project Type
                </label>
                <select
                  id="projectType"
                  name="projectType"
                  required
                  defaultValue=""
                  className="w-full appearance-none rounded-xl border border-white/10 bg-[#0a0a0a] px-4 py-3.5 font-body text-sm text-white outline-none transition-all duration-300 focus:border-white/25"
                >
                  <option value="" disabled>
                    Select project type
                  </option>
                  <option value="ui-ux">UI/UX Design</option>
                  <option value="website">Website Design</option>
                  <option value="product">Product Design</option>
                  <option value="dashboard">Dashboard Design</option>
                  <option value="mobile">Mobile App Design</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="budget" className="mb-2 block font-body text-sm text-white/70">
                  Estimated Budget
                </label>
                <select
                  id="budget"
                  name="budget"
                  required
                  defaultValue=""
                  className="w-full appearance-none rounded-xl border border-white/10 bg-[#0a0a0a] px-4 py-3.5 font-body text-sm text-white outline-none transition-all duration-300 focus:border-white/25"
                >
                  <option value="" disabled>
                    Select your budget
                  </option>
                  <option value="100-300">$100 – $300</option>
                  <option value="300-500">$300 – $500</option>
                  <option value="500-1000">$500 – $1,000</option>
                  <option value="1000-plus">$1,000+</option>
                </select>
              </div>
            </div>

            <div>
              <label htmlFor="message" className="mb-2 block font-body text-sm text-white/70">
                Project Details
              </label>
              <textarea
                id="message"
                name="message"
                rows={6}
                required
                placeholder="Tell me about your project, goals, timeline, and requirements..."
                className="w-full resize-none rounded-xl border border-white/10 bg-[#0a0a0a] px-4 py-3.5 font-body text-sm leading-6 text-white outline-none placeholder:text-white/25 transition-all duration-300 focus:border-white/25 focus:bg-[#0d0d0d]"
              />
            </div>

            <div className="flex flex-col gap-4 border-t border-white/6 pt-6 sm:flex-row sm:items-center sm:justify-between">
              <p className="font-body text-xs text-[#666666]">I usually respond within 24–48 hours.</p>

              <button
                type="submit"
                disabled={isSubmitting}
                className="group relative inline-flex items-center justify-center overflow-hidden rounded-full border border-white bg-white px-7 py-3.5 font-heading text-sm font-semibold text-[#0a0a0a] transition-all duration-300 hover:bg-transparent hover:text-white active:scale-95 disabled:opacity-60 disabled:cursor-not-allowed"
              >
                <span className="relative z-10 flex items-center gap-2">
                  {isSubmitting ? (
                    <>
                      <svg className="h-4 w-4 animate-spin text-current" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                      </svg>
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                    </>
                  )}
                </span>
              </button>
            </div>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
}