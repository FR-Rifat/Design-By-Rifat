import Link from "next/link";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const navLinks = [
    { label: "Home", href: "/#home" },
    { label: "Services", href: "/#services" },
    { label: "Works", href: "/#works" },
    { label: "About Me", href: "/#about" },
    { label: "Tools", href: "/#tools" },
    { label: "How I Work", href: "/#how-i-work" },
  ];

  const socialLinks = [
    { label: "LinkedIn", href: "https://linkedin.com", external: true },
    { label: "Behance", href: "https://behance.net", external: true },
    { label: "Dribbble", href: "https://dribbble.com", external: true },
    { label: "Email", href: "mailto:contact@frrifat.com", external: false },
  ];

  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-[#0a0a0a] pt-14 pb-10 sm:pt-20 sm:pb-12 lg:pt-24 lg:pb-14">
      {/* Background Subtle Ambient Glow */}
      <div className="pointer-events-none absolute bottom-0 left-1/2 h-80 w-160 -translate-x-1/2 rounded-full bg-white/1 blur-[140px]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Navigation & Social Links - Refined Centered Linear Layout */}
        <div className="flex flex-col items-center justify-between gap-8 pb-4 sm:pb-10 border-b border-white/10 md:flex-row md:gap-6">
          {/* Quick Nav Links */}
          <nav className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 sm:gap-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="font-body text-xs sm:text-sm font-medium text-white/50 transition-colors duration-300 hover:text-white"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Social Links */}
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 sm:gap-x-8">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target={social.external ? "_blank" : undefined}
                rel={social.external ? "noopener noreferrer" : undefined}
                className="font-body text-sm sm:text-sm font-medium text-white/40 transition-colors duration-300 hover:text-white"
              >
                {social.label}
              </a>
            ))}
          </div>
        </div>

        {/* Prominent Name Branding */}
        <div className="flex flex-col items-center justify-center py-14 text-center sm:py-20">
          <Link href="/" className="inline-block">
            <h1 className="font-carter text-4xl font-extrabold tracking-tighter text-white sm:text-7xl md:text-8xl lg:text-9xl">
              FR RIFAT
            </h1>
          </Link>
          <p className="mt-3 font-heading text-sm font-medium uppercase tracking-[0.25em] text-white/35 sm:mt-4 sm:text-xl">
            Product & UI/UX Designer
          </p>
        </div>

        {/* Bottom Copyright & Tech Stack */}
        <div className="flex flex-col items-center justify-between gap-4 pt-8 border-t border-white/10 text-center sm:flex-row sm:text-left">
          <p className="font-body text-xs text-white/40">
            &copy; {currentYear} FR Rifat. All rights reserved.
          </p>

          <div className="flex items-center gap-1.5 font-body text-xs text-white/40">
            <span>Designed in</span>
            <span className="font-medium text-white/70">Figma</span>
            <span>& Built with</span>
            <span className="font-medium text-white/70">Next.js</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;