import { processSteps } from "@/data/content";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function ProcessSection() {
  return (
    <section
      id="process"
      className="relative overflow-hidden bg-[#0a0a0a] px-6 py-24 lg:px-8 lg:py-32"
    >
      {/* Background Glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/3 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-white/[0.025] blur-[140px]" />

      <div className="relative mx-auto max-w-7xl">
        {/* Heading */}
        <div className="mx-auto max-w-4xl text-center">
          <SectionHeading eyebrow="How I Work" title="From idea to impact." centered />
        </div>

        {/* Process */}
        <div className="relative mt-16">
          {/* Connecting Line */}
          <div className="pointer-events-none absolute left-[16%] right-[16%] top-6 hidden h-px bg-white/10 md:block" />

          <div className="grid gap-10 md:grid-cols-3 md:gap-8">
            {processSteps.map((step) => (
              <div key={step.number} className="group relative">
                {/* ============================= */}
                {/* Process Indicator */}
                {/* ============================= */}

                <div className="relative z-10 flex flex-col items-center">
                  {/* Circle */}
                  <div
                    className="
                      flex h-12 w-12 items-center justify-center rounded-full border border-white/15 bg-[#0a0a0a] font-body text-sm font-semibold text-[#777]
                      transition-all duration-500
                      
                      group-hover:border-white
                      group-hover:bg-white
                      group-hover:text-[#0a0a0a]
                      group-hover:shadow-[0_0_30px_rgba(255,255,255,0.18)]
                    "
                  >
                    {step.number}
                  </div>

                  {/* Step Name */}
                  <span
                    className="
                      mt-3
                      font-body text-xs uppercase  text-[#666] transition-all duration-500 group-hover:text-white "
                  >
                    {step.title}
                  </span>
                </div>

                {/* ============================= */}
                {/* Card */}
                {/* ============================= */}

                <article
                  className="
                    relative mt-12 overflow-hidden
                    rounded-[1.75rem]
                    border border-white/10
                    bg-[#111111]
                    p-7
                    transition-all duration-500
                    md:p-8
                    
                    group-hover:-translate-y-2
                    group-hover:border-white/20
                    group-hover:bg-[#131313]
                    group-hover:shadow-[0_20px_60px_rgba(0,0,0,0.35)]
                  "
                >
                  {/* Card Glow */}
                  <div
                    className="
                      pointer-events-none absolute
                      -right-20 -top-20
                      h-40 w-40
                      rounded-full
                      bg-white/[0.02]
                      blur-3xl
                      transition-all duration-500
                      group-hover:bg-white/[0.07]
                    "
                  />

                  <div className="relative">
                    {/* Top */}
                    <div className="flex items-start justify-between">
                      <span className="font-body text-sm font-medium tracking-[0.15em] text-[#777]">
                        {step.number}
                      </span>

                      <span className="font-accent text-xs capitalize text-[#555] transition-colors duration-300 group-hover:text-[#999]">
                        Step
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="mt-10 font-heading text-3xl font-semibold tracking-tight text-white">
                      {step.title}
                    </h3>

                    {/* Description */}
                    <p className="mt-5 min-h-[84px] font-body text-[15px] leading-7 text-[#9ca3af]">
                      {step.description}
                    </p>

                    {/* Divider */}
                    <div className="my-7 h-px bg-white/10 transition-colors duration-300 group-hover:bg-white/20" />

                    {/* What I Do */}
                    <p className="mb-4 font-accent text-xs font-medium capitalize tracking-[0.18em] text-[#666]">
                      What I Do
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2">
                      {step.items.map((item) => (
                        <span
                          key={item}
                          className="
                            rounded-full border border-white/10 bg-white/[0.025] px-3.5 py-2 font-body font-semibold text-xs text-[#9ca3af] transition-all duration-300 group-hover:border-white/15 group-hover:text-[#d4d4d4]"
                        >
                          {item}
                        </span>
                      ))}
                    </div>

                    {/* Bottom Line */}
                    <div
                      className="
                        mt-8 h-px w-0  bg-white transition-all duration-700 group-hover:w-full"
                    />
                  </div>
                </article>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}