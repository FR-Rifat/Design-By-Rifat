"use client";

import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { motion } from "framer-motion";
import { projects } from "@/data/content";

type ProjectPageProps = {
  params: {
    slug: string;
  };
};

export default function ProjectDetails({ params }: ProjectPageProps) {
  const project = projects.find((item) => item.slug === params.slug);

  if (!project) {
    notFound();
  }

  const projectImages = project.images?.length ? project.images : [project.image];

  return (
    <main className="min-h-screen overflow-hidden bg-[#0a0a0a] text-white">
      {/* HERO */}
      <section className="px-6 pb-20 pt-28 lg:px-8 lg:pb-28 lg:pt-40">
        <div className="mx-auto max-w-7xl">
          <Link href="/#work" className="group inline-flex items-center gap-3 font-body text-sm text-white/45 transition-colors hover:text-white">
            <span className="transition-transform duration-300 group-hover:-translate-x-1">←</span>
            Back to work
          </Link>

          <div className="mt-16 grid gap-12 lg:grid-cols-[1.4fr_0.6fr] lg:items-end">
            <div>
              <p className="font-accent text-lg text-white/45">{project.category}</p>

              <h1 className="mt-5 max-w-5xl font-heading text-5xl font-semibold leading-[0.95] tracking-[-0.04em] sm:text-7xl lg:text-[7.5rem]">
                {project.title}
              </h1>

              <p className="mt-8 max-w-2xl font-body text-base leading-8 text-white/45 sm:text-lg">
                {project.description}
              </p>
            </div>

            <div className="lg:pb-2">
              <div className="grid grid-cols-2 border-t border-white/10 pt-6">
                <div>
                  <p className="font-body text-[10px] uppercase tracking-[0.2em] text-white/30">Client</p>
                  <p className="mt-2 font-body text-sm text-white">{project.client}</p>
                </div>

                <div>
                  <p className="font-body text-[10px] uppercase tracking-[0.2em] text-white/30">Year</p>
                  <p className="mt-2 font-body text-sm text-white">{project.year}</p>
                </div>
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                {project.liveUrl && (
                  <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="group inline-flex items-center gap-3 rounded-full bg-white px-6 py-3.5 font-body text-sm font-medium text-black transition-all duration-300 hover:bg-white/85">
                    Live Project
                    <span className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">↗</span>
                  </a>
                )}

                {project.figmaUrl && (
                  <a href={project.figmaUrl} target="_blank" rel="noopener noreferrer" className="group inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/3 px-6 py-3.5 font-body text-sm text-white transition-all duration-300 hover:border-white/25 hover:bg-white/6">
                    Figma
                    <span className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">↗</span>
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* HERO IMAGE */}
      <section className="px-6 lg:px-8">
        <div className="mx-auto max-w-350">
          <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: "easeOut" }} className="relative aspect-video overflow-hidden rounded-[1.5rem] border border-white/10 bg-[#111111] sm:rounded-[2.5rem]">
            <Image src={projectImages[0]} alt={project.title} fill priority sizes="100vw" className="object-cover" />
            <div className="absolute left-6 top-6 rounded-full border border-white/10 bg-black/30 px-4 py-2 backdrop-blur-md">
              <span className="font-body text-[10px] uppercase tracking-[0.2em] text-white/60">01 / {String(projectImages.length).padStart(2, "0")}</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* PROJECT INFO */}
      <section className="px-6 py-24 lg:px-8 lg:py-36">
        <div className="mx-auto grid max-w-7xl gap-16 lg:grid-cols-[0.7fr_1.3fr] lg:gap-28">
          <div>
            <p className="font-accent text-lg text-white/45">Project Overview</p>
            <h2 className="mt-5 max-w-md font-heading text-3xl font-semibold leading-tight tracking-tight sm:text-5xl">
              A digital experience designed around the client&apos;s real needs.
            </h2>
          </div>

          <div>
            <div className="grid grid-cols-2 border-y border-white/10 py-8 sm:grid-cols-4">
              <div>
                <p className="font-body text-[10px] uppercase tracking-[0.2em] text-white/30">Client</p>
                <p className="mt-3 font-body text-sm text-white">{project.client}</p>
              </div>

              <div>
                <p className="font-body text-[10px] uppercase tracking-[0.2em] text-white/30">Location</p>
                <p className="mt-3 font-body text-sm text-white">{project.location}</p>
              </div>

              <div className="mt-8 sm:mt-0">
                <p className="font-body text-[10px] uppercase tracking-[0.2em] text-white/30">Year</p>
                <p className="mt-3 font-body text-sm text-white">{project.year}</p>
              </div>

              <div className="mt-8 sm:mt-0">
                <p className="font-body text-[10px] uppercase tracking-[0.2em] text-white/30">Category</p>
                <p className="mt-3 font-body text-sm text-white">{project.category}</p>
              </div>
            </div>

            <p className="mt-10 max-w-3xl font-body text-base leading-8 text-white/45 sm:text-lg">
              {project.description}
            </p>
          </div>
        </div>
      </section>

      {/* CLIENT NEED */}
      {project.clientNeed && (
        <section className="border-y border-white/10 bg-[#111111] px-6 py-24 lg:px-8 lg:py-32">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:gap-24">
              <div>
                <p className="font-accent text-lg text-white/45">Client Need</p>
                <p className="mt-4 font-body text-xs uppercase tracking-[0.18em] text-white/25">01 — Project Context</p>
              </div>

              <p className="max-w-4xl font-heading text-3xl font-medium leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
                {project.clientNeed}
              </p>
            </div>
          </div>
        </section>
      )}

      {/* CHALLENGE / SOLUTION / OUTCOME */}
      <section className="px-6 py-24 lg:px-8 lg:py-36">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16">
            <p className="font-accent text-lg text-white/45">The Approach</p>
            <h2 className="mt-4 max-w-3xl font-heading text-4xl font-semibold tracking-tight sm:text-6xl">
              Turning requirements into a clear digital experience.
            </h2>
          </div>

          <div className="grid border-t border-white/10 md:grid-cols-3">
            <div className="border-b border-white/10 py-10 md:border-b-0 md:border-r md:pr-10">
              <span className="font-body text-xs text-white/25">01</span>
              <h3 className="mt-8 font-heading text-2xl font-semibold">The Challenge</h3>
              <p className="mt-5 font-body text-sm leading-7 text-white/40">
                {project.challenge}
              </p>
            </div>

            <div className="border-b border-white/10 py-10 md:border-b-0 md:border-r md:px-10">
              <span className="font-body text-xs text-white/25">02</span>
              <h3 className="mt-8 font-heading text-2xl font-semibold">The Solution</h3>
              <p className="mt-5 font-body text-sm leading-7 text-white/40">
                {project.solution}
              </p>
            </div>

            <div className="py-10 md:pl-10">
              <span className="font-body text-xs text-white/25">03</span>
              <h3 className="mt-8 font-heading text-2xl font-semibold">The Outcome</h3>
              <p className="mt-5 font-body text-sm leading-7 text-white/40">
                {project.outcome}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES + TOOLS */}
      <section className="border-y border-white/10 bg-[#111111] px-6 py-24 lg:px-8 lg:py-32">
        <div className="mx-auto grid max-w-7xl gap-20 lg:grid-cols-2">
          <div>
            <p className="font-accent text-lg text-white/45">Services</p>
            <h2 className="mt-4 font-heading text-4xl font-semibold tracking-tight sm:text-5xl">
              What I worked on
            </h2>

            <div className="mt-10 space-y-2">
              {project.services.map((service, index) => (
                <div key={service} className="group flex items-center justify-between border-b border-white/10 py-5">
                  <div className="flex items-center gap-5">
                    <span className="font-body text-xs text-white/25">0{index + 1}</span>
                    <span className="font-body text-sm text-white">{service}</span>
                  </div>

                  <span className="text-white/20 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">↗</span>
                </div>
              ))}
            </div>
          </div>

          {project.tools && (
            <div>
              <p className="font-accent text-lg text-white/45">Tools</p>
              <h2 className="mt-4 font-heading text-4xl font-semibold tracking-tight sm:text-5xl">
                Built with
              </h2>

              <div className="mt-10 flex flex-wrap gap-3">
                {project.tools.map((tool) => (
                  <span key={tool} className="rounded-full border border-white/10 bg-[#0a0a0a] px-5 py-3 font-body text-sm text-white/70">
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* PROJECT PREVIEW */}
      <section className="px-6 py-24 lg:px-8 lg:py-36">
        <div className="mx-auto max-w-350">
          <div className="mb-12 flex items-end justify-between">
            <div>
              <p className="font-accent text-lg text-white/45">Project Preview</p>
              <h2 className="mt-4 font-heading text-4xl font-semibold tracking-tight sm:text-6xl">
                Selected screens
              </h2>
            </div>

            <span className="hidden font-body text-xs uppercase tracking-[0.2em] text-white/25 sm:block">
              {String(projectImages.length).padStart(2, "0")} Screens
            </span>
          </div>

          <div className="space-y-8">
            {projectImages.map((image, index) => (
              <motion.div key={image} initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.15 }} transition={{ duration: 0.7, ease: "easeOut" }} className="relative overflow-hidden rounded-[1.5rem] border border-white/10 bg-[#111111] sm:rounded-[2rem]">
                <Image src={image} alt={`${project.title} preview ${index + 1}`} width={1600} height={1000} className="h-auto w-full object-cover" />

                <div className="absolute left-5 top-5 rounded-full border border-white/10 bg-black/40 px-4 py-2 backdrop-blur-md">
                  <span className="font-body text-[10px] uppercase tracking-[0.2em] text-white/60">
                    {String(index + 1).padStart(2, "0")} / {String(projectImages.length).padStart(2, "0")}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CLIENT FEEDBACK */}
      <section className="px-6 py-24 lg:px-8 lg:py-36">
        <div className="mx-auto max-w-6xl">
          <div className="border-y border-white/10 py-16 sm:py-24">
            <p className="font-accent text-lg text-white/45">Client Feedback</p>

            <span className="mt-8 block font-heading text-7xl leading-none text-white/10 sm:text-9xl">“</span>

            <blockquote className="max-w-5xl font-heading text-3xl font-medium leading-[1.2] tracking-tight text-white sm:text-5xl lg:text-6xl">
              {project.clientFeedback}
            </blockquote>

            <div className="mt-10 flex items-center gap-4">
              <div className="h-2 w-2 rounded-full bg-white" />
              <p className="font-body text-xs uppercase tracking-[0.2em] text-white/35">
                {project.client}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 pb-24 lg:px-8 lg:pb-36">
        <div className="mx-auto max-w-7xl">
          <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-[#111111] p-8 sm:p-12 lg:p-16">
            <div className="pointer-events-none absolute -right-32 -top-32 h-72 w-72 rounded-full bg-white/4 blur-3xl" />

            <div className="relative flex flex-col justify-between gap-10 lg:flex-row lg:items-end">
              <div>
                <p className="font-accent text-lg text-white/45">Next project</p>
                <h2 className="mt-4 max-w-2xl font-heading text-4xl font-semibold tracking-tight sm:text-6xl">
                  Have a project worth building?
                </h2>
              </div>

              <Link href="/contact" className="group inline-flex w-fit items-center gap-3 rounded-full bg-white px-7 py-4 font-body text-sm font-semibold text-black transition-all duration-300 hover:bg-white/85">
                Start a Project
                <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}