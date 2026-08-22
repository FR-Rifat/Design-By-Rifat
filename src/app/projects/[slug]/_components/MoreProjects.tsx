import Image from "next/image";
import Link from "next/link";
import { projects } from "@/data/content";
import { FiArrowUpRight } from "react-icons/fi";
import { Button } from "@/components/ui/Button";

interface MoreProjectsProps {
  currentSlug?: string;
}

const MoreProjects = ({ currentSlug }: MoreProjectsProps) => {
  const filteredProjects = projects
    .filter((project) => project.slug !== currentSlug)
    .slice(0, 3);

  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20 space-y-8 sm:space-y-10">
      <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
        {/* Left side: Text Content */}
        <div className="space-y-2">
          <h2 className="font-heading text-2xl font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl">
            EXPLORE MORE OF MY WORK
          </h2>
          <p className="font-body text-sm text-zinc-400 sm:text-base lg:text-lg">
            A selection of other projects where I focused on user experience,
            visual systems, and conversion driven interfaces.
          </p>
        </div>

        {/* Right side: Reusable Button */}
        <Button href="/projects" variant="secondary" className="w-full text-center hover:translate-y-0 sm:w-auto">
          View All
        </Button>
      </div>
      <div className="grid gap-5 md:grid-cols-3">
        {filteredProjects.map((project) => (
          <Link
            href={`/projects/${project.slug}`}
            key={project.slug}
            className="group"
          >
            <article className="overflow-hidden rounded-[1.5rem] border border-white/10 bg-[#0a0a0a] transition-all duration-500 hover:-translate-y-1 hover:border-white/20 hover:shadow-[0_12px_35px_rgba(0,0,0,0.25)]">
              <div className="relative aspect-4/3 overflow-hidden sm:aspect-1.25/1">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent" />

                <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-5">
                  <p className="font-body text-xs text-[#999999] sm:text-sm">
                    {project.category}
                  </p>

                  <div className="flex items-center justify-between gap-3">
                    <h3 className="font-heading text-lg font-semibold text-white sm:text-xl lg:text-2xl">
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
        ))}
      </div>
    </div>
  );
};

export default MoreProjects;
