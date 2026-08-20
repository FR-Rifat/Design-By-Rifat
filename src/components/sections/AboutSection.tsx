import Image from "next/image";
import { education, experience, stats } from "@/data/content";
import { SectionHeading } from "@/components/ui/SectionHeading";
import CountNumber from "@/components/ui/CountNumber";

export function AboutSection() {
  return (
    <section
      id="about"
      className="bg-[#0a0a0a] px-6 py-24 lg:px-8 lg:py-28"
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr]">
          {/* Left Content */}
          <div>
            <SectionHeading
              eyebrow="About Me"
              title="A product designer with a knack for turning problems and challenges into user-driven strategic solutions."
            />

            <p className="max-w-2xl text-lg font-body text-[#a3a3a3]">
              I specialize in creating unique visual identities for digital
              products. I believe a stunning design starts with common values,
              open communication, technical knowledge, and respect for your
              audience.
            </p>

            {/* Stats */}
            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-[1rem] border border-white/10 bg-[#111111] p-4 transition-all duration-300 hover:border-white/20"
                >
                  <p className="text-center text-5xl font-heading font-bold text-white">
                    <CountNumber
                      end={stat.number}
                      suffix={stat.suffix}
                    />
                  </p>

                  <p className="mt-3 text-center text-sm font-body text-[#a3a3a3]">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content */}
          <div className="space-y-6">
            {/* Experience */}
            <div className="rounded-[1rem] border border-white/10 bg-[#111111] p-8">
              <p className="text-base font-body capitalize text-[#a3a3a3]">
                Experience
              </p>

              <div className="mt-6 space-y-5">
                {experience.map((item) => (
                  <div
                    key={item.role}
                    className="border-b border-white/10 pb-5 last:border-b-0 last:pb-0"
                  >
                    <div className="flex items-center gap-4">
                      <Image
                        src={item.logo}
                        alt={item.role}
                        width={46}
                        height={46}
                        className="rounded-full"
                      />
                      <div>
                    <h3 className="mt-1 text-xl font-heading font-semibold text-white">
                     {item.role}
                    </h3>
                         <p className="text-sm font-body text-[#a3a3a3]">
                        {item.period}
                      </p>

                    </div>
                    </div>
                 
                  </div>
                ))}
              </div>
            </div>

            {/* Education */}
            <div className="rounded-[1rem] border border-white/10 bg-[#111111] p-8">
              <p className="text-base font-body capitalize text-[#a3a3a3]">
                Education
              </p>

              <div className="mt-6">
                {education.map((item) => (
                  <div
                    key={item.degree}
                    className="flex items-start gap-3"
                  >
                    <Image
                      src={item.logo}
                      alt={item.institution}
                      width={38}
                      height={38}
                      className="rounded-full"
                    />

                    <div>
                      <p className="text-sm font-body text-[#a3a3a3]">
                        {item.period}
                      </p>

                      <h3 className="mt-1 text-xl font-heading font-semibold text-white">
                        {item.degree}
                      </h3>

                      <p className="mt-1 font-body text-[#a3a3a3]">
                        {item.institution}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            {/* End Education */}
          </div>
        </div>
      </div>
    </section>
  );
}