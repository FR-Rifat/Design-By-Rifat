import { CheckCircle2 } from "lucide-react";

interface ChallengesProps {
  project: {
    challenge?: string;
    solution?: string;
  };
}

const Challenges = ({ project }: ChallengesProps) => {
  return (
    <section
      id="challenge"
      className="border-b border-white/10 bg-[#0A0A0D] px-4 py-12 sm:px-6 sm:py-20 lg:px-12 lg:py-32"
    >
      <div className="mx-auto max-w-7xl space-y-8 sm:space-y-10">
        <div className="space-y-2">
          <h2 className="font-heading text-2xl font-semibold text-white sm:text-4xl lg:text-5xl">
            The Challenge & UX Solution
          </h2>
          <p className="max-w-2xl font-body text-sm font-normal text-zinc-400 sm:text-base">
            Framing core design problems and detailing the UX solutions
            engineered.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 md:gap-8">
          {/* The Challenge */}
          <div className="space-y-5 rounded-xl border border-rose-500/20 bg-linear-to-b from-rose-950/20 to-[#0F0F14] p-5 sm:space-y-6 sm:p-8">
            <div className="flex items-center justify-between gap-4">
              <span className="font-mono text-xs font-semibold uppercase tracking-widest text-rose-400">
                The Challenge
              </span>

              <span className="rounded-full bg-rose-500/10 px-2.5 py-0.5 text-xs text-rose-400 sm:px-3 sm:py-1">
                Problem Statement
              </span>
            </div>

            <h3 className="font-heading text-xl font-semibold text-white sm:text-2xl">
              Friction in User Journey & Information Complexity
            </h3>

            <p className="font-body text-sm leading-relaxed text-zinc-400 sm:text-base">
              {project.challenge ||
                "Organizing vast content structures without cluttering the interface or overwhelming first-time users."}
            </p>

            <ul className="space-y-2.5 pt-2 font-body text-xs text-zinc-400 sm:text-sm">
              <li className="flex items-start gap-2.5">
                <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-rose-400" />
                <span>Cognitive overload during key decision steps</span>
              </li>

              <li className="flex items-start gap-2.5">
                <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-rose-400" />
                <span>Inconsistent component hierarchy across screens</span>
              </li>

              <li className="flex items-start gap-2.5">
                <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-rose-400" />
                <span>Need for scalable design system patterns</span>
              </li>
            </ul>
          </div>

          {/* The UX Solution */}
          <div className="space-y-5 rounded-xl border border-emerald-500/20 bg-linear-to-b from-emerald-950/20 to-[#0F0F14] p-5 sm:space-y-6 sm:p-8">
            <div className="flex items-center justify-between gap-4">
              <span className="font-mono text-xs font-semibold uppercase tracking-widest text-emerald-400">
                The UX Solution
              </span>

              <span className="rounded-full bg-emerald-500/10 px-2.5 py-0.5 text-xs text-emerald-400 sm:px-3 sm:py-1">
                Design Strategy
              </span>
            </div>

            <h3 className="font-heading text-xl font-semibold text-white sm:text-2xl">
              Structured Hierarchy & Intentional Interaction
            </h3>

            <p className="font-body text-sm leading-relaxed text-zinc-400 sm:text-base">
              {project.solution ||
                "Engineered a streamlined visual framework with modular layout grids, responsive typography, and strategic visual hierarchy."}
            </p>

            <ul className="space-y-2.5 pt-2 font-body text-xs text-zinc-400 sm:text-sm">
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-emerald-400" />
                <span>
                  Modular component design with explicit visual priority
                </span>
              </li>

              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-emerald-400" />
                <span>
                  Frictionless action triggers and clear feedback loops
                </span>
              </li>

              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-emerald-400" />
                <span>
                  Unified layout tokens for responsive elegance across devices
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* UX Workflow */}
        <div className="space-y-6 rounded-xl border border-white/10 bg-[#0F0F13] p-5 sm:space-y-8 sm:p-8">
          <h4 className="font-mono text-xs uppercase tracking-widest text-zinc-400">
            Design Process & Methodology
          </h4>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <ProcessStep
              number="01"
              title="Discovery & Audit"
              desc="User persona mapping, stakeholder interviews, & flow auditing."
            />

            <ProcessStep
              number="02"
              title="Wireframing & IA"
              desc="Low-fidelity sketches and information architecture validation."
            />

            <ProcessStep
              number="03"
              title="Design System & UI"
              desc="High-fidelity visual polish, component specs, and motion."
            />

            <ProcessStep
              number="04"
              title="Testing & Prototype"
              desc="Usability testing iterations and design-to-code handoff."
            />
          </div>
        </div>
      </div>
    </section>
  );
};

function ProcessStep({
  number,
  title,
  desc,
}: {
  number: string;
  title: string;
  desc: string;
}) {
  return (
    <div className="space-y-2 border-l border-white/15 pl-4">
      <span className="text-xs font-mono text-zinc-400">{number}</span>
      <div className="text-sm font-semibold text-white">{title}</div>
      <p className="text-xs leading-relaxed text-zinc-400">{desc}</p>
    </div>
  );
}

export default Challenges;
