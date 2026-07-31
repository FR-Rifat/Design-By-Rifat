interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  description?: string;
  centered?: boolean;
  className?: string;
}

export function SectionHeading({ eyebrow, title, description, centered = false, className = "" }: SectionHeadingProps) {
  return (
    <div className={`mb-12 max-w-7xl ${centered ? "mx-auto text-center" : ""} ${className}`}>
      <p className="mb-2 text-xl font-accent capitalize text-[#a3a3a3]">{eyebrow}</p>
      <h2 className="text-3xl font-heading font-semibold text-white sm:text-4xl lg:text-[2.6rem]">{title}</h2>
      {description ? <p className="mt-4 mx-40 text-lg text-[#a3a3a3]">{description}</p> : null}
    </div>
  );
}
