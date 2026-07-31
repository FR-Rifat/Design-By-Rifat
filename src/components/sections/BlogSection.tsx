import Image from "next/image";
import { posts } from "@/data/content";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function BlogSection() {
  return (
    <section id="blog" className="bg-[#0a0a0a] px-6 py-24 lg:px-8 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <SectionHeading eyebrow="Latest Posts" title="Explore recent insights and articles" />
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {posts.map((post) => (
            <article key={post.title} className="overflow-hidden rounded-[1.5rem] border border-white/10 bg-[#111111]">
              <div className="relative aspect-[4/3]">
                <Image src={post.image} alt={post.title} fill className="object-cover" />
              </div>
              <div className="p-6">
                <p className="text-sm uppercase tracking-[0.35em] text-[#a3a3a3]">{post.category}</p>
                <h3 className="mt-4 text-xl font-semibold text-white">{post.title}</h3>
                <a href="#" className="mt-6 inline-flex text-sm font-semibold text-white transition hover:text-[#a3a3a3]">
                  Read More
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
