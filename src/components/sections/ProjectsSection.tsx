import Image from "next/image";
import Link from "next/link";
import { projects } from "@/data/content";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FiArrowUpRight } from "react-icons/fi";

export function ProjectsSection() {
  return (
    <section id="works" className="bg-[#111111] px-6 py-24 lg:px-8 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <SectionHeading eyebrow="Works" title="Featured projects" />
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {projects.map((project) => (
            <Link
              href={`/ProjectDetails/${project.slug}`}
              key={project.slug}
              className="group"
            >
              <article className="overflow-hidden rounded-[2rem] border border-white/10 bg-[#0a0a0a] transition-all duration-500 hover:-translate-y-1 hover:border-white/20">
                <div className="relative aspect-4/3 overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent" />

                  <div className="absolute bottom-0 left-0 right-0 p-6 lg:p-8">
                    <p className="font-body text-sm text-[#999999]">
                      {project.category}
                    </p>

                    <div className="flex items-end justify-between gap-4">
                      <h3 className="font-heading text-2xl font-semibold text-white sm:text-3xl">
                        {project.title}
                      </h3>

                      <span className="flex size-12 shrink-0 items-center justify-center rounded-full border border-white/20 text-sm text-white transition-all duration-300 group-hover:border-white group-hover:bg-white group-hover:text-black">
                        <FiArrowUpRight className="size-6" />
                      </span>
                    </div>
                  </div>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}