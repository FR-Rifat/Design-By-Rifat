import Image from "next/image";
import { tools } from "@/data/content";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function ToolsSection() {
  return (
    <section
      id="tools"
      className="bg-[#111111] px-6 py-24 lg:px-8 lg:py-28"
    >
      <div className="mx-auto max-w-7xl">
        <SectionHeading eyebrow="Tools" title="The creative stack behind every pixel." 
        className="text-center"
        />

        <div className="space-y-8">
          {tools.map((group) => (
            <div
              key={group.title}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-[#0d0d0d] p-8 transition-all duration-500 hover:border-white/20"
            >
              {/* Glow */}
              <div className="absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100">
                <div className="absolute left-1/2 top-0 h-60 w-60 -translate-x-1/2 rounded-full bg-white/5 blur-[120px]" />
              </div>

              <div className="relative z-10">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-heading text-3xl text-white">
                      {group.title}
                    </h3>

                    <p className="mt-2 max-w-2xl font-body text-[#9ca3af]">
                      {group.description}
                    </p>
                  </div>
                </div>

                <div className="my-8 h-px bg-gradient-to-r from-white/20 via-white/5 to-transparent" />

                <div className="flex flex-wrap gap-4">
                  {group.tools.map((tool) => (
                    <div
                      key={tool.name}
                      className="group/item flex items-center gap-4 rounded-2xl border border-white/10 bg-[#171717] px-5 py-3 transition-all duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-[#1c1c1c]"
                    >
                      <Image
                        src={tool.image}
                        alt={tool.name}
                        width={100}
                        height={100}
                        className="h-12 w-12 transition duration-300 group-hover/item:scale-110 group-hover/item:rotate-6"
                      />

                      <span className="font-body font-medium text-white">
                        {tool.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}