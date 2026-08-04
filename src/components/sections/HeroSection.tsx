"use client";

import Image from "next/image";
import { Button } from "@/components/ui/Button";
export default function Hero() {
  return (
    <section id="home" className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#111111] px-6">
      {/* Background Circles */}
      {/* <div className="absolute inset-0 flex items-center justify-center">
        <div className="h-112.5 w-112.5 rounded-full border border-white/5" />
        <div className="absolute h-175 w-175 rounded-full border border-white/5" />
        <div className="absolute h-237.5 w-237.5 rounded-full border border-white/3" />
        <div className="absolute h-300 w-300 rounded-full border border-white/2" />
      </div> */}

      {/* Glow */}
      <div className="absolute h-125 w-125 rounded-full bg-white/5 blur-[180px]" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex max-w-5xl flex-col items-center text-center">
        {/* Profile */}
        <div className="relative mb-8">
          <div className="rounded-full border-4 border-white/10 bg-neutral-800 shadow-2xl">
            <Image
              src="/images/me-3.png"
              alt="Profile"
              width={160}
              height={160}
              className="rounded-full"
              priority
            />
          </div>
        </div>

        {/* Small Title */}
        <span className="text-lg font-accent font-normal text-neutral-400">
          Hi, I am
        </span>

        {/* Main Title */}
        <h1 className="text-4xl font-heading font-semibold uppercase leading-none text-white md:text-8xl lg:text-9xl">
          FR{" "}
          <span className="bg-linear-to-r from-neutral-300 via-neutral-500 to-neutral-700 bg-clip-text text-transparent">
            RIFAT
          </span>
        </h1>

        {/* Description */}
        <p className="mt-2 max-w-2xl text-lg  text-neutral-400">
          A Product Designer passionate about creating user-friendly digital
          experiences with clean interfaces and meaningful interactions.
        </p>

        {/* Buttons */}
        <div className="mt-10 flex flex-col gap-5 sm:flex-row">
         <Button href="#works" variant="primary">
            View Projects
            </Button>

            <Button href="/resume.pdf" variant="secondary">
            Download Resume
            </Button>
        </div>
      </div>
    </section>
  );
}