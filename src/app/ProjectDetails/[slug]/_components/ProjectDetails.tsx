"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { motion, AnimatePresence, useScroll, useSpring } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Check,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  Copy,
  ExternalLink,
  Globe,
  Info,
  Laptop,
  Layers,
  Maximize2,
  Minimize2,
  Monitor,
  Moon,
  Palette,
  RefreshCw,
  Share2,
  Smartphone,
  Sparkles,
  Sun,
  Tablet,
  Target,
  TrendingUp,
  X,
  Zap,
} from "lucide-react";
import { projects } from "@/data/content";

type ProjectPageProps = {
  params: {
    slug: string;
  };
};

// Fallback project-specific metrics for rich case study reporting
const projectMetricsMap: Record<
  string,
  { label: string; value: string; detail: string }[]
> = {
  "care-marketplace": [
    {
      label: "Provider Onboarding",
      value: "+48%",
      detail: "Increased provider registration speed",
    },
    {
      label: "Search Efficiency",
      value: "3.2x",
      detail: "Faster matching between clients & care providers",
    },
    {
      label: "User Satisfaction",
      value: "98%",
      detail: "Positive feedback from initial usability tests",
    },
  ],
  "car-carrier-group": [
    {
      label: "Quote Conversions",
      value: "+55%",
      detail: "Streamlined shipping estimation funnel",
    },
    {
      label: "Booking Duration",
      value: "-35%",
      detail: "Reduced time to finalize transport requests",
    },
    {
      label: "Workflow Accuracy",
      value: "99.4%",
      detail: "Fewer erroneous quote entries by users",
    },
  ],
  sidequote: [
    {
      label: "Directory Engagement",
      value: "+62%",
      detail: "Higher exploration of business profile pages",
    },
    {
      label: "Comparison Velocity",
      value: "2.8x",
      detail: "More side-by-side service comparisons made",
    },
    {
      label: "Vendor Inquiries",
      value: "+40%",
      detail: "Direct quotes requested through directory",
    },
  ],
  imoscan: [
    {
      label: "Scan Execution Speed",
      value: "1.4s",
      detail: "Instant device status & IMEI verification",
    },
    {
      label: "App Store Rating",
      value: "4.9/5",
      detail: "Unanimous praise for simple mobile UX",
    },
    {
      label: "Daily Active Checks",
      value: "25k+",
      detail: "High retention across second-hand phone buyers",
    },
  ],
};

// Tool metadata mapping with visual tags
const toolIconsMap: Record<string, string> = {
  Figma: "🎨",
  FigJam: "📌",
  Photoshop: "🖼️",
  Illustrator: "📐",
  Framer: "⚡",
  "Next.js": "🌐",
  React: "⚛️",
  "Tailwind CSS": "💨",
};

