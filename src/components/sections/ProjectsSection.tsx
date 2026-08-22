import { projects } from "@/data/content";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { Button } from "@/components/ui/Button";

export function ProjectsSection() {
  return (
    <section
      id="works"
      className="bg-[#111111] px-4 py-16 sm:px-6 sm:py-24 lg:px-8 lg:py-28"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 flex flex-col items-center justify-center gap-4 text-center sm:mb-12 md:flex-row md:items-end md:justify-between md:text-left">
          <SectionHeading
            eyebrow="Works"
            title="Featured projects"
            className="mb-0 text-center md:text-left"
          />
          {projects.length > 6 && (
            <div className="hidden md:inline">
              <Button href="/projects" variant="secondary">
                View All
              </Button>
            </div>
          )}
        </div>

        <div className="mt-8 grid gap-6 md:grid-cols-2 lg:mt-12">
          {projects.slice(0, 6).map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>

        {projects.length > 6 && (
          <div className="mt-8 flex justify-center md:hidden">
            <Button
              href="/projects"
              variant="secondary"
              className="w-full text-center sm:w-auto"
            >
              View All
            </Button>
          </div>
        )}
      </div>
    </section>
  );
}
