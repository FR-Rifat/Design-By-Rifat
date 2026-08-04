"use client";

import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import { useMemo } from "react";
import { testimonials } from "@/data/content";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function TestimonialsSection() {
  const autoplay = useMemo(
    () =>
      Autoplay({
        delay: 5000,
        stopOnInteraction: false,
      }),
    []
  );

  return (
    <section id="testimonials" className="relative overflow-hidden bg-[#111111] px-6 py-24 lg:px-8 lg:py-32">
      <div className="mx-auto max-w-7xl">

      <SectionHeading eyebrow="Testimonials" title="What clients say about working with me." 
      className="text-center" />
        
        {/* Carousel */}
        <Carousel opts={{ align: "start", loop: true }} plugins={[autoplay]} className="w-full">
          <CarouselContent className="-ml-5">
            {testimonials.map((testimonial) => (
              <CarouselItem key={testimonial.name} className="pl-5 md:basis-1/2 lg:basis-1/3">
                <article className="relative min-h-[300px] overflow-hidden rounded-[1rem] border border-white/8 bg-[#0d0d0d] p-7 transition-colors duration-500 hover:border-white/60 lg:p-8">


                  {/* Quote */}
                  <div className="relative pl-16">
                    <span className="pointer-events-none font-heading absolute left-0 top-0 text-[4.5rem] leading-none text-white/7">
                      “
                    </span>

                    <p className="mt-4 font-body text-base text-[#a3a3a3] lg:text-base">
                      {testimonial.quote}
                    </p>
                  </div>

                  {/* User */}
                  <div className="absolute bottom-8 left-7 right-7 border-t border-white/8 pt-6 lg:left-8 lg:right-8">
                    <div className="flex items-center gap-4">
                      <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-full border border-white/10">
                        <Image src={testimonial.image} alt={testimonial.name} fill sizes="48px" className="object-cover" />
                      </div>

                      <div>
                        <h3 className="font-heading text-base font-semibold text-white">
                          {testimonial.name}
                        </h3>

                        <p className="font-body text-sm text-[#777777]">
                          {testimonial.role}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Subtle Glow */}
                  <div className="pointer-events-none absolute -right-20 -top-20 h-40 w-40 rounded-full bg-white/[0.02] blur-3xl" />

                  {/* Bottom Line */}
                  <div className="pointer-events-none absolute bottom-0 left-0 h-px w-full bg-white/[0.05]" />
                </article>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
}