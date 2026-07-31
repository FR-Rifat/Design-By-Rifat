import { Button } from "@/components/ui/Button";

export function ContactSection() {
  return (
    <section id="contact" className="bg-[#111111] px-6 py-24 lg:px-8 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="rounded-[2rem] border border-white/10 bg-[#0a0a0a] p-8 lg:p-12">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-2xl">
              <p className="text-sm uppercase tracking-[0.35em] text-[#a3a3a3]">Contact Me</p>
              <h3 className="mt-4 text-3xl font-semibold text-white sm:text-4xl">Let&apos;s talk about your project</h3>
              <p className="mt-4 text-lg leading-8 text-[#a3a3a3]">
                Ready to stand out? Let&apos;s create a powerful visual narrative that cuts through the noise and defines your brand&apos;s presence. I&apos;m just a call away.
              </p>
            </div>
            <Button href="#" variant="primary">Get In Touch</Button>
          </div>
        </div>
      </div>
    </section>
  );
}
