import Image from "next/image";
import { education, experience, stats } from "@/data/content";
import { SectionHeading } from "@/components/ui/SectionHeading";
import CountNumber from "@/components/ui/CountNumber";

export function AboutSection() {
  return (
    <section
      id="about"
      className="bg-[#0a0a0a] px-4 py-16 sm:px-6 sm:py-24 lg:px-8 lg:py-28"
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:gap-12">
          {/* Left Content */}
          <div>
            <SectionHeading
              eyebrow="About Me"
              title="A product designer with a knack for turning problems and challenges into user-driven strategic solutions."
            />

            <p className="max-w-2xl font-body text-base text-[#a3a3a3] sm:text-lg">
              I specialize in creating unique visual identities for digital
              products. I believe a stunning design starts with common values,
              open communication, technical knowledge, and respect for your
              audience.
            </p>

            {/* Stats */}
            <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-[1rem] border border-white/10 bg-[#111111] p-4 transition-all duration-300 hover:border-white/20"
                >
                  <p className="text-center font-heading text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
                    <CountNumber
                      end={stat.number}
                      suffix={stat.suffix}
                    />
                  </p>

                  <p className="mt-2 text-center font-body text-xs text-[#a3a3a3] sm:text-sm">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content */}
          <div className="space-y-6">
            {/* Experience */}
            <div className="rounded-[1rem] border border-white/10 bg-[#111111] p-5 sm:p-8">
              <p className="font-body text-base capitalize text-[#a3a3a3]">
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
                        className="h-10 w-10 rounded-full sm:h-11 sm:w-11"
                      />
                      <div>
                        <h3 className="mt-1 font-heading text-lg font-semibold text-white sm:text-xl">
                          {item.role}
                        </h3>
                        <p className="font-body text-xs text-[#a3a3a3] sm:text-sm">
                          {item.period}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Education */}
            <div className="rounded-[1rem] border border-white/10 bg-[#111111] p-5 sm:p-8">
              <p className="font-body text-base capitalize text-[#a3a3a3]">
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
                      className="h-9 w-9 rounded-full"
                    />

                    <div>
                      <p className="font-body text-xs text-[#a3a3a3] sm:text-sm">
                        {item.period}
                      </p>

                      <h3 className="mt-1 font-heading text-lg font-semibold text-white sm:text-xl">
                        {item.degree}
                      </h3>

                      <p className="mt-1 font-body text-sm text-[#a3a3a3]">
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