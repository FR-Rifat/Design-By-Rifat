import { Boxes, Lightbulb, MonitorSmartphone, PencilRuler } from "lucide-react";

export const navItems = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "Works", href: "#works" },
  { label: "About Me", href: "#about" },
  { label: "Tools", href: "#tools" },
  { label: "How I Work", href: "#how-i-work" },
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

export const posts = [
  {
    title: "Designing for Delight: Small Details",
    category: "Design",
    image: "/images/portfolio-6.jpg",
  },
  {
    title: "Responsive Patterns for Modern Layouts",
    category: "Frontend",
    image: "/images/portfolio-5.jpg",
  },
  {
    title: "From Research to Prototype: A Case Study",
    category: "Product",
    image: "/images/portfolio-4.jpg",
  },
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
  { role: "Intern UI/UX Design", period: "Oct 2025 — Jan 2026", logo: "/images/comp-1.jpeg" },
];

export const education = [
  { institution: "Rumdo Institute of Modern Technology", period: "May 2021 — Dec 2025", degree: "Diploma in CST", logo: "/images/alma-2.png" },
];

export const tools = [
  {
    title: "🎨 Design",
    description:
      "Creating intuitive interfaces and engaging user experiences.",
    tools: [
      {
        name: "Figma",
        image: "/images/figma.png",
      },
      {
        name: "FigJam",
        image: "/images/figjam.png",
      },
      {
        name: "Photoshop",
        image: "/images/photoshop.png",
      },
      {
        name: "Illustrator",
        image: "/images/illustrator.png",
      },
    ],
  },

  {
    title: "💻 Development",
    description:
      "Building modern, responsive, and scalable web experiences.",
    tools: [
      {
        name: "VS Code",
        image: "/images/visual-studio.png",
      },
      {
        name: "Next.js",
        image: "/images/nextjs.png",
      },
      {
        name: "HTML5",
        image: "/images/html.png",
      },
      {
        name: "CSS3",
        image: "/images/css.png",
      },
      {
        name: "WordPress",
        image: "/images/wordpress.png",
      },
    ],
  },

  {
    title: "🚀 Workflow",
    description:
      "Collaborating, prototyping, and delivering better products faster.",
    tools: [
      {
        name: "Notion",
        image: "/images/notion.png",
      },
      {
        name: "Miro",
        image: "/images/Miro.png",
      },
      {
        name: "Framer",
        image: "/images/framer.png",
      },
      {
        name: "Webflow",
        image: "/images/webflow.png",
      },
      {
        name: "Sketch",
        image: "/images/sketch.png",
      },
    ],
  },
];

export const processSteps = [
  {
    number: "01",
    title: "Discover",
    description:
      "I start by understanding the problem, users, business goals, and opportunities.",
    items: [
      "User Research",
      "Market Research",
      "Problem Definition",
      "User Personas",
    ],
  },
  {
    number: "02",
    title: "Design",
    description:
      "I turn insights into intuitive flows, wireframes, interfaces, and prototypes.",
    items: [
      "User Flows",
      "Wireframing",
      "UI Design",
      "Prototyping",
      "Usability Testing",
    ],
  },
  {
    number: "03",
    title: "Deliver",
    description:
      "I refine, validate, and prepare the final product for development and launch.",
    items: [
      "Design Handoff",
      "Developer Collaboration",
      "QA & Review",
      "Design Documentation",
    ],
  },
];

export const testimonials = [
  {
    quote:"Extremely professional, unique and enjoyable. The effort taken to ensure relevance to our requirements ensured the optimum outcome.",
    name: "Andrea De Santis",
    role: "CEO, Agresar Soft Inc.",
    image: "/images/testm-user1.jpg",
  },

  {
    quote:"Working together was smooth from start to finish. The design decisions were thoughtful, clear, and focused on the actual user experience.",
    name: "Thomas Luze",
    role: "Senior Product Developer",
    image: "/images/testm-user2.jpg",
  },

  {
    quote:"The final product felt polished, modern, and incredibly easy to use. The attention to detail made a huge difference.",
    name: "Mina Alvarez",
    role: "Founder, Northstar Studio",
    image: "/images/testm-user3.jpg",
  },

  // Later আরো testimonial add করতে পারবে
  {
    quote:"Great communication, strong design thinking, and a very clear understanding of our product goals.",
    name: "Daniel Carter",
    role: "Product Manager",
    image: "/images/testm-user1.jpg",
  },

  {
    quote: "The entire process was professional and collaborative. The final interface exceeded our expectations.",
    name: "Sarah Wilson",
    role: "Creative Director",
    image: "/images/testm-user2.jpg",
  },

  {
    quote:"A strong eye for detail combined with practical UX thinking. I would definitely recommend working together.",
    name: "Alex Morgan",
    role: "Founder & CEO",
    image: "/images/testm-user3.jpg",
  },
];