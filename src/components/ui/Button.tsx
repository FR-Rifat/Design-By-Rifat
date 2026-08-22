import Link from "next/link";

interface ButtonProps {
  href?: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
  onClick?: React.MouseEventHandler<HTMLAnchorElement | HTMLButtonElement>;
  blank?: boolean;
  type?: "button" | "submit" | "reset";
}

export function Button({
  href,
  children,
  variant = "primary",
  className = "",
  onClick,
  blank = false,
  type = "button",
}: ButtonProps) {
  const baseClasses =
    "group relative inline-flex items-center justify-center overflow-hidden rounded-full border px-8 py-3 font-heading text-lg font-semibold whitespace-nowrap transition-[background-color,border-color,color,box-shadow] duration-500 ease-out cursor-pointer";

  const variants = {
    primary:
      "border-white bg-white text-[#0a0a0a] shadow-[0_10px_30px_rgba(255,255,255,0.08)] hover:bg-transparent hover:text-white hover:border-white hover:shadow-[0_0_35px_rgba(255,255,255,0.18)]",

    secondary:
      "border-white/20 bg-transparent text-white hover:border-white hover:bg-white/10 hover:shadow-[0_0_25px_rgba(255,255,255,0.12)]",

    ghost:
      "border-white/20 bg-white/10 text-white hover:bg-white/20 hover:border-white/40",
  };

  const content = (
    <>
      {/* Shine */}
      <span className="absolute inset-0 -translate-x-full skew-x-12 bg-linear-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 ease-out group-hover:translate-x-[200%]" />

      {/* Content */}
      <span className="relative z-10 flex items-center justify-center gap-2">
        {children}
      </span>
    </>
  );

  if (href) {
    return (
      <Link
        href={href}
        target={blank ? "_blank" : "_self"}
        onClick={onClick as React.MouseEventHandler<HTMLAnchorElement>}
        className={`${baseClasses} ${variants[variant]} ${className}`}
      >
        {content}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick as React.MouseEventHandler<HTMLButtonElement>}
      className={`${baseClasses} ${variants[variant]} ${className}`}
    >
      {content}
    </button>
  );
}