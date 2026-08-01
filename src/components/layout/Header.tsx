import Link from "next/link";
import { navItems } from "@/data/content";
import { Button } from "../ui/Button";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#0a0a0a]/80 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between py-4 lg:px-8">
        <Link href="#home" className="flex items-center">
          <span className="text-2xl font-accent font-bold text-white">FR Rifat</span>
        </Link>
        <nav className="hidden items-center gap-8 text-lg font-heading font-medium text-[#a3a3a3] md:flex">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="transition hover:text-white">
              {item.label}
            </Link>
          ))}
        </nav>
        <ButtonLink href="#contact" />
      </div>
    </header>
  );
}

function ButtonLink({ href }: { href: string }) {
  return (
    <Button href={href} variant="primary" className="hover:translate-y-0">
                Book a Call
                </Button>
  );
}
