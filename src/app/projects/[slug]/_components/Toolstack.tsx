"use client";

import {
  FiCheck,
  FiCode,
  FiEdit3,
  FiLayers,
  FiMousePointer,
  FiSearch,
  FiTool,
} from "react-icons/fi";

interface ToolstackProps {
  project: {
    tools?: string[];
  };
}

const Toolstack = ({ project }: ToolstackProps) => {
  const tools = project.tools || ["Figma", "FigJam", "Photoshop"];

  const responsibilities = [
    {
      icon: FiSearch,
      title: "User Research",
      description: "Personas, user flows & journey analysis",
    },
    {
      icon: FiLayers,
      title: "Design System",
      description: "Components, tokens & UI patterns",
    },
    {
      icon: FiMousePointer,
      title: "Prototyping",
      description: "Interactive flows & micro-interactions",
    },
    {
      icon: FiCode,
      title: "Developer Handoff",
      description: "Specs, assets & implementation guidance",
    },
  ];

  return (
    <section
      id="role"
      className="border-b border-white/10 bg-[#0A0A0D] px-4 py-12 sm:px-6 sm:py-20 lg:px-12 lg:py-32"
    >
      <div className="mx-auto max-w-7xl space-y-8 sm:space-y-10">
        {/* Section Header */}
        <div className="space-y-2">

          <h2 className="font-heading text-2xl font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl">
            How I Worked
          </h2>

          <p className="max-w-2xl font-body text-sm leading-relaxed text-zinc-400 sm:text-base lg:text-lg">
            My responsibilities, design process, and the tools used to bring the
            product from concept to final interface.
          </p>
        </div>

        {/* Main Grid */}
        <div className="grid gap-6 lg:grid-cols-5">
          {/* Role Card */}
          <div className="rounded-2xl border border-white/10 bg-[#111114] p-5 sm:p-7 lg:col-span-3">
            {/* Card Header */}
            <div className="flex items-start gap-4 border-b border-white/10 pb-5 sm:pb-6">
              <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-white text-black sm:size-12">
                <FiEdit3 className="size-4 sm:size-5" />
              </div>

              <div>
                <h3 className="mt-1 font-heading text-xl font-semibold text-white sm:text-2xl">
                  Lead UI/UX Designer
                </h3>
              </div>
            </div>

            {/* Responsibilities */}
            <div className="pt-5 sm:pt-6">
              <div className="mb-4 flex items-center justify-between">
                <h4 className="text-sm font-semibold text-white">
                  Key Responsibilities
                </h4>
              </div>

              <div className="grid gap-3 sm:grid-cols-2">
                {responsibilities.map((item) => {
                  const Icon = item.icon;

                  return (
                    <div
                      key={item.title}
                      className="group rounded-xl border border-white/10 bg-[#0D0D10] p-3.5 transition-all duration-300 hover:border-white/20 hover:bg-[#151519] sm:p-4"
                    >
                      <div className="flex items-start gap-3">
                        <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-white/5 text-zinc-400 transition-colors duration-300 group-hover:bg-white group-hover:text-black sm:size-12">
                          <Icon className="size-4 sm:size-5" />
                        </div>

                        <div>
                          <h5 className="text-sm font-semibold text-white">
                            {item.title}
                          </h5>

                          <p className="mt-1 font-body text-xs leading-5 text-zinc-500">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Tools Card */}
          <div className="rounded-2xl border border-white/10 bg-[#111114] p-5 sm:p-7 lg:col-span-2">
            <div className="flex items-center gap-4 border-b border-white/10 pb-5 sm:pb-6">
              <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-white text-black sm:size-12">
                <FiTool className="size-4 sm:size-5" />
              </div>

              <div>
                <h3 className="mt-1 font-heading text-xl font-semibold text-white sm:text-2xl">
                  Tools I Used
                </h3>
              </div>
            </div>

            {/* Tools */}
            <div className="space-y-3 pt-5 sm:pt-6">
              {tools.map((tool, index) => (
                <div
                  key={tool}
                  className="flex items-center gap-4 rounded-xl border border-white/10 bg-[#0D0D10] px-4 py-3 transition-all duration-300 hover:border-white/20 hover:bg-[#151519] sm:py-3.5"
                >
                  <div className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-white/5 font-mono text-xs font-bold text-zinc-300 sm:size-10">
                    0{index + 1}
                  </div>

                  <div className="min-w-0 flex-1">
                    <p className="text-sm font-semibold text-white">{tool}</p>

                    <p className="mt-0.5 font-body text-xs text-zinc-500">
                      Design & Prototyping
                    </p>
                  </div>

                  <FiCheck className="size-4 shrink-0 text-emerald-400" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Toolstack;
