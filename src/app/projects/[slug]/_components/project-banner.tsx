"use client";

import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";
import { Share2 } from "lucide-react";
import { Button } from "@/components/ui/Button";

type Project = {
  slug: string;
  title: string;
  category: string;
  description: string;
  image: string;

  // Project Meta
  industry?: string;
  duration?: string;
  projectType?: string;
  team?: string;
  platform?: string;

  // Existing Project Info
  client?: string;
  location?: string;
  year?: string;
  role?: string;

  // Case Study Content
  services?: string[];
  clientNeed?: string;
  challenge?: string;
  solution?: string;
  outcome?: string;

  // Design Tools
  tools?: string[];

  // Client Feedback
  clientFeedback?: string;

  // External Links
  liveUrl?: string;
  figmaUrl?: string;

  // Project Gallery
  images?: string[];
};

type ProjectBannerProps = {
  project: Project;
};

export function ProjectBanner({ project }: ProjectBannerProps) {
  const [copiedLink, setCopiedLink] = useState(false);

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      setCopiedLink(true);

      setTimeout(() => {
        setCopiedLink(false);
      }, 2000);
    } catch (error) {
      console.error("Failed to copy link:", error);
    }
  };

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const scrollToPreview = () => {
    const preview = document.getElementById("preview");

    if (!preview) return;

    const headerOffset = 100;
    const position =
      preview.getBoundingClientRect().top + window.scrollY - headerOffset;

    window.scrollTo({
      top: position,
      behavior: "smooth",
    });
  };

  return (
    <section className="relative overflow-hidden border-b border-white/8 bg-[#0a0a0a] px-4 pb-12 pt-6 sm:px-6 sm:pb-20 sm:pt-12 lg:px-8 lg:pb-28">
      <div className="relative mx-auto max-w-7xl">
        {/* Top Navigation */}
        <div className="flex items-center justify-between gap-4">
          <Button
            href="/#works"
            variant="secondary"
            className="px-4 py-3! text-sm! sm:text-base! font-light!"
          >
            Back to Work
          </Button>

          <Button
            onClick={handleCopyLink}
            variant="ghost"
            className="px-4 py-3! text-sm! sm:text-base font-light! capitalize"
          >
            {copiedLink ? (
              <>
                <span className="font-bold">Copied</span>
              </>
            ) : (
              <>
                <Share2 className="h-3.5 w-3.5" />
                <span>Share</span>
              </>
            )}
          </Button>
        </div>

        {/* Hero Content */}
        <div className="mt-8 sm:mt-14">
          {/* Left Content */}
          <div className="lg:col-span-8">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex flex-wrap items-center gap-2.5"
            ></motion.div>

            {/* Title */}
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.65,
                delay: 0.05,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="mt-4 max-w-5xl font-heading text-3xl font-semibold leading-tight text-white sm:mt-7 sm:text-5xl md:text-7xl lg:text-8xl"
            >
              {project.title}
            </motion.h1>
            <div className="mt-6 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
              {/* Description */}
              <motion.p
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  delay: 0.15,
                }}
                className="max-w-2xl font-body text-base text-white/45 sm:text-lg"
              >
                {project.description}
              </motion.p>

              {/* Right Actions */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  delay: 0.2,
                }}
                className="shrink-0"
              >
                {(project.liveUrl && project.liveUrl !== "#") ||
                (project.figmaUrl && project.figmaUrl !== "#") ? (
                  <div className="flex flex-wrap items-center gap-3 lg:justify-end">
                    {/* View Live */}
                    {project.liveUrl && project.liveUrl !== "#" && (
                      <Button
                        href={project.liveUrl}
                        blank
                        variant="primary"
                        className="px-5 py-2.5 text-xs sm:px-6 sm:py-3 sm:text-sm"
                      >
                        View Live
                      </Button>
                    )}

                    {/* View Figma */}
                    {project.figmaUrl && project.figmaUrl !== "#" && (
                      <Button
                        href={project.figmaUrl}
                        blank
                        variant="secondary"
                        className="px-5 py-2.5 text-xs sm:px-6 sm:py-3 sm:text-sm"
                      >
                        View Figma
                      </Button>
                    )}
                  </div>
                ) : null}
              </motion.div>
            </div>
          </div>
        </div>

        {/* Meta Information */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            delay: 0.3,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="mt-8 overflow-hidden rounded-md border border-white/10 bg-white/2.5 backdrop-blur-xl sm:mt-10"
        >
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6">
            <MetaCard label="Industry" value={project.industry || "—"} />
            <MetaCard label="Duration" value={project.duration || "—"} />
            <MetaCard label="Project Type" value={project.projectType || "—"} />
            <MetaCard label="Team" value={project.team || "—"} />
            <MetaCard label="Platform" value={project.platform || "—"} />
            <MetaCard label="Role" value={project.role || "UI/UX Designer"} />
          </div>
        </motion.div>

        {/* Featured Project Image */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            delay: 0.4,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="group relative mt-6 overflow-hidden rounded-md border border-white/10 bg-[#111111] shadow-[0_30px_100px_rgba(0,0,0,0.45)] sm:mt-10"
        >
          {/* Image */}
          <div className="relative aspect-4/3 w-full overflow-hidden bg-black sm:aspect-video">
            <Image
              src={project.image}
              alt={project.title}
              fill
              priority
              sizes="(max-width: 640px) 100vw, (max-width: 1280px) 90vw, 1280px"
              className="object-cover transition-transform duration-1200 ease-out group-hover:scale-[1.015]"
            />

            {/* Image Overlay */}
            <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-black/20 via-transparent to-transparent" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function MetaCard({ label, value }: { label: string; value: string }) {
  return (
    <div className="group relative min-h-24 overflow-hidden border-b border-white/[0.07] px-5 py-6 transition-all duration-500 hover:bg-white/[0.035] sm:px-6 lg:min-h-24 lg:border-b-0 lg:border-r lg:px-7 lg:last:border-r-0">
      {/* Hover Glow */}
      <div className="pointer-events-none absolute -right-12 -top-12 h-24 w-24 rounded-full bg-white/4 blur-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

      {/* Content */}
      <div className="relative flex h-3 flex-col justify-between gap-2">
        {/* Label */}
        <div className="flex items-center gap-2">
          <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-white/25 transition-all duration-300 group-hover:bg-white/70 group-hover:shadow-[0_0_8px_rgba(255,255,255,0.5)]" />

          <span className="font-body text-[10px] font-medium uppercase tracking-[0.18em] text-white/35 transition-colors duration-300 group-hover:text-white/55 sm:text-[11px]">
            {label}
          </span>
        </div>

        {/* Value */}
        <span className="max-w-full font-carter text-sm leading-5 text-white/75 transition-all duration-300 group-hover:translate-x-0.5 group-hover:text-white sm:text-[15px]">
          {value}
        </span>
      </div>

      {/* Desktop Hover Line */}
      <span className="absolute bottom-0 left-0 h-px w-0 bg-white/50 transition-all duration-500 group-hover:w-full" />

      {/* Mobile / Tablet Bottom Divider */}
      <span className="absolute bottom-0 left-0 h-px w-full bg-white/[0.07] lg:hidden" />

      {/* Vertical Divider */}
      <span className="absolute right-0 top-0 hidden h-full w-px bg-white/[0.07] lg:block" />
    </div>
  );
}