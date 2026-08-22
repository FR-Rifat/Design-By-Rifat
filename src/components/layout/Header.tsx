"use client";

import Link from "next/link";
import { useEffect, useState, type MouseEvent } from "react";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { navItems } from "@/data/content";
import { Button } from "../ui/Button";

export function Header() {
  const pathname = usePathname();
  const [activeSection, setActiveSection] = useState("home");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (pathname !== "/") return;

    const handleScroll = () => {
      const scrollPosition = window.scrollY + 140;
      let currentSection = "home";

      const sections = navItems
        .map((item) => item.href.replace("#", ""))
        .filter((id) => document.getElementById(id));

      sections.forEach((id) => {
        const section = document.getElementById(id);

        if (section && section.offsetTop <= scrollPosition) {
          currentSection = id;
        }
      });

      setActiveSection(currentSection);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [pathname]);

  const handleNavigation = (href: string) => {
    setMobileMenuOpen(false);
    const sectionId = href.replace("#", "").replace("/", "");

    if (pathname !== "/") return;

    const section = document.getElementById(sectionId);

    if (!section) return;

    const headerOffset = 100;
    const sectionPosition = section.getBoundingClientRect().top + window.scrollY - headerOffset;

    window.scrollTo({
      top: sectionPosition,
      behavior: "smooth",
    });
  };

  const getHref = (href: string) => {
    if (href.startsWith("#") && pathname !== "/") {
      return `/${href}`;
    }

    return href;
  };

  const isActive = (href: string) => {
    const sectionId = href.replace("#", "").replace("/", "");

    return pathname === "/" && activeSection === sectionId;
  };

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#0a0a0a]/80 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center" onClick={() => setMobileMenuOpen(false)}>
          <span className="font-accent text-xl font-bold text-white sm:text-2xl">FR Rifat</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-8 font-heading text-lg font-medium text-[#a3a3a3] md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={getHref(item.href)}
              onClick={(event) => {
                if (pathname === "/" && item.href.startsWith("#")) {
                  event.preventDefault();
                  handleNavigation(item.href);
                }
              }}
              className={`relative transition-colors duration-300 ${isActive(item.href) ? "text-white" : "text-[#a3a3a3] hover:text-white"}`}
            >
              {item.label}

              {isActive(item.href) && (
                <span className="absolute -bottom-2 left-1/2 h-1 w-1 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white" />
              )}
            </Link>
          ))}
        </nav>

        {/* Desktop Contact CTA */}
        <div className="hidden md:block">
          <ButtonLink href="https://cal.com/fr-rifat" />
        </div>

        {/* Mobile Hamburger Toggle Button */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 text-white transition-colors hover:bg-white/10 md:hidden"
          aria-label="Toggle Navigation Menu"
        >
          {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="border-t border-white/10 bg-[#0a0a0a] px-4 py-6 md:hidden sm:px-6">
          <nav className="flex flex-col gap-4 font-heading text-base font-medium text-[#a3a3a3]">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={getHref(item.href)}
                onClick={(event) => {
                  if (pathname === "/" && item.href.startsWith("#")) {
                    event.preventDefault();
                    handleNavigation(item.href);
                  } else {
                    setMobileMenuOpen(false);
                  }
                }}
                className={`py-2 text-lg transition-colors ${isActive(item.href) ? "font-semibold text-white" : "text-[#a3a3a3] hover:text-white"}`}
              >
                {item.label}
              </Link>
            ))}
            <div className="pt-4">
              <ButtonLink href="https://cal.com/fr-rifat" onMobileClick={() => setMobileMenuOpen(false)} />
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}

function ButtonLink({ href, onMobileClick }: { href: string; onMobileClick?: () => void }) {
  const pathname = usePathname();

  const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
    if (onMobileClick) onMobileClick();

    if (pathname !== "/" || !href.startsWith("#")) return;

    event.preventDefault();

    const sectionId = href.replace("#", "");
    const section = document.getElementById(sectionId);

    if (!section) return;

    const headerOffset = 100;
    const sectionPosition = section.getBoundingClientRect().top + window.scrollY - headerOffset;

    window.scrollTo({
      top: sectionPosition,
      behavior: "smooth",
    });
  };

  return (
    <Button href={pathname === "/" ? href : `/${href}`} variant="primary" className="w-full text-center hover:translate-y-0 md:w-auto" onClick={handleClick}>
      Contact Me
    </Button>
  );
}