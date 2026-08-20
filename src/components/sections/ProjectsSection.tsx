import { projects } from "@/data/content";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { Button } from "@/components/ui/Button";

export function ProjectsSection() {
  return (
    <section id="works" className="bg-[#111111] px-6 py-24 lg:px-8 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end mb-12">
          <SectionHeading eyebrow="Works" title="Featured projects" className="mb-0" />
          {projects.length > 6 && (
            <Button href="/projects" variant="secondary">
              View All
            </Button>
          )}
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {projects.slice(0, 6).map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}