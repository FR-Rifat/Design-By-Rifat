import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import HeroSection from "@/components/sections/HeroSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { ToolsSection } from "@/components/sections/ToolsSection";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { BlogSection } from "@/components/sections/BlogSection";
import { ContactSection } from "@/components/sections/ContactSection";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-[#a3a3a3]">
      <Header />
      <main>
        <HeroSection />
        <ServicesSection />
        <ProjectsSection />
        <AboutSection />
        <ToolsSection />
        <ProcessSection />
        <TestimonialsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
