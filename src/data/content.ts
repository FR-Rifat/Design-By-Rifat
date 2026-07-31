import { Boxes, Lightbulb, MonitorSmartphone, PencilRuler } from "lucide-react";

export const navItems = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "Works", href: "#works" },
  { label: "About Me", href: "#about" },
  { label: "Articles", href: "#blog" },
  { label: "Contact", href: "#contact" },
];

export const services = [
  {
    title: "UI UX Design",
    description:
      "Creating intuitive and visually engaging digital experiences that solve real user problems through user-centered design principles.",
    icon: PencilRuler,
    tags: ["User Research", "Wireframes", "Visual Design", "Prototyping"],
  },
  {
    title: "Web Design",
    description:
      "Designing modern, responsive, and conversion-focused websites that deliver seamless experiences across all devices.",
    icon: MonitorSmartphone,
    tags: ["Landing Pages", "Responsive Design", "SaaS Websites", "Website Redesign"],
  },
  {
    title: "Product Design",
    description:
      "Transforming ideas into scalable digital products by combining business goals, user needs, and exceptional user experiences.",
    icon: Boxes,
    tags: ["Product Strategy", "Mobile App Design", "MVP Design", "Dashboard Design"],
  },
  {
    title: "Design Consultation",
    description:
      "Helping businesses improve their digital products through UX audits, design strategy, and actionable recommendations.",
    icon: Lightbulb,
    tags: ["UX Audits", "Conversion Optimization", "Accessibility", "Design Strategy"],
  },
];

export const projects = [
  { title: "Pressed Juicery", category: "Branding", image: "/images/portfolio-6.jpg" },
  { title: "Nouri Probiotic", category: "Marketing", image: "/images/portfolio-5.jpg" },
  { title: "Joborba", category: "Creative", image: "/images/portfolio-4.jpg" },
  { title: "Sound On", category: "Marketing", image: "/images/portfolio-3.jpg" },
  { title: "Onne Skin Care", category: "Visual", image: "/images/portfolio-2.jpg" },
  { title: "Boxed Water", category: "Visual", image: "/images/portfolio-1.jpg" },
];

export const stats = [
  {
    number: 1,
    suffix: "+",
    label: "Years of Experience",
  },
  {
    number: 6,
    suffix: "+",
    label: "Case Studies",
  },
  {
    number: 50,
    suffix: "+",
    label: "Projects Completed",
  },
  {
    number: 98,
    suffix: "%",
    label: "Client Satisfaction",
  },
];

export const experience = [
  { role: "UI/UX Designer", period: "Feb 2026 — Present", logo: "/images/comp-2.png" },
  { role: "UI/UX Design Intern", period: "Oct 2025 — Jan 2026", logo: "/images/comp-1.jpeg" },
];

export const education = [
  { institution: "Rumdo Institute of Modern Technology", period: "May 2021 — Dec 2025", degree: "Diploma in CST", logo: "/images/alma-2.png" },
];

export const tools = [
  { name: "FIGMA", image: "/images/figma.png", span: "md:col-span-3" },
  { name: "ILLUSTRATOR", image: "/images/illustrator.png", span: "md:col-span-2" },
  { name: "FRAMER", image: "/images/framer.png", span: "md:col-span-3" },
  { name: "HTML5", image: "/images/html.png", span: "md:col-span-4" },
  { name: "SKETCH", image: "/images/sketch.png", span: "md:col-span-2" },
  { name: "NOTION", image: "/images/notion.png", span: "md:col-span-3" },
  { name: "WEBFLOW", image: "/images/webflow.png", span: "md:col-span-4" },
  { name: "SLACK", image: "/images/slack.png", span: "md:col-span-3" },
  { name: "DEVELOPMENT", images: ["/images/wordpress.png", "/images/angular.png", "/images/visual-studio.png", "/images/nextjs.png"], span: "md:col-span-6" },
  { name: "MOTION", images: ["/images/premier.png", "/images/capcut.png", "/images/audition.png", "/images/davinci.png"], span: "md:col-span-6" },
];

export const processSteps = [
  {
    number: "1.",
    title: "Discover",
    description: "The goal is to define clear objectives and requirements for the product and gather useful insights.",
    keywords: ["Stakeholder Interview", "Problem Finding", "Market Research", "Product Positioning", "UX Research"],
  },
  {
    number: "2.",
    title: "Design",
    description: "In this stage, ideas are translated into tangible concepts to align the product with business goals.",
    keywords: ["Wireframe", "Visual Design", "User Testing", "Validation"],
  },
  {
    number: "3.",
    title: "Deliver",
    description: "The final phase involves collaborating with developers to build and launch the product.",
    keywords: ["Project Handover", "Developer Collaboration", "Long Time Support"],
  },
];

export const testimonials = [
  {
    quote: "Extremely professional, unique and enjoyable. The effort taken to ensure relevance to our requirements ensured the optimum outcome.",
    name: "Andrea De Santis",
    role: "CEO, Agresar Soft Inc.",
    image: "/images/testm-user1.jpg",
  },
  {
    quote: "The experience felt collaborative from start to finish, with thoughtful design decisions and a sharp eye for detail.",
    name: "Thomas Luze",
    role: "Senior Product Developer @ ThisOne",
    image: "/images/testm-user2.jpg",
  },
  {
    quote: "Every component felt crafted for growth and clarity. The final experience made our product feel polished and modern.",
    name: "Mina Alvarez",
    role: "Founder, Northstar Studio",
    image: "/images/testm-user3.jpg",
  },
];

export const posts = [
  { title: "The value proposition business branding", category: "Growth", image: "/images/post-img1.jpg" },
  { title: "15 design tips that always deliver growth", category: "Design", image: "/images/post-img2.jpg" },
  { title: "Essential social media tips for small business", category: "Growth", image: "/images/post-img3.jpg" },
];
