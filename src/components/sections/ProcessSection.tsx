import { processSteps } from "@/data/content";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function ProcessSection() {
  return (
    <section id="process" className="bg-[#0a0a0a] px-6 py-24 lg:px-8 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <SectionHeading eyebrow="How I work" title="Product Design Process" centered description="Structured series of steps that guide the development of a new product from identifying a problem or opportunity, to delivering a final, market-ready solution." />
        <div className="mt-12 grid gap-8 lg:grid-cols-3">
          {processSteps.map((step) => (
            <div key={step.title} className="rounded-[1.5rem] border border-white/10 bg-[#111111] p-8">
              <div className="flex items-center gap-3 text-white">
                <span className="text-xl font-semibold">{step.number}</span>
                <h3 className="text-2xl font-semibold">{step.title}</h3>
              </div>
              <p className="mt-5 text-base leading-8 text-[#a3a3a3]">{step.description}</p>
              <div className="mt-6 flex flex-wrap gap-2">
                {step.keywords.map((keyword) => (
                  <span key={keyword} className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm text-[#a3a3a3]">
                    {keyword}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
