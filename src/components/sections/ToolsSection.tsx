import { tools } from "@/data/content";
import { SectionHeading } from "@/components/ui/SectionHeading";
import Image from "next/image";

export function ToolsSection() {
  return (
    <section id="tools" className="bg-[#111111] px-6 py-24 lg:px-8 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <SectionHeading eyebrow="Tools" title="The key design and development tools I use" />
        <div className="mt-10 grid gap-4 md:grid-cols-12">
          {tools.map((tool) => (
            <div key={tool.name} className={`rounded-[1.25rem] border border-white/10 bg-[#0a0a0a] p-6 ${tool.span}`}>
              {tool.images ? (
                <div className="flex flex-wrap gap-3">
                  {tool.images.map((image) => (
                    <Image key={image} src={image} alt={tool.name} width={48} height={48} className="rounded-full" />
                  ))}
                </div>
              ) : (
                <div className="flex items-center gap-3">
                  <Image src={tool.image!} alt={tool.name} width={48} height={48} />
                  <span className="text-lg font-semibold uppercase tracking-[0.2em] text-white">{tool.name}</span>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
