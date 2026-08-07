"use client";

import Link from "next/link";
import { useEffect, useState, type MouseEvent } from "react";
import { usePathname } from "next/navigation";
import { navItems } from "@/data/content";
import { Button } from "../ui/Button";

export function Header() {
  const pathname = usePathname();
  const [activeSection, setActiveSection] = useState("home");

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
      <div className="mx-auto flex max-w-7xl items-center justify-between py-4 lg:px-8">
        <Link href="/" className="flex items-center">
          <span className="text-2xl font-accent font-bold text-white">FR Rifat</span>
        </Link>

        <nav className="hidden items-center gap-8 text-lg font-heading font-medium text-[#a3a3a3] md:flex">
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

        <ButtonLink href="#how-it-works" />
      </div>
    </header>
  );
}

function ButtonLink({ href }: { href: string }) {
  const pathname = usePathname();

  const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
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
    <Button href={pathname === "/" ? href : `/${href}`} variant="primary" className="hover:translate-y-0" onClick={handleClick}>
      Contact Me
    </Button>
  );
}