import Image from "next/image";
import Link from "next/link";
import { FiArrowUpRight } from "react-icons/fi";
import { Project } from "@/data/content";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <Link
      href={`/projects/${project.slug}`}
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

          <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6 lg:p-8">
            <p className="font-body text-xs text-[#999999] sm:text-sm">
              {project.category}
            </p>

            <div className="flex items-end justify-between gap-3">
              <h3 className="font-heading text-xl font-semibold text-white sm:text-2xl lg:text-3xl">
                {project.title}
              </h3>

              <span className="flex size-10 shrink-0 items-center justify-center rounded-full border border-white/20 text-sm text-white transition-all duration-300 group-hover:border-white group-hover:bg-white group-hover:text-black sm:size-12">
                <FiArrowUpRight className="size-5 sm:size-6" />
              </span>
            </div>
          </div>
        </div>
      </article>
    </Link>
  );
}
