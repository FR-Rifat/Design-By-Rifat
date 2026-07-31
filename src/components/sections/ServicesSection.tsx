import { services } from "@/data/content";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function ServicesSection() {
  return (
    <section id="services" className="bg-[#0a0a0a] px-6 py-24 lg:px-8 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <SectionHeading eyebrow="What I do" title="Digital Product Design Services I Offer" />
        <div className="grid gap-6 md:grid-cols-2">
          {services.map((service) => (
            <article key={service.title} className="rounded-3xl border border-white/10 bg-[#111111] p-8">
              <div className="flex items-start justify-between gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-xl text-white">
                  <service.icon/>
                </div>
                <a href="#" className="text-sm text-[#a3a3a3] transition hover:text-white">Learn more</a>
              </div>
              <h3 className="mt-6 text-2xl font-heading font-semibold text-white">{service.title}</h3>
              <p className="mt-4 text-base text-[#a3a3a3]">{service.description}</p>
              <div className="mt-6 flex flex-wrap gap-2">
                {service.tags.map((tag) => (
                  <span key={tag} className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm text-[#a3a3a3]">
                    {tag}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
