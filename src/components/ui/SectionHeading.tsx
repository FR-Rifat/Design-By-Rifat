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
      {eyebrow ? <p className={cn("mb-2 text-lg sm:text-xl font-carter capitalize text-[#a3a3a3]", centered && "text-center")}>{eyebrow}</p> : null}
      <h2 className={cn("text-2xl font-heading capitalize font-semibold text-white sm:text-3xl lg:text-[2.6rem] leading-tight", centered && "text-center")}>{title}</h2>
      {description ? <p className={cn("mt-4 max-w-2xl text-base sm:text-lg text-[#a3a3a3]", centered && "text-center")}>{description}</p> : null}
    </div>
  );
}
