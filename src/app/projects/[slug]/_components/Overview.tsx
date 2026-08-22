import { Target, Sparkles, TrendingUp } from "lucide-react";

interface OverviewProps {
  clientNeed?: string;
  services?: string[];
}

const Overview = ({ clientNeed, services = [] }: OverviewProps) => {
  return (
    <section
      id="overview"
      className="border-b border-white/10 px-4 py-12 sm:px-6 sm:py-20 lg:px-12 lg:py-32"
    >
      <div className="mx-auto max-w-7xl space-y-8">
        {/* Section Header */}
        <div className="space-y-2">

          <h2 className="font-heading text-2xl font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Project Overview & Client Need
          </h2>

          <p className="font-body text-sm text-zinc-400 sm:text-base lg:text-lg">
            Understanding the core purpose, user requirements, and product
            goals.
          </p>
        </div>

        {/* Content */}
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Main Narrative */}
          <div className="space-y-6 lg:col-span-7">
            <h3 className="font-heading text-2xl font-semibold text-white sm:text-3xl">
              A purpose driven interface crafted for impact.
            </h3>

            <p className="text-base font-normal leading-relaxed text-zinc-400 sm:text-lg">
              {clientNeed ||
                "The project was initiated to address key user frictions in navigating complex digital information while ensuring high visual clarity and simple task completion."}
            </p>

            <p className="text-base font-normal leading-relaxed text-zinc-400">
              By combining modern design systems with intentional typography and
              spatial hierarchy, the experience transforms complex user journeys
              into structured, delight-driven digital touchpoints.
            </p>

            {/* Services */}
            {services.length > 0 && (
              <div className="space-y-3 pt-4">
                <span className="block font-mono text-xs uppercase tracking-widest text-zinc-500">
                  Scope of Services Delivered
                </span>

                <div className="flex flex-wrap gap-2">
                  {services.map((service) => (
                    <span
                      key={service}
                      className="rounded-lg border border-white/10 bg-[#121216] px-3.5 py-1.5 text-xs text-zinc-300"
                    >
                      {service}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Objective Cards */}
          <div className="space-y-4 lg:col-span-5">
            <ObjectiveCard
              icon={<Target className="h-5 w-5 text-indigo-400" />}
              title="Primary Goal"
              description="Simplify complex navigation flows and present key content intuitively."
            />

            <ObjectiveCard
              icon={<Sparkles className="h-5 w-5 text-amber-400" />}
              title="Design Philosophy"
              description="Minimalism paired with bold typography, high contrast, and smooth."
            />

            <ObjectiveCard
              icon={<TrendingUp className="h-5 w-5 text-emerald-400" />}
              title="Expected Outcome"
              description="Drive higher user retention, faster task speed, and strong brand trust."
            />
          </div>
        </div>
      </div>
    </section>
  );
};

function ObjectiveCard({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className="flex items-center gap-4 rounded-2xl border border-white/10 bg-[#0F0F13] p-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-white/20 hover:bg-[#121216]">
      <div className="flex size-11 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-[#17171C]">
        {icon}
      </div>

      <div className="min-w-0 space-y-1">
        <h4 className="text-sm font-semibold text-white">{title}</h4>
        <p className="text-xs leading-5 text-zinc-500">{description}</p>
      </div>
    </div>
  );
}

export default Overview;
