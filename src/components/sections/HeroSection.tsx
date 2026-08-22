"use client";

import Image from "next/image";
import { Button } from "@/components/ui/Button";
export default function Hero() {
  return (
    <section id="home" className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#111111] px-4 py-16 sm:px-6 sm:py-20 lg:px-8">

      {/* Glow */}
      <div className="absolute h-125 w-125 rounded-full bg-white/5 blur-[180px]" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex max-w-5xl flex-col items-center text-center">
        {/* Profile */}
        <div className="relative mb-6 sm:mb-8">
          <div className="rounded-full border-4 border-white/10 bg-neutral-800 shadow-2xl">
            <Image
              src="/images/me-3.png"
              alt="Profile"
              width={160}
              height={160}
              className="h-28 w-28 rounded-full object-cover sm:h-36 sm:w-36 md:h-40 md:w-40"
              priority
            />
          </div>
        </div>

        {/* Small Title */}
        <span className="font-carter text-base font-normal text-neutral-400 sm:text-lg">
          Hi, I am
        </span>

        {/* Main Title */}
        <h1 className="font-heading text-3xl font-semibold uppercase leading-none text-white sm:text-6xl md:text-8xl lg:text-9xl">
          FR{" "}
          <span className="bg-linear-to-r from-neutral-300 via-neutral-500 to-neutral-700 bg-clip-text text-transparent">
            RIFAT
          </span>
        </h1>

        {/* Description */}
        <p className="mt-3 max-w-2xl font-body text-base leading-relaxed text-neutral-400 sm:text-lg">
          A Product Designer passionate about creating user-friendly digital
          experiences with clean interfaces and meaningful interactions.
        </p>

        {/* Buttons */}
        <div className="mt-8 flex w-full flex-col gap-4 sm:w-auto sm:flex-row sm:gap-5">
          <Button href="#works" variant="primary" className="w-full text-center sm:w-auto">
            View Projects
          </Button>

          <Button href="/resume.pdf" variant="secondary" className="w-full text-center sm:w-auto">
            Download Resume
          </Button>
        </div>
      </div>
    </section>
  );
}