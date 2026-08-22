"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";

export function ContactSection() {
  return (
    <section id="contact" className="bg-[#111111] px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="rounded-[1rem] border border-white/10 bg-[#0a0a0a] p-6 sm:p-8 lg:px-10 lg:py-9">
          <div className="flex flex-col gap-6 sm:gap-8 lg:flex-row lg:items-center lg:justify-between">
            
            {/* Left Content */}
            <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:gap-8 lg:gap-10">
              {/* Animated Hand */}
              <motion.div animate={{ rotate: [0, 15, -10, 15, 0] }} transition={{ duration: 1, repeat: Infinity, ease: "easeInOut" }} className="origin-bottom text-4xl sm:text-6xl">
                👋
              </motion.div>

              <div className="max-w-3xl">
                <p className="font-carter text-sm capitalize text-[#a3a3a3] sm:text-base">
                  Contact Me
                </p>

                <h3 className="mt-2 font-heading text-2xl font-semibold capitalize text-white sm:mt-3 sm:text-3xl lg:text-4xl">
                  Let&apos;s talk about your project
                </h3>

                <p className="mt-2 max-w-3xl font-body text-sm leading-6 text-[#8f8f8f] sm:mt-3 sm:text-base sm:leading-7 lg:text-lg">
                  Ready to stand out? Let&apos;s create a powerful visual narrative that cuts through the noise and defines your brand&apos;s presence. I&apos;m just a call away.
                </p>
              </div>
            </div>

            {/* Existing Button */}
            <div className="shrink-0 lg:ml-8">
              <Button href="/contact" variant="primary" className="w-full text-center sm:w-auto">
                Get In Touch
              </Button>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}