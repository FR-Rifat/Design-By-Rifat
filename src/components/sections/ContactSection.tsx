"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";

export function ContactSection() {
  return (
    <section id="contact" className="bg-[#111111] px-6 py-20 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="rounded-[1rem] border border-white/10 bg-[#0a0a0a] px-8 py-8 lg:px-10 lg:py-9">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
            
            {/* Left Content */}
            <div className="flex items-center gap-10">
              {/* Animated Hand */}
              <motion.div animate={{ rotate: [0, 15, -10, 15, 0] }} transition={{ duration: 1, repeat: Infinity, ease: "easeInOut" }} className="origin-bottom text-5xl sm:text-6xl">
                👋
              </motion.div>

              <div className="max-w-3xl">
                <p className="font-accent text-sm capatalize text-[#a3a3a3]">
                  Contact Me
                </p>

                <h3 className="mt-3 font-heading text-3xl font-semibold capitalize text-white sm:text-4xl">
                  Let&apos;s talk about your project
                </h3>

                <p className="mt-3 max-w-3xl font-body text-base leading-7 text-[#8f8f8f] sm:text-lg">
                  Ready to stand out? Let&apos;s create a powerful visual narrative that cuts through the noise and defines your brand&apos;s presence. I&apos;m just a call away.
                </p>
              </div>
            </div>

            {/* Existing Button */}
            <div className="shrink-0 lg:ml-8">
              <Button href="/contact" variant="primary">
                Get In Touch
              </Button>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}