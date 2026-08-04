"use client";

import { FormEvent, useState } from "react";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="mx-auto w-full max-w-4xl top-10 my-20 rounded-[2rem] border border-white/8 bg-[#111111] p-6 sm:p-8 lg:p-10">
      <div className="mx-auto mb-10 max-w-2xl text-center">
        <p className="mb-3 font-accent text-lg text-[#999999]">Start a project</p>
        <h2 className="font-heading text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl">Let&apos;s work together.</h2>
        <p className="mx-auto mt-4 max-w-lg font-body text-sm leading-6 text-[#777777]">Have a project in mind? Tell me a little about it and I&apos;ll get back to you soon.</p>
      </div>

      <form onSubmit={handleSubmit} className="mx-auto max-w-6xl space-y-6">
        <div className="grid gap-6 md:grid-cols-2">
          <div>
            <label htmlFor="name" className="mb-2 block font-body text-sm text-white/70">Full Name</label>
            <input id="name" name="name" type="text" placeholder="Enter your name" required className="w-full rounded-xl border border-white/10 bg-[#0a0a0a] px-4 py-3.5 font-body text-sm text-white outline-none placeholder:text-white/25 transition-all duration-300 focus:border-white/25 focus:bg-[#0d0d0d]" />
          </div>

          <div>
            <label htmlFor="email" className="mb-2 block font-body text-sm text-white/70">Email Address</label>
            <input id="email" name="email" type="email" placeholder="Enter your email" required className="w-full rounded-xl border border-white/10 bg-[#0a0a0a] px-4 py-3.5 font-body text-sm text-white outline-none placeholder:text-white/25 transition-all duration-300 focus:border-white/25 focus:bg-[#0d0d0d]" />
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <div>
            <label htmlFor="projectType" className="mb-2 block font-body text-sm text-white/70">Project Type</label>
            <select id="projectType" name="projectType" required defaultValue="" className="w-full appearance-none rounded-xl border border-white/10 bg-[#0a0a0a] px-4 py-3.5 font-body text-sm text-white outline-none transition-all duration-300 focus:border-white/25">
              <option value="" disabled>Select project type</option>
              <option value="ui-ux">UI/UX Design</option>
              <option value="website">Website Design</option>
              <option value="product">Product Design</option>
              <option value="dashboard">Dashboard Design</option>
              <option value="mobile">Mobile App Design</option>
              <option value="other">Other</option>
            </select>
          </div>

          <div>
            <label htmlFor="budget" className="mb-2 block font-body text-sm text-white/70">Estimated Budget</label>
            <select id="budget" name="budget" required defaultValue="" className="w-full appearance-none rounded-xl border border-white/10 bg-[#0a0a0a] px-4 py-3.5 font-body text-sm text-white outline-none transition-all duration-300 focus:border-white/25">
              <option value="" disabled>Select your budget</option>
              <option value="100-300">$100 – $300</option>
              <option value="300-500">$300 – $500</option>
              <option value="500-1000">$500 – $1,000</option>
              <option value="1000-plus">$1,000+</option>
            </select>
          </div>
        </div>

        <div>
          <label htmlFor="message" className="mb-2 block font-body text-sm text-white/70">Project Details</label>
          <textarea id="message" name="message" rows={6} required placeholder="Tell me about your project, goals, timeline, and requirements..." className="w-full resize-none rounded-xl border border-white/10 bg-[#0a0a0a] px-4 py-3.5 font-body text-sm leading-6 text-white outline-none placeholder:text-white/25 transition-all duration-300 focus:border-white/25 focus:bg-[#0d0d0d]" />
        </div>

        <div className="flex flex-col gap-4 border-t border-white/[0.06] pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-body text-xs text-[#666666]">I usually respond within 24–48 hours.</p>

          <button type="submit" className="group relative inline-flex items-center justify-center overflow-hidden rounded-full border border-white bg-white px-7 py-3.5 font-heading text-sm font-semibold text-[#0a0a0a] transition-all duration-300 hover:bg-transparent hover:text-white active:scale-95">
            <span className="relative z-10 flex items-center gap-2">
              {submitted ? "Message Sent" : "Send Message"}
              <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
            </span>
          </button>
        </div>

        {submitted && <p className="text-center font-body text-sm text-white/60">Thanks! Your message has been submitted successfully.</p>}
      </form>
    </div>
  );
}