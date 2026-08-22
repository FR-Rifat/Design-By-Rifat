import Image from "next/image";
import { tools } from "@/data/content";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function ToolsSection() {
  return (
    <section
      id="tools"
      className="bg-[#111111] px-4 py-16 sm:px-6 sm:py-24 lg:px-8 lg:py-28"
    >
      <div className="mx-auto max-w-7xl">
        <SectionHeading eyebrow="Tools" title="The creative stack behind every pixel." centered />

        <div className="space-y-6 sm:space-y-8">
          {tools.map((group) => (
            <div
              key={group.title}
              className="group relative overflow-hidden rounded-[1rem] border border-white/10 bg-[#0d0d0d] p-5 transition-all duration-500 hover:border-white/20 sm:p-8"
            >
              {/* Glow */}
              <div className="absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100">
                <div className="absolute left-1/2 top-0 h-60 w-60 -translate-x-1/2 rounded-full bg-white/5 blur-[120px]" />
              </div>

              <div className="relative z-10">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-heading text-xl font-semibold text-white sm:text-2xl lg:text-3xl">
                      {group.title}
                    </h3>

                    <p className="mt-2 max-w-2xl font-body text-sm text-[#9ca3af] sm:text-base">
                      {group.description}
                    </p>
                  </div>
                </div>

                <div className="my-6 h-px bg-linear-to-r from-white/20 via-white/5 to-transparent sm:my-8" />

                <div className="flex flex-wrap gap-3 sm:gap-4">
                  {group.tools.map((tool) => (
                    <div
                      key={tool.name}
                      className="group/item flex items-center gap-3 rounded-[1rem] border border-white/10 bg-[#171717] px-4 py-2.5 transition-all duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-[#1c1c1c] sm:gap-4 sm:px-5 sm:py-3"
                    >
                      <Image
                        src={tool.image}
                        alt={tool.name}
                        width={100}
                        height={100}
                        className="h-9 w-9 transition duration-300 group-hover/item:rotate-6 group-hover/item:scale-110 sm:h-12 sm:w-12"
                      />

                      <span className="font-body text-sm font-medium text-white sm:text-base">
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