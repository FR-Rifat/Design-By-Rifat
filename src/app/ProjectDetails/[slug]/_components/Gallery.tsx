"use client";

import Image from "next/image";

interface GalleryProps {
  project: {
    title: string;
    image: string;
    images?: string[];
  };
}

const Gallery = ({ project }: GalleryProps) => {
  const galleryImages = project.images?.length ? project.images : [project.image];
  return (
    <section
      id="gallery"
      className="border-b border-white/10 bg-[#0A0A0D] px-6 py-24 lg:px-12 lg:py-32"
    >
      <div className="mx-auto max-w-7xl space-y-10">
        {/* Header */}
        <div className="flex items-end justify-between gap-6">
          <div className="space-y-2">
            <div>
              <h2 className="font-heading text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
                Inside the Design
              </h2>

              <p className="mt-3 max-w-2xl text-base leading-relaxed text-zinc-400 sm:text-lg">
                High resolution UI screens, design patterns, and interface
                details.
              </p>
            </div>
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid gap-5 sm:grid-cols-2 lg:gap-6">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className={`group relative overflow-hidden rounded-2xl border border-white/10 bg-[#0F0F13] ${
                index === 0 ? "sm:col-span-2" : ""
              }`}
            >
              <div
                className={`relative w-full overflow-hidden bg-[#111114] ${
                  index === 0 ? "aspect-16/8" : "aspect-4/3"
                }`}
              >
                <Image
                  src={image}
                  alt={`${project.title} screenshot ${index + 1}`}
                  fill
                  sizes={
                    index === 0
                      ? "(max-width: 768px) 100vw, 100vw"
                      : "(max-width: 768px) 100vw, 50vw"
                  }
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.025]"
                />

                {/* Premium subtle overlay */}
                <div className="absolute inset-0 bg-linear-to-t from-black/30 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
