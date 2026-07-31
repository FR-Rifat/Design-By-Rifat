import Image from "next/image";
import { projects } from "@/data/content";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function ProjectsSection() {
  return (
    <section id="works" className="bg-[#111111] px-6 py-24 lg:px-8 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <SectionHeading eyebrow="Works" title="Featured projects" centered />
        <div className="mt-10 grid gap-6 md:grid-cols-3 xl:grid-cols-2">
          {projects.map((project) => (
            <article key={project.title} className="group overflow-hidden rounded-3xl border border-white/10 bg-[#0a0a0a]">
             <div className="relative aspect-[16/10] overflow-hidden">
                <Image src={project.image} alt={project.title} fill className="object-cover transition duration-500 group-hover:scale-105"/>
                <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/20 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-6">
                  <p className="text-base font-body capitalize text-[#a3a3a3]">{project.category}</p>
                  <h3 className="mt-1 text-2xl font-semibold text-white">{project.title}</h3>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
