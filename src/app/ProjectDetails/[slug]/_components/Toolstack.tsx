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
      className="border-b border-white/10 bg-[#0A0A0D] px-6 py-24 lg:px-12 lg:py-32"
    >
      <div className="mx-auto max-w-7xl space-y-10">
        {/* Section Header */}
        <div className="space-y-2">

          <h2 className="font-heading text-4xl font-semibold tracking-tight text-white sm:text-5xl">
            How I Worked
          </h2>

          <p className="container text-base leading-7 text-zinc-400 sm:text-lg">
            My responsibilities, design process, and the tools used to bring the
            product from concept to final interface.
          </p>
        </div>

        {/* Main Grid */}
        <div className="grid gap-6 lg:grid-cols-5">
          {/* Role Card */}
          <div className="rounded-2xl border border-white/10 bg-[#111114] p-7 lg:col-span-3">
            {/* Card Header */}
            <div className="flex items-start gap-4 border-b border-white/10 pb-6">
              <div className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-white text-black">
                <FiEdit3 className="size-5" />
              </div>

              <div>
                <h3 className="mt-1 font-heading text-2xl font-semibold text-white">
                  Lead UI/UX Designer
                </h3>
              </div>
            </div>

            {/* Responsibilities */}
            <div className="pt-6">
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
                      className="group rounded-xl border border-white/10 bg-[#0D0D10] p-4 transition-all duration-300 hover:border-white/20 hover:bg-[#151519]"
                    >
                      <div className="flex items-start gap-3">
                        <div className="flex size-12 shrink-0 items-center justify-center rounded-lg bg-white/5 text-zinc-400 transition-colors duration-300 group-hover:bg-white group-hover:text-black">
                          <Icon className="size-5" />
                        </div>

                        <div>
                          <h5 className="text-sm font-semibold text-white">
                            {item.title}
                          </h5>

                          <p className="mt-1 text-xs leading-5 text-zinc-500">
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
          <div className="rounded-2xl border border-white/10 bg-[#111114] p-7 lg:col-span-2">
            <div className="flex items-center gap-4 border-b border-white/10 pb-6">
              <div className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-white text-black">
                <FiTool className="size-5" />
              </div>

              <div>
                <h3 className="mt-1 font-heading text-2xl font-semibold text-white">
                  Tools I Used
                </h3>
              </div>
            </div>

            {/* Tools */}
            <div className="space-y-3 pt-6">
              {tools.map((tool, index) => (
                <div
                  key={tool}
                  className="flex items-center gap-4 rounded-xl border border-white/10 bg-[#0D0D10] px-4 py-3.5 transition-all duration-300 hover:border-white/20 hover:bg-[#151519]"
                >
                  <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-white/5 font-mono text-xs font-bold text-zinc-300">
                    0{index + 1}
                  </div>

                  <div className="min-w-0 flex-1">
                    <p className="text-sm font-semibold text-white">{tool}</p>

                    <p className="mt-0.5 text-xs text-zinc-500">
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
