import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { projects } from "@/data/content";

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-[#a3a3a3]">
      <Header />
      <main className="bg-[#111111] px-6 py-24 lg:px-8 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="flex items-center justify-center">
            <SectionHeading
              title="Explore My Work"
              description="A showcase of my best UI/UX design and development projects. Each case study highlights the design process, challenges, and solutions that led to successful outcomes."
            />
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {projects.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
