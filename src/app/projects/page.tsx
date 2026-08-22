import { ProjectCard } from "@/components/ui/ProjectCard";
import { projects } from "@/data/content";

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      <main className="px-4 pt-20 pb-12 sm:px-6 md:px-8 lg:pt-20 lg:pb-20">
        <div className="mx-auto max-w-7xl">
          {/* Header Section */}
          <div className="flex flex-col items-center justify-center text-center">
            <p className="mb-2 font-carter text-lg capitalize text-[#a3a3a3] sm:text-xl">
              Works
            </p>
            <h1 className="font-heading text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Explore My Work
            </h1>
            <p className="mt-4 max-w-3xl mx-auto font-body text-base text-neutral-400 sm:text-lg">
              A showcase of my best UI/UX design and development projects. Each case study highlights the design process, challenges, and solutions that led to successful outcomes.
            </p>
          </div>

          {/* Project Cards Grid */}
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:mt-12">
            {projects.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