export default function ProjectDetails({ params }: ProjectPageProps) {
  const project = projects.find((item) => item.slug === params.slug);

  if (!project) {
    notFound();
  }

  // Find index for next / prev navigation
  const currentIndex = projects.findIndex((item) => item.slug === project.slug);
  const prevProject =
    projects[(currentIndex - 1 + projects.length) % projects.length];
  const nextProject = projects[(currentIndex + 1) % projects.length];

  const galleryImages =
    project.images && project.images.length > 0
      ? project.images
      : [project.image];

  // UI Interactive States
  const [activeTab, setActiveTab] = useState<"overview" | "challenge" | "preview" | "gallery" | "impact" | "role">("overview");
  const [deviceFrame, setDeviceFrame] = useState<"desktop" | "tablet" | "mobile">("desktop");
  const [previewMode, setPreviewMode] = useState<"live" | "prototype">("live");
  const [activeScreenIndex, setActiveScreenIndex] = useState(0);
  const [previewBgTheme, setPreviewBgTheme] = useState<"dark" | "light">("dark");
  const [zoomScale, setZoomScale] = useState<number>(100);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [copiedLink, setCopiedLink] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [activeHotspot, setActiveHotspot] = useState<number | null>(0);

  // Reading progress scroll bar
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  // Handle Share / Copy Link
  const handleCopyLink = () => {
    if (typeof window !== "undefined") {
      navigator.clipboard.writeText(window.location.href);
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 2500);
    }
  };

  // Keyboard navigation for Lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (lightboxIndex === null) return;
      if (e.key === "Escape") setLightboxIndex(null);
      if (e.key === "ArrowRight")
        setLightboxIndex((prev) => (prev! + 1) % galleryImages.length);
      if (e.key === "ArrowLeft")
        setLightboxIndex((prev) => (prev! - 1 + galleryImages.length) % galleryImages.length);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [lightboxIndex, galleryImages.length]);

  // Section Observer for active navigation pill highlight
  useEffect(() => {
    const sections = ["overview", "challenge", "preview", "gallery", "impact", "role"];
    const handleScroll = () => {
      const scrollPos = window.scrollY + 200;
      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveTab(sectionId as any);
            break;
          }
        }
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const yOffset = -90;
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  // Metrics data for this project
  const metrics = projectMetricsMap[project.slug] || [
    {
      label: "User Engagement",
      value: "+45%",
      detail: "Improved interaction rate across key landing touchpoints",
    },
    {
      label: "Task Speed",
      value: "2.5x",
      detail: "Faster completion of primary navigation flows",
    },
    {
      label: "Satisfaction Rate",
      value: "96%",
      detail: "Positive user feedback during prototype validation",
    },
  ];

  // Simulated Hotspot feature callouts for prototype mode
  const screenHotspots = [
    {
      title: "Hero Section & Clear CTA",
      description: "High-contrast visual hierarchy encouraging immediate user action and reducing bounce rates.",
      x: "25%",
      y: "35%",
    },
    {
      title: "Intuitive Search & Filter",
      description: "Frictionless multi-attribute filter pills allowing users to refine complex datasets effortlessly.",
      x: "70%",
      y: "48%",
    },
    {
      title: "Structured Information Cards",
      description: "Clean card layouts with standardized spacing to maximize scannability and accessibility.",
      x: "45%",
      y: "75%",
    },
  ];

  return (
    <main className="relative min-h-screen bg-[#070708] text-zinc-100 selection:bg-white selection:text-black">
      {/* Top Reading Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 z-50 h-[3px] bg-gradient-to-r from-neutral-400 via-white to-neutral-300 origin-left"
        style={{ scaleX }}
      />


      {/* Hero Header Section */}
  

      {/* Section 1: Overview & Client Needs */}
      <section id="overview" className="px-6 py-24 lg:px-12 lg:py-32 border-b border-white/10">
        <div className="mx-auto max-w-7xl space-y-16">
          <SectionHeader
            step="01"
            title="Project Overview & Client Need"
            subtitle="Understanding the core purpose, user requirements, and product goals."
          />

          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            {/* Main Narrative */}
            <div className="lg:col-span-7 space-y-6">
              <h3 className="font-heading text-2xl font-semibold text-white sm:text-3xl">
                A purpose-driven interface crafted for impact.
              </h3>
              <p className="text-base text-zinc-400 leading-relaxed sm:text-lg font-normal">
                {project.clientNeed ||
                  "The project was initiated to address key user frictions in navigating complex digital information while ensuring high visual clarity and simple task completion."}
              </p>
              <p className="text-base text-zinc-400 leading-relaxed font-normal">
                By combining modern design systems with intentional typography and spatial hierarchy, the experience transforms complex user journeys into structured, delight-driven digital touchpoints.
              </p>

              {/* Service Pills */}
              {project.services && project.services.length > 0 && (
                <div className="pt-4 space-y-3">
                  <span className="text-xs uppercase tracking-widest font-mono text-zinc-500 block">
                    Scope of Services Delivered
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {project.services.map((service) => (
                      <span
                        key={service}
                        className="rounded-lg border border-white/10 bg-[#121216] px-3.5 py-1.5 text-xs text-zinc-300"
                      >
                        {service}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Core Objective Cards */}
            <div className="lg:col-span-5 space-y-4">
              <ObjectiveCard
                icon={<Target className="w-5 h-5 text-indigo-400" />}
                title="Primary Goal"
                description="Simplify complex navigation flows and present key content intuitively."
              />
              <ObjectiveCard
                icon={<Sparkles className="w-5 h-5 text-amber-400" />}
                title="Design Philosophy"
                description="Minimalism paired with bold typography, high contrast, and smooth micro-interactions."
              />
              <ObjectiveCard
                icon={<TrendingUp className="w-5 h-5 text-emerald-400" />}
                title="Expected Outcome"
                description="Drive higher user retention, faster task speed, and strong brand trust."
              />
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Challenges & UX Solutions */}
      <section id="challenge" className="px-6 py-24 lg:px-12 lg:py-32 border-b border-white/10 bg-[#0A0A0D]">
        <div className="mx-auto max-w-7xl space-y-16">
          <SectionHeader
            step="02"
            title="The Challenge & UX Solution"
            subtitle="Framing core design problems and detailing the UX solutions engineered."
          />

          <div className="grid gap-8 md:grid-cols-2">
            {/* The Challenge Card */}
            <div className="rounded-2xl border border-rose-500/20 bg-gradient-to-b from-rose-950/20 to-[#0F0F14] p-8 space-y-6">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-semibold uppercase tracking-widest text-rose-400">
                  01 / The Challenge
                </span>
                <span className="rounded-full bg-rose-500/10 px-3 py-1 text-xs text-rose-400">
                  Problem Statement
                </span>
              </div>
              <h3 className="font-heading text-2xl font-semibold text-white">
                Friction in User Journey & Information Complexity
              </h3>
              <p className="text-base text-zinc-400 leading-relaxed">
                {project.challenge ||
                  "Organizing vast content structures without cluttering the interface or overwhelming first-time users."}
              </p>
              <ul className="space-y-2.5 pt-2 text-xs text-zinc-400">
                <li className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-rose-400 mt-1.5 shrink-0" />
                  <span>Cognitive overload during key decision steps</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-rose-400 mt-1.5 shrink-0" />
                  <span>Inconsistent component hierarchy across screens</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-rose-400 mt-1.5 shrink-0" />
                  <span>Need for scalable design system patterns</span>
                </li>
              </ul>
            </div>

            {/* The Solution Card */}
            <div className="rounded-2xl border border-emerald-500/20 bg-gradient-to-b from-emerald-950/20 to-[#0F0F14] p-8 space-y-6">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-semibold uppercase tracking-widest text-emerald-400">
                  02 / The UX Solution
                </span>
                <span className="rounded-full bg-emerald-500/10 px-3 py-1 text-xs text-emerald-400">
                  Design Strategy
                </span>
              </div>
              <h3 className="font-heading text-2xl font-semibold text-white">
                Structured Hierarchy & Intentional Interaction
              </h3>
              <p className="text-base text-zinc-400 leading-relaxed">
                {project.solution ||
                  "Engineered a streamlined visual framework with modular layout grids, responsive typography, and strategic visual hierarchy."}
              </p>
              <ul className="space-y-2.5 pt-2 text-xs text-zinc-400">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>Modular component design with explicit visual priority</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>Frictionless action triggers and clear feedback loops</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>Unified layout tokens for responsive elegance across devices</span>
                </li>
              </ul>
            </div>
          </div>

          {/* UX Workflow Roadmap */}
          <div className="rounded-2xl border border-white/10 bg-[#0F0F13] p-8 space-y-8">
            <h4 className="text-sm font-mono uppercase tracking-widest text-zinc-400">
              Design Process & Methodology
            </h4>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              <ProcessStep
                number="01"
                title="Discovery & Audit"
                desc="User persona mapping, stakeholder interviews, & flow auditing."
              />
              <ProcessStep
                number="02"
                title="Wireframing & IA"
                desc="Low-fidelity sketches and information architecture validation."
              />
              <ProcessStep
                number="03"
                title="Design System & UI"
                desc="High-fidelity visual polish, component specs, and motion."
              />
              <ProcessStep
                number="04"
                title="Testing & Prototype"
                desc="Usability testing iterations and design-to-code handoff."
              />
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: CENTERPIECE - Dedicated Interactive Live Preview Section */}
      <section id="preview" className="px-6 py-24 lg:px-12 lg:py-32 border-b border-white/10">
        <div className="mx-auto max-w-7xl space-y-12">
          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <div className="flex items-center gap-2 text-xs font-mono font-semibold uppercase tracking-widest text-zinc-400 mb-2">
                <span>03</span>
                <span className="w-1.5 h-1.5 rounded-full bg-white" />
                <span>Interactive Live Preview</span>
              </div>
              <h2 className="font-heading text-3xl font-semibold text-white sm:text-4xl lg:text-5xl">
                Experience the Design Live
              </h2>
              <p className="mt-2 text-base text-zinc-400 max-w-xl">
                Switch between device frames, preview modes, and screen states directly inside this interactive sandbox.
              </p>
            </div>

            {/* View Controls & Device Selector */}
            <div className="flex flex-wrap items-center gap-3">
              {/* Mode Switcher */}
              <div className="flex items-center rounded-xl border border-white/10 bg-[#121216] p-1">
                <button
                  onClick={() => setPreviewMode("live")}
                  className={`flex items-center gap-2 rounded-lg px-3 py-1.5 text-xs font-medium transition-all ${
                    previewMode === "live"
                      ? "bg-white text-black font-semibold shadow"
                      : "text-zinc-400 hover:text-white"
                  }`}
                >
                  <Globe className="w-3.5 h-3.5" />
                  Live Web Preview
                </button>
                <button
                  onClick={() => setPreviewMode("prototype")}
                  className={`flex items-center gap-2 rounded-lg px-3 py-1.5 text-xs font-medium transition-all ${
                    previewMode === "prototype"
                      ? "bg-white text-black font-semibold shadow"
                      : "text-zinc-400 hover:text-white"
                  }`}
                >
                  <Layers className="w-3.5 h-3.5" />
                  Screen Explorer
                </button>
              </div>

              {/* Device Selector */}
              <div className="flex items-center rounded-xl border border-white/10 bg-[#121216] p-1">
                <button
                  onClick={() => setDeviceFrame("desktop")}
                  title="Desktop View (1440px)"
                  className={`flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-medium transition-all ${
                    deviceFrame === "desktop"
                      ? "bg-zinc-800 text-white border border-white/15"
                      : "text-zinc-400 hover:text-white"
                  }`}
                >
                  <Laptop className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">Desktop</span>
                </button>
                <button
                  onClick={() => setDeviceFrame("tablet")}
                  title="Tablet View (768px)"
                  className={`flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-medium transition-all ${
                    deviceFrame === "tablet"
                      ? "bg-zinc-800 text-white border border-white/15"
                      : "text-zinc-400 hover:text-white"
                  }`}
                >
                  <Tablet className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">Tablet</span>
                </button>
                <button
                  onClick={() => setDeviceFrame("mobile")}
                  title="Mobile View (375px)"
                  className={`flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-medium transition-all ${
                    deviceFrame === "mobile"
                      ? "bg-zinc-800 text-white border border-white/15"
                      : "text-zinc-400 hover:text-white"
                  }`}
                >
                  <Smartphone className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">Mobile</span>
                </button>
              </div>
            </div>
          </div>

          {/* Interactive Frame Canvas Area */}
          <div
            className={`relative rounded-3xl border border-white/15 p-4 sm:p-8 transition-colors duration-500 ${
              previewBgTheme === "dark"
                ? "bg-[#09090C] border-white/10"
                : "bg-zinc-950 border-white/20"
            }`}
          >
            {/* Frame Toolbar */}
            <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-white/10 mb-6">
              <div className="flex items-center gap-3">
                <span className="flex h-2.5 w-2.5 relative">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
                </span>
                <span className="text-xs font-mono text-zinc-300">
                  {deviceFrame.toUpperCase()} VIEWPORT •{" "}
                  {deviceFrame === "desktop"
                    ? "1440 × 900"
                    : deviceFrame === "tablet"
                    ? "768 × 1024"
                    : "375 × 812"}
                </span>
              </div>

              {/* Action Toolbar Tools */}
              <div className="flex items-center gap-2">
                {/* Scale buttons */}
                <div className="hidden sm:flex items-center rounded-lg border border-white/10 bg-[#121216] px-2 py-1 text-[11px] font-mono text-zinc-400 gap-1">
                  <button
                    onClick={() => setZoomScale(75)}
                    className={`px-1.5 py-0.5 rounded ${
                      zoomScale === 75 ? "bg-white/20 text-white" : "hover:text-white"
                    }`}
                  >
                    75%
                  </button>
                  <button
                    onClick={() => setZoomScale(100)}
                    className={`px-1.5 py-0.5 rounded ${
                      zoomScale === 100 ? "bg-white/20 text-white" : "hover:text-white"
                    }`}
                  >
                    100%
                  </button>
                </div>

                {/* Theme toggle for canvas background */}
                <button
                  onClick={() =>
                    setPreviewBgTheme((t) => (t === "dark" ? "light" : "dark"))
                  }
                  className="p-2 rounded-lg border border-white/10 bg-[#121216] text-zinc-400 hover:text-white transition-colors"
                  title="Toggle preview theme"
                >
                  {previewBgTheme === "dark" ? (
                    <Sun className="w-3.5 h-3.5" />
                  ) : (
                    <Moon className="w-3.5 h-3.5" />
                  )}
                </button>

                {/* Refresh simulation button */}
                <button
                  onClick={() => {
                    setIsRefreshing(true);
                    setTimeout(() => setIsRefreshing(false), 700);
                  }}
                  className="p-2 rounded-lg border border-white/10 bg-[#121216] text-zinc-400 hover:text-white transition-colors"
                  title="Reload Frame"
                >
                  <RefreshCw
                    className={`w-3.5 h-3.5 ${isRefreshing ? "animate-spin text-white" : ""}`}
                  />
                </button>
              </div>
            </div>

            {/* Interactive Screen Device Mockup Sandbox */}
            <div className="flex justify-center items-center min-h-[520px] py-4 overflow-x-auto">
              <div
                style={{
                  transform: `scale(${zoomScale / 100})`,
                  transformOrigin: "center top",
                  transition: "all 0.4s ease-in-out",
                }}
                className={`w-full transition-all duration-500 ${
                  deviceFrame === "desktop"
                    ? "max-w-5xl"
                    : deviceFrame === "tablet"
                    ? "max-w-xl"
                    : "max-w-xs"
                }`}
              >
                {/* Device Shell Frame Wrapper */}
                <div
                  className={`relative overflow-hidden border border-white/20 bg-[#0E0E12] shadow-2xl transition-all duration-500 ${
                    deviceFrame === "desktop"
                      ? "rounded-2xl border-t-8 border-t-zinc-800"
                      : deviceFrame === "tablet"
                      ? "rounded-[2.5rem] border-[10px] border-zinc-800 shadow-2xl"
                      : "rounded-[3rem] border-[12px] border-zinc-900 shadow-2xl"
                  }`}
                >
                  {/* Phone Notch / Speaker simulation */}
                  {deviceFrame === "mobile" && (
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 z-30 h-5 w-28 bg-zinc-900 rounded-b-xl flex items-center justify-center">
                      <div className="w-10 h-1 bg-zinc-800 rounded-full" />
                    </div>
                  )}

                  {/* Browser Window Bar (Desktop View) */}
                  {deviceFrame === "desktop" && (
                    <div className="flex items-center justify-between bg-[#15151A] px-4 py-2.5 border-b border-white/10">
                      <div className="flex items-center gap-1.5">
                        <span className="w-2.5 h-2.5 rounded-full bg-rose-500" />
                        <span className="w-2.5 h-2.5 rounded-full bg-amber-500" />
                        <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                      </div>
                      <div className="flex items-center gap-2 rounded-md bg-black/60 px-3 py-1 text-[11px] font-mono text-zinc-300 border border-white/5 w-1/2 justify-center truncate">
                        <Globe className="w-3 h-3 text-zinc-500" />
                        <span className="truncate">
                          {project.liveUrl && project.liveUrl !== "#"
                            ? project.liveUrl
                            : `https://preview.designbyrifat.com/${project.slug}`}
                        </span>
                      </div>
                      <div className="flex items-center gap-2 text-zinc-500 text-xs">
                        <Maximize2 className="w-3.5 h-3.5 cursor-pointer hover:text-white" />
                      </div>
                    </div>
                  )}

                  {/* Content Container inside Device Frame */}
                  <div className="relative aspect-[16/10] sm:aspect-[16/9] w-full bg-black overflow-y-auto max-h-[600px] scrollbar-thin">
                    {previewMode === "live" ? (
                      /* Live Web Iframe or High-Res Interactive Viewport */
                      <div className="relative w-full h-full min-h-[480px]">
                        <Image
                          src={galleryImages[activeScreenIndex] || project.image}
                          alt={`${project.title} live interface preview`}
                          fill
                          sizes="(max-width: 1200px) 100vw, 1200px"
                          className="object-cover object-top"
                        />
                        {/* Overlay Banner */}
                        <div className="absolute bottom-4 left-4 right-4 rounded-xl border border-white/10 bg-black/80 px-4 py-3 backdrop-blur-md flex items-center justify-between text-xs">
                          <span className="text-zinc-300 font-medium flex items-center gap-2">
                            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                            Live Interactive Viewport Active
                          </span>
                          {project.liveUrl && project.liveUrl !== "#" && (
                            <a
                              href={project.liveUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-white hover:underline flex items-center gap-1 font-semibold"
                            >
                              Open Full Window <ArrowUpRight className="w-3 h-3" />
                            </a>
                          )}
                        </div>
                      </div>
                    ) : (
                      /* Prototype Screen Explorer with Interactive Hotspots */
                      <div className="relative w-full h-full min-h-[480px]">
                        <Image
                          src={galleryImages[activeScreenIndex] || project.image}
                          alt={`${project.title} screen ${activeScreenIndex + 1}`}
                          fill
                          sizes="(max-width: 1200px) 100vw, 1200px"
                          className="object-cover object-top"
                        />

                        {/* Hotspot Pins */}
                        {screenHotspots.map((spot, idx) => (
                          <div
                            key={idx}
                            style={{ left: spot.x, top: spot.y }}
                            className="absolute -translate-x-1/2 -translate-y-1/2 z-20 group"
                          >
                            <button
                              onClick={() => setActiveHotspot(idx)}
                              className={`relative flex items-center justify-center w-8 h-8 rounded-full font-mono text-xs font-bold transition-all shadow-lg ${
                                activeHotspot === idx
                                  ? "bg-white text-black ring-4 ring-white/30 scale-110"
                                  : "bg-black/80 text-white border border-white/30 hover:scale-105"
                              }`}
                            >
                              {idx + 1}
                              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-20" />
                            </button>

                            {/* Hotspot Tooltip */}
                            {activeHotspot === idx && (
                              <motion.div
                                initial={{ opacity: 0, y: 8 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="absolute left-1/2 -translate-x-1/2 bottom-full mb-3 w-64 rounded-xl border border-white/15 bg-black/90 p-3.5 backdrop-blur-xl shadow-2xl text-left z-30"
                              >
                                <div className="text-xs font-semibold text-white flex items-center gap-1.5">
                                  <Info className="w-3.5 h-3.5 text-amber-400" />
                                  {spot.title}
                                </div>
                                <p className="mt-1.5 text-[11px] text-zinc-300 leading-relaxed font-normal">
                                  {spot.description}
                                </p>
                              </motion.div>
                            )}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* Screen Explorer Thumbnails Selector */}
            <div className="mt-6 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
              <span className="text-xs font-mono text-zinc-400">
                SCREEN SWITCHER ({galleryImages.length} VIEWS)
              </span>

              <div className="flex items-center gap-2 overflow-x-auto max-w-full py-1">
                {galleryImages.map((img, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveScreenIndex(i)}
                    className={`relative flex-shrink-0 h-14 w-20 overflow-hidden rounded-lg border transition-all ${
                      activeScreenIndex === i
                        ? "border-white ring-2 ring-white/40 scale-105"
                        : "border-white/10 opacity-50 hover:opacity-100"
                    }`}
                  >
                    <Image
                      src={img}
                      alt={`Screen ${i + 1}`}
                      fill
                      className="object-cover"
                    />
                    <span className="absolute bottom-1 right-1 rounded bg-black/70 px-1 py-0.5 font-mono text-[9px] text-white">
                      0{i + 1}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Visual Gallery & Lightbox Modal */}
      <section id="gallery" className="px-6 py-24 lg:px-12 lg:py-32 border-b border-white/10">
        <div className="mx-auto max-w-7xl space-y-16">
          <div className="flex items-end justify-between gap-6">
            <SectionHeader
              step="04"
              title="Inside the Design"
              subtitle="High-resolution UI screens, design patterns, and interface details."
            />
            <span className="hidden sm:block font-mono text-xs text-zinc-400 border border-white/10 bg-[#0F0F12] px-3.5 py-1.5 rounded-full">
              {galleryImages.length} High-Res Screens
            </span>
          </div>

          {/* Grid Layout */}
          <div className="grid gap-6 sm:grid-cols-2">
            {galleryImages.map((image, index) => (
              <div
                key={index}
                onClick={() => setLightboxIndex(index)}
                className={`group relative overflow-hidden rounded-2xl border border-white/10 bg-[#0F0F13] cursor-pointer ${
                  index === 0 ? "sm:col-span-2" : ""
                }`}
              >
                <div
                  className={`relative ${
                    index === 0 ? "aspect-[16/9]" : "aspect-[4/3]"
                  } w-full overflow-hidden bg-black`}
                >
                  <Image
                    src={image}
                    alt={`${project.title} screenshot ${index + 1}`}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-black/40 opacity-0 transition-opacity duration-300 group-hover:opacity-100 flex items-center justify-center">
                    <span className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-xs font-semibold text-black shadow-xl">
                      <Maximize2 className="w-3.5 h-3.5" />
                      Expand Screen 0{index + 1}
                    </span>
                  </div>
                </div>

                <div className="p-4 border-t border-white/5 flex items-center justify-between">
                  <span className="font-mono text-xs text-zinc-400">
                    Screen 0{index + 1} / {project.title}
                  </span>
                  <span className="text-xs text-zinc-500 group-hover:text-white transition-colors">
                    Click to Inspect →
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 5: Impact & Outcome Metrics + Client Feedback */}
      <section id="impact" className="px-6 py-24 lg:px-12 lg:py-32 border-b border-white/10 bg-[#0A0A0D]">
        <div className="mx-auto max-w-7xl space-y-16">
          <SectionHeader
            step="05"
            title="Impact & Results"
            subtitle="Quantitative metrics and qualitative feedback validating design success."
          />

          {/* Stat Cards Grid */}
          <div className="grid gap-6 sm:grid-cols-3">
            {metrics.map((metric, i) => (
              <div
                key={i}
                className="rounded-2xl border border-white/10 bg-[#0E0E12] p-8 space-y-4 relative overflow-hidden group hover:border-white/20 transition-all"
              >
                <div className="text-xs font-mono text-zinc-400">METRIC 0{i + 1}</div>
                <div className="font-heading text-4xl sm:text-5xl font-bold text-white tracking-tight">
                  {metric.value}
                </div>
                <div className="font-semibold text-base text-zinc-200">
                  {metric.label}
                </div>
                <p className="text-xs text-zinc-400 leading-relaxed">
                  {metric.detail}
                </p>
              </div>
            ))}
          </div>

          {/* Outcome Narrative */}
          <div className="rounded-2xl border border-white/10 bg-gradient-to-r from-[#0F0F14] via-[#121218] to-[#0F0F14] p-8 lg:p-12 space-y-6">
            <h3 className="font-heading text-2xl font-semibold text-white">
              The Measurable Outcome
            </h3>
            <p className="text-base text-zinc-300 leading-relaxed max-w-3xl">
              {project.outcome ||
                "The delivered design established a cohesive, user-centered experience that elevated brand perception and delivered frictionless task completion for all target user cohorts."}
            </p>
          </div>

          {/* Client Testimonial Block */}
          {project.clientFeedback && (
            <div className="relative rounded-3xl border border-white/15 bg-black p-8 sm:p-12 lg:p-16 overflow-hidden">
              <div className="max-w-4xl mx-auto text-center space-y-8 relative z-10">
                <div className="mx-auto w-12 h-12 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-zinc-400 text-xl font-serif">
                  “
                </div>
                <blockquote className="font-heading text-2xl sm:text-3xl lg:text-4xl font-medium text-white leading-relaxed">
                  “{project.clientFeedback}”
                </blockquote>
                <div className="flex items-center justify-center gap-4 pt-4">
                  {(project as any).clientPhoto ? (
                    <div className="relative w-12 h-12 rounded-full overflow-hidden border border-white/20">
                      <Image
                        src={(project as any).clientPhoto}
                        alt={project.client}
                        fill
                        className="object-cover"
                      />
                    </div>
                  ) : (
                    <div className="w-12 h-12 rounded-full bg-zinc-800 border border-white/15 flex items-center justify-center font-bold text-white text-sm">
                      {project.client.charAt(0)}
                    </div>
                  )}
                  <div className="text-left">
                    <div className="text-sm font-semibold text-white">
                      {project.client}
                    </div>
                    <div className="text-xs text-zinc-400 font-mono">
                      Client Partner • Verified Review
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Section 6: My Role & Interactive Toolstack */}
      <section id="role" className="px-6 py-24 lg:px-12 lg:py-32 border-b border-white/10">
        <div className="mx-auto max-w-7xl space-y-16">
          <SectionHeader
            step="06"
            title="My Role & Toolstack"
            subtitle="The toolkit, responsibilities, and design systems deployed."
          />

          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            {/* Role Responsibilities */}
            <div className="lg:col-span-6 space-y-6">
              <h3 className="font-heading text-2xl font-semibold text-white">
                Lead UI/UX Designer & Strategist
              </h3>
              <p className="text-base text-zinc-400 leading-relaxed font-normal">
                Responsible for end-to-end product design lifecycle—from initial discovery workshops and user flow architecture to pixel-perfect design system engineering and interactive prototyping.
              </p>

              <div className="grid grid-cols-2 gap-4 pt-4">
                <RoleBadge title="User Research" desc="Persona & Flow Audit" />
                <RoleBadge title="Design System" desc="Tokens & UI Kit" />
                <RoleBadge title="Interactive Prototype" desc="Micro-interactions" />
                <RoleBadge title="Developer Handoff" desc="Spec Documentation" />
              </div>
            </div>

            {/* Toolstack Grid */}
            <div className="lg:col-span-6 space-y-6">
              <h4 className="text-xs font-mono uppercase tracking-widest text-zinc-400">
                Design & Prototyping Software
              </h4>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {(((project as any).tools as string[]) || ["Figma", "FigJam", "Photoshop"]).map((tool) => (
                  <div
                    key={tool}
                    className="flex items-center gap-3 rounded-xl border border-white/10 bg-[#0F0F13] p-4 hover:border-white/20 transition-colors"
                  >
                    <span className="text-xl">
                      {toolIconsMap[tool] || "🛠️"}
                    </span>
                    <div>
                      <div className="text-sm font-semibold text-white">
                        {tool}
                      </div>
                      <div className="text-[11px] text-zinc-400 font-mono">
                        Primary Tool
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 7: Next & Previous Project Navigation */}
      <section className="px-6 py-20 lg:px-12 lg:py-28 bg-[#09090C]">
        <div className="mx-auto max-w-7xl">
          <div className="text-xs font-mono text-zinc-400 uppercase tracking-widest mb-8 text-center sm:text-left">
            Explore More Case Studies
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {/* Previous Project Card */}
            <Link
              href={`/ProjectDetails/${prevProject.slug}`}
              className="group rounded-2xl border border-white/10 bg-[#0F0F13] p-6 transition-all hover:border-white/25 hover:bg-[#121217]"
            >
              <div className="flex items-center justify-between text-xs text-zinc-400 font-mono mb-4">
                <span>← PREVIOUS PROJECT</span>
                <span>{prevProject.category}</span>
              </div>
              <h4 className="font-heading text-2xl font-semibold text-white group-hover:text-white transition-colors">
                {prevProject.title}
              </h4>
              <p className="mt-2 text-xs text-zinc-400 line-clamp-2">
                {prevProject.description}
              </p>
            </Link>

            {/* Next Project Card */}
            <Link
              href={`/ProjectDetails/${nextProject.slug}`}
              className="group rounded-2xl border border-white/10 bg-[#0F0F13] p-6 transition-all hover:border-white/25 hover:bg-[#121217] text-right"
            >
              <div className="flex items-center justify-between text-xs text-zinc-400 font-mono mb-4">
                <span>{nextProject.category}</span>
                <span>NEXT PROJECT →</span>
              </div>
              <h4 className="font-heading text-2xl font-semibold text-white group-hover:text-white transition-colors">
                {nextProject.title}
              </h4>
              <p className="mt-2 text-xs text-zinc-400 line-clamp-2">
                {nextProject.description}
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* Lightbox Fullscreen Image Modal */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4 backdrop-blur-2xl"
          >
            {/* Close Button */}
            <button
              onClick={() => setLightboxIndex(null)}
              className="absolute top-6 right-6 p-3 rounded-full border border-white/20 bg-black/60 text-white hover:bg-white hover:text-black transition-all z-50"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Previous Button */}
            <button
              onClick={() =>
                setLightboxIndex(
                  (prev) => (prev! - 1 + galleryImages.length) % galleryImages.length
                )
              }
              className="absolute left-6 p-3 rounded-full border border-white/20 bg-black/60 text-white hover:bg-white hover:text-black transition-all z-50"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Next Button */}
            <button
              onClick={() =>
                setLightboxIndex((prev) => (prev! + 1) % galleryImages.length)
              }
              className="absolute right-6 p-3 rounded-full border border-white/20 bg-black/60 text-white hover:bg-white hover:text-black transition-all z-50"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Image Container */}
            <div className="relative max-w-6xl max-h-[85vh] w-full h-full flex flex-col items-center justify-center">
              <div className="relative w-full h-[75vh]">
                <Image
                  src={galleryImages[lightboxIndex]}
                  alt={`Screen ${lightboxIndex + 1}`}
                  fill
                  className="object-contain"
                />
              </div>
              <div className="mt-4 font-mono text-xs text-zinc-300">
                Screen {lightboxIndex + 1} of {galleryImages.length} • {project.title}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}

/* Helper Micro-Components */
function NavPill({
  active,
  onClick,
  label,
}: {
  active: boolean;
  onClick: () => void;
  label: string;
}) {
  return (
    <button
      onClick={onClick}
      className={`rounded-full px-3 py-1 transition-all ${
        active
          ? "bg-white text-black font-semibold shadow-md"
          : "hover:text-white"
      }`}
    >
      {label}
    </button>
  );
}

function SectionHeader({
  step,
  title,
  subtitle,
}: {
  step: string;
  title: string;
  subtitle: string;
}) {
  return (
    <div className="space-y-2">
      <div className="flex items-center gap-2 text-xs font-mono font-semibold uppercase tracking-widest text-zinc-400">
        <span>{step}</span>
        <span className="w-1.5 h-1.5 rounded-full bg-white" />
        <span>SECTION</span>
      </div>
      <h2 className="font-heading text-3xl font-semibold text-white sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      <p className="text-base text-zinc-400 max-w-2xl font-normal">
        {subtitle}
      </p>
    </div>
  );
}

function MetaCard({ label, value }: { label: string; value: string }) {
  return (
    <div className="space-y-1">
      <span className="text-[10px] uppercase font-mono tracking-widest text-zinc-400 block">
        {label}
      </span>
      <span className="text-xs font-medium text-white truncate block">
        {value}
      </span>
    </div>
  );
}

function ObjectiveCard({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className="flex items-start gap-4 rounded-xl border border-white/10 bg-[#0E0E12] p-4">
      <div className="p-2.5 rounded-lg border border-white/10 bg-white/5 shrink-0">
        {icon}
      </div>
      <div>
        <div className="text-sm font-semibold text-white">{title}</div>
        <div className="text-xs text-zinc-400 mt-1 leading-relaxed">
          {description}
        </div>
      </div>
    </div>
  );
}

function ProcessStep({
  number,
  title,
  desc,
}: {
  number: string;
  title: string;
  desc: string;
}) {
  return (
    <div className="space-y-2 border-l border-white/15 pl-4">
      <span className="text-xs font-mono text-zinc-400">{number}</span>
      <div className="text-sm font-semibold text-white">{title}</div>
      <p className="text-xs text-zinc-400 leading-relaxed">{desc}</p>
    </div>
  );
}

function RoleBadge({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="rounded-xl border border-white/10 bg-[#0E0E12] p-3.5">
      <div className="text-xs font-semibold text-white">{title}</div>
      <div className="text-[11px] text-zinc-400 mt-0.5">{desc}</div>
    </div>
  );
}

function FigmaIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 38 57" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path d="M19 28.5C19 23.2533 23.2533 19 28.5 19C33.7467 19 38 23.2533 38 28.5C38 33.7467 33.7467 38 28.5 38H19V28.5Z" fill="#1ABCFE"/>
      <path d="M0 47.5C0 42.2533 4.25329 38 9.5 38H19V47.5C19 52.7467 14.7467 57 9.5 57C4.25329 57 0 52.7467 0 47.5Z" fill="#0ACF83"/>
      <path d="M19 0V19H28.5C33.7467 19 38 14.7467 38 9.5C38 4.25329 33.7467 0 28.5 0H19Z" fill="#FF7262"/>
      <path d="M0 9.5C0 14.7467 4.25329 19 9.5 19H19V0H9.5C4.25329 0 0 4.25329 0 9.5Z" fill="#F24E1E"/>
      <path d="M0 28.5C0 33.7467 4.25329 38 9.5 38H19V19H9.5C4.25329 19 0 23.2533 0 28.5Z" fill="#A259FF"/>
    </svg>
  );
}