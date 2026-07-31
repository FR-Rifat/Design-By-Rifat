import Image from "next/image";
import { testimonials } from "@/data/content";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="bg-[#111111] px-6 py-24 lg:px-8 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <SectionHeading eyebrow="Testimonials" title="What clients say" centered />
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <article key={testimonial.name} className="rounded-[1.5rem] border border-white/10 bg-[#0a0a0a] p-8 text-center">
              <div className="mx-auto flex h-20 w-20 items-center justify-center overflow-hidden rounded-full border border-white/10">
                <Image src={testimonial.image} alt={testimonial.name} width={80} height={80} className="object-cover" />
              </div>
              <p className="mt-6 text-lg leading-8 text-[#a3a3a3]">“{testimonial.quote}”</p>
              <p className="mt-6 text-base font-semibold text-white">{testimonial.name}</p>
              <p className="mt-2 text-sm text-[#a3a3a3]">{testimonial.role}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
