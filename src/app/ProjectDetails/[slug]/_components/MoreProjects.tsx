import Image from "next/image";
import Link from "next/link";
import { projects } from "@/data/content";
import { FiArrowUpRight } from "react-icons/fi";
import { Button } from "@/components/ui/Button";

const MoreProjects = () => {
  return (
    <div className="mx-auto max-w-7xl py-10 lg:py-14 space-y-10">
      <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
        {/* Left side: Text Content */}
        <div className="space-y-2">
          <h2 className="font-heading text-4xl font-semibold tracking-tight text-white sm:text-5xl">
            EXPLORE MORE OF MY WORK
          </h2>
          <p className="text-base text-zinc-400 sm:text-lg">
            A selection of other projects where I focused on user experience,
            visual systems, and conversion driven interfaces.
          </p>
        </div>

        {/* Right side: Reusable Button */}
        <Button href="#" variant="secondary" className="hover:translate-y-0">
          View All
        </Button>
      </div>
      <div className="grid gap-5 md:grid-cols-3">
        {projects.slice(0, 3).map((project) => (
          <Link
            href={`/ProjectDetails/${project.slug}`}
            key={project.slug}
            className="group"
          >
            <article className="overflow-hidden rounded-[1.5rem] border border-white/10 bg-[#0a0a0a] transition-all duration-500 hover:-translate-y-1 hover:border-white/20 hover:shadow-[0_12px_35px_rgba(0,0,0,0.25)]">
              <div className="relative aspect-1.25/1 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent" />

                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <p className="font-body text- text-[#999999]">
                    {project.category}
                  </p>

                  <div className="flex items-center justify-between ">
                    <h3 className="font-heading text-2xl font-semibold text-white">
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
  );
};

export default MoreProjects;
