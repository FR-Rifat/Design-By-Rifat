import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  centered?: boolean;
  className?: string;
}

export function SectionHeading({ eyebrow, title, description, centered = false, className = "" }: SectionHeadingProps) {
  return (
    <div className={cn("mb-10 max-w-7xl", centered && "mx-auto text-center", className)}>
      {eyebrow ? <p className="mb-2 text-xl font-carter capitalize text-[#a3a3a3]">{eyebrow}</p> : null}
      <h2 className="text-3xl font-heading capitalize font-semibold text-white sm:text-4xl lg:text-[2.6rem]">{title}</h2>
      {description ? <p className="mt-4 mx-40 text-lg text-[#a3a3a3]">{description}</p> : null}
    </div>
  );
}
