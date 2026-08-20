"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { ArrowLeft, Home, Compass } from "lucide-react";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
  const router = useRouter();

  // Motion Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: [0.215, 0.61, 0.355, 1.0] as const,
      },
    },
  };

  return (
    <div className="flex min-h-screen flex-col bg-[#0A0A0A] text-white selection:bg-white selection:text-black">
      {/* Main Content Area */}
      <main className="relative flex flex-1 items-center justify-center overflow-hidden px-6 py-36 lg:py-30">
        {/* Background Ambient Glow */}
        <div className="pointer-events-none absolute top-1/2 left-1/2 h-112.5 w-112.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/5 blur-[160px]" />
        
        {/* Decorative Grid Overlay */}
        <div 
          className="pointer-events-none absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
            backgroundSize: '36px 36px',
          }}
        />

        <motion.div
          className="relative z-10 mx-auto flex max-w-4xl flex-col items-center text-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Status Badge */}
          <motion.div variants={itemVariants} className="mb-6">
            <div className="inline-flex items-center gap-2.5 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 backdrop-blur-md">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-400" />
              </span>
              <span className="font-mono text-xs uppercase tracking-widest text-neutral-300">
                404 ERROR • PAGE UNREACHABLE
              </span>
            </div>
          </motion.div>

          {/* Floating 404 Graphic Visual */}
          <motion.div
            variants={itemVariants}
            className="relative my-2 select-none"
          >
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="relative"
            >
              <h1 className="font-heading text-8xl font-extrabold tracking-tighter text-transparent bg-clip-text bg-linear-to-b from-white via-neutral-300 to-neutral-700/60 sm:text-[11rem] md:text-[14rem] leading-none drop-shadow-[0_20px_50px_rgba(255,255,255,0.08)]">
                404
              </h1>
              
              {/* Subtle accent glow ring behind digits */}
              <div className="absolute inset-0 -z-10 mx-auto h-full w-3/4 rounded-full bg-white/10 blur-3xl opacity-50" />
            </motion.div>
          </motion.div>

          {/* Heading */}
          <motion.h2
            variants={itemVariants}
            className="font-heading text-3xl font-bold uppercase tracking-tight text-white sm:text-4xl md:text-5xl"
          >
            Page Not Found
          </motion.h2>

          {/* Supporting Copy */}
          <motion.p
            variants={itemVariants}
            className="mt-4 max-w-lg text-base text-neutral-400 sm:text-lg leading-relaxed"
          >
            The page you are looking for might have been moved, removed, had its name changed, or is temporarily unavailable.
          </motion.p>

          {/* Action CTAs */}
          <motion.div
            variants={itemVariants}
            className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row"
          >
            {/* Primary Action: Back to Home */}
            <Button href="/" variant="primary" className="w-full sm:w-auto">
              <Home className="mr-2 h-4 w-4" />
              Back to Home
            </Button>

            {/* Secondary Action: Go Back */}
            <button
              onClick={() => router.back()}
              type="button"
              className="group relative inline-flex w-full sm:w-auto items-center justify-center overflow-hidden rounded-full border border-white/20 bg-transparent px-8 py-3 font-heading text-lg font-semibold text-white transition-[background-color,border-color,color,box-shadow] duration-500 ease-out hover:border-white hover:bg-white/10 hover:shadow-[0_0_25px_rgba(255,255,255,0.12)] cursor-pointer"
            >
              <span className="absolute inset-0 -translate-x-full skew-x-12 bg-linear-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 ease-out group-hover:translate-x-[200%]" />
              <span className="relative z-10 flex items-center justify-center gap-2">
                <ArrowLeft className="h-4 w-4 transition-transform duration-300 group-hover:-translate-x-1" />
                Go Back
              </span>
            </button>
          </motion.div>

          {/* Quick Navigation Destination Pills */}
          <motion.div
            variants={itemVariants}
            className="mt-14 w-full max-w-md border-t border-white/10 pt-8"
          >
            <p className="mb-4 text-xs uppercase tracking-widest font-mono text-neutral-500 flex items-center justify-center gap-2">
              <Compass className="h-3.5 w-3.5 text-neutral-400" />
              Or explore popular destinations
            </p>
            <div className="flex flex-wrap items-center justify-center gap-2.5">
              {[
                { label: "Selected Works", href: "/#works" },
                { label: "Services", href: "/#services" },
                { label: "About Me", href: "/#about" },
                { label: "Contact", href: "https://cal.com/fr-rifat", isExternal: true },
              ].map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  target={link.isExternal ? "_blank" : "_self"}
                  className="rounded-full border border-white/10 bg-[#121216] px-4 py-1.5 text-xs text-neutral-300 transition-all duration-300 hover:border-white/30 hover:bg-white/10 hover:text-white"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
