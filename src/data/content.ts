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
    tags: [
      "Landing Pages",
      "Responsive Design",
      "SaaS Websites",
      "Website Redesign",
    ],
  },
  {
    title: "Product Design",
    description:
      "Transforming ideas into scalable digital products by combining business goals, user needs, and exceptional user experiences.",
    icon: Boxes,
    tags: [
      "Product Strategy",
      "Mobile App Design",
      "MVP Design",
      "Dashboard Design",
    ],
  },
  {
    title: "Design Consultation",
    description:
      "Helping businesses improve their digital products through UX audits, design strategy, and actionable recommendations.",
    icon: Lightbulb,
    tags: [
      "UX Audits",
      "Conversion Optimization",
      "Accessibility",
      "Design Strategy",
    ],
  },
];

export interface Project {
  slug: string;
  title: string;
  category: string;
  description: string;
  image: string;
  client?: string;
  location?: string;
  year?: string;
  industry?: string;
  duration?: string;
  projectType?: string;
  team?: string;
  platform?: string;
  role?: string;
  services: string[];
  clientNeed: string;
  challenge: string;
  solution: string;
  outcome: string;
  tools: string[];
  clientFeedback: string;
  liveUrl?: string;
  figmaUrl?: string;
  images: string[];
}

export const projects: Project[] = [
  {
    slug: "care-marketplace",
    title: "Care Marketplace",
    category: "Web Application",

    description:
      "A modern care marketplace designed to connect people with trusted care providers through a simple and accessible digital experience.",

    image: "/images/portfolio-1.jpg",

    // Project Meta
    industry: "Care Industry",
    duration: "8 Weeks",
    projectType: "Web Application",
    team: "Solo Designer",
    platform: "Web",
    role: "UI/UX Designer",

    // Project Services
    services: ["UX/UI Design", "Web Application", "Dashboard Design"],

    // Case Study
    clientNeed:
      "The client needed a clear and scalable platform where users could easily discover care services while providers could manage their profiles and services efficiently.",

    challenge:
      "The main challenge was organizing a large amount of service and provider information without making the experience feel complicated.",

    solution:
      "I created a clean interface with clear content hierarchy, intuitive navigation, and structured layouts to make the platform easier to explore.",

    outcome:
      "The final experience provides a more focused user journey and a scalable foundation for the marketplace.",

    // Design Tools
    tools: ["Figma", "FigJam", "Photoshop"],

    // Client Feedback
    clientFeedback:
      "The design feels clean, professional, and much easier to navigate. It gives the platform a strong and trustworthy presence.",

    client: "Care Industry Ecosystem",

    // External Links
    liveUrl: "https://translate.google.com/?hl=bn&sl=en&tl=bn&op=translate",
    figmaUrl: "#",

    // Gallery
    images: [
      "/images/portfolio-1.jpg",
      "/images/portfolio-2.jpg",
      "/images/portfolio-3.jpg",
    ],
  },

  {
    slug: "car-carrier-group",
    title: "Car Carrier Group",
    category: "Logistics Platform",
    description:
      "A streamlined logistics platform built to simplify vehicle transportation requests, booking, and quote management.",
    image: "/images/portfolio-2.jpg",
    client: "Car Carrier Group",
    location: "United States",
    year: "2025",
    services: ["UX/UI Design", "Web Design", "Booking Platform"],
    clientNeed:
      "The client needed a professional digital platform that could make vehicle shipping requests easier while presenting important logistics information in a clear way.",
    challenge:
      "The challenge was simplifying a complex logistics workflow while keeping pricing, booking, and service information easy to understand.",
    solution:
      "I designed a structured interface with a strong visual hierarchy, clear forms, and focused call-to-actions to guide users through the booking process.",
    outcome:
      "The redesigned experience makes the quote and booking journey more straightforward and professional.",
    tools: ["Figma", "FigJam", "Photoshop"],
    clientFeedback:
      "The new design makes our service feel much more professional and gives customers a clearer way to understand the process.",
    liveUrl: "#",
    figmaUrl: "#",
    images: [
      "/images/portfolio-2.jpg",
      "/images/portfolio-3.jpg",
      "/images/portfolio-4.jpg",
    ],
  },

  {
    slug: "sidequote",
    title: "SideQuote",
    category: "Directory Platform",
    description:
      "A modern directory platform designed to help users discover businesses, compare services, and find relevant providers.",
    image: "/images/portfolio-3.jpg",
    client: "SideQuote",
    location: "United States",
    year: "2025",
    services: ["Product Design", "UX/UI Design", "Directory Platform"],
    clientNeed:
      "The client needed a clean and scalable directory experience that could help users quickly discover relevant businesses and services.",
    challenge:
      "The key challenge was presenting large amounts of business information while keeping search and discovery simple.",
    solution:
      "I focused on a clean information architecture, intuitive search patterns, and reusable UI components to create a consistent browsing experience.",
    outcome:
      "The final product provides a more organized way for users to discover and compare service providers.",
    tools: ["Figma", "FigJam", "Photoshop"],
    clientFeedback:
      "The interface is much cleaner and easier to understand. It feels like a strong foundation for the product.",
    liveUrl: "#",
    figmaUrl: "#",
    images: [
      "/images/portfolio-3.jpg",
      "/images/portfolio-4.jpg",
      "/images/portfolio-5.jpg",
    ],
  },

  {
    slug: "imoscan",
    title: "Imoscan",
    category: "Mobile Application",
    description:
      "A mobile-focused IMEI verification experience designed to make device checking faster, clearer, and easier to understand.",
    image: "/images/portfolio-4.jpg",
    client: "Imoscan",
    location: "United States",
    year: "2025",
    services: ["Mobile App Design", "UX/UI Design", "Product Design"],
    clientNeed:
      "The client wanted a simple mobile experience that could allow users to verify device information quickly without dealing with unnecessary complexity.",
    challenge:
      "The challenge was presenting technical device information in a way that felt simple and approachable for everyday users.",
    solution:
      "I created a focused mobile interface with clear scanning flows, structured results, and easy-to-understand information blocks.",
    outcome:
      "The final experience makes device verification feel faster, clearer, and more accessible.",
    tools: ["Figma", "FigJam", "Photoshop"],
    clientFeedback:
      "The new interface makes the verification process much easier to understand and gives the product a more polished feel.",
    liveUrl: "#",
    figmaUrl: "#",
    images: [
      "/images/portfolio-4.jpg",
      "/images/portfolio-5.jpg",
      "/images/portfolio-6.jpg",
    ],
  },

  {
    slug: "fintech-dashboard",
    title: "Fintech Analytics Dashboard",
    category: "SaaS Dashboard",
    description:
      "An intuitive financial analytics platform offering real-time transaction insights, balance monitoring, and automated reporting.",
    image: "/images/portfolio-5.jpg",
    client: "Fintech Analytics",
    location: "United States",
    year: "2025",
    services: ["Dashboard Design", "UX/UI Design", "SaaS Product"],
    clientNeed:
      "The client required a powerful financial dashboard to visualize complex transaction metrics and real-time balance trends effortlessly.",
    challenge:
      "Structuring high-density data views without cluttering the screen or overwhelming financial analysts.",
    solution:
      "Designed customizable widget layouts, interactive chart components, and clean dark-mode visuals.",
    outcome:
      "Significantly improved daily workspace efficiency for finance managers and key decision-makers.",
    tools: ["Figma", "Photoshop", "Next.js"],
    clientFeedback:
      "The dashboard visuals are outstanding and data clarity is at an all-time high.",
    liveUrl: "#",
    figmaUrl: "#",
    images: [
      "/images/portfolio-5.jpg",
      "/images/portfolio-6.jpg",
      "/images/portfolio-1.jpg",
    ],
  },

  {
    slug: "health-fitness-app",
    title: "Health & Fitness Tracker",
    category: "Mobile Application",
    description:
      "A personal health companion tracking workouts, nutrition goals, and daily wellness habits with interactive progress charts.",
    image: "/images/portfolio-6.jpg",
    client: "HealthPulse",
    location: "United States",
    year: "2025",
    services: ["Mobile App Design", "UX/UI Design", "Prototyping"],
    clientNeed:
      "To build a modern iOS and Android fitness experience that motivates daily user activity through simple logging.",
    challenge:
      "Keeping exercise tracking quick while maintaining detailed statistics and streak gamification.",
    solution:
      "Implemented fluid gesture-based interactions, micro-animations, and minimal form inputs.",
    outcome:
      "Enhanced user retention and created a highly engaging mobile habit tracker.",
    tools: ["Figma", "FigJam", "Framer"],
    clientFeedback:
      "Clean visual design combined with smooth micro-interactions. Users love using it every day.",
    liveUrl: "#",
    figmaUrl: "#",
    images: [
      "/images/portfolio-6.jpg",
      "/images/portfolio-1.jpg",
      "/images/portfolio-2.jpg",
    ],
  },

  {
    slug: "ecommerce-design-system",
    title: "E-Commerce System",
    category: "Web Design",
    description:
      "A conversion-focused online retail platform built for seamless product exploration and rapid checkout flows.",
    image: "/images/portfolio-1.jpg",
    client: "Retail Next",
    location: "United States",
    year: "2025",
    services: ["Web Design", "E-Commerce UI", "Design System"],
    clientNeed:
      "Upgrade an outdated online store into a premium digital shopping experience with custom product filters.",
    challenge:
      "Balancing high-resolution catalog visuals with fast navigation performance and intuitive cart management.",
    solution:
      "Created modular product grids, sticky checkout drawers, and accessible color themes.",
    outcome:
      "Drove measurable increases in visitor conversion rates and average order values.",
    tools: ["Figma", "Photoshop", "Webflow"],
    clientFeedback:
      "The overall shopping experience feels world-class and effortless for our customers.",
    liveUrl: "#",
    figmaUrl: "#",
    images: [
      "/images/portfolio-1.jpg",
      "/images/portfolio-2.jpg",
      "/images/portfolio-3.jpg",
    ],
  },
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
  {
    company: "Tyrand",
    role: "UI/UX Designer",
    period: "Apr 2026 — Present",
    logo: "/images/comp-2.png",
  },
  {
    company: "ScaleUp Ads Agency",
    role: "Jr. UI/UX Designer",
    period: "Dec 2025 — Sep 2026",
    logo: "/images/comp-1.jpeg",
  },
  {
    company: "BDCalling Academy",
    role: "Intern UI/UX Designer",
    period: "Sep 2025 — Nov 2025",
    logo: "/images/comp-1.jpeg",
  },
];

export const education = [
  {
    institution: "Rumdo Institute of Modern Technology",
    period: "May 2021 — Dec 2025",
    degree: "Diploma in CST",
    logo: "/images/alma-2.png",
  },
];

export const tools = [
  {
    title: "🎨 Design",
    description: "Creating intuitive interfaces and engaging user experiences.",
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
    description: "Building modern, responsive, and scalable web experiences.",
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
    quote:
      "Extremely professional, unique and enjoyable. The effort taken to ensure relevance to our requirements ensured the optimum outcome.",
    name: "Andrea De Santis",
    role: "CEO, Agresar Soft Inc.",
    image: "/images/testm-user1.jpg",
  },

  {
    quote:
      "Working together was smooth from start to finish. The design decisions were thoughtful, clear, and focused on the actual user experience.",
    name: "Thomas Luze",
    role: "Senior Product Developer",
    image: "/images/testm-user2.jpg",
  },

  {
    quote:
      "The final product felt polished, modern, and incredibly easy to use. The attention to detail made a huge difference.",
    name: "Mina Alvarez",
    role: "Founder, Northstar Studio",
    image: "/images/testm-user3.jpg",
  },

  // Later আরো testimonial add করতে পারবে
  {
    quote:
      "Great communication, strong design thinking, and a very clear understanding of our product goals.",
    name: "Daniel Carter",
    role: "Product Manager",
    image: "/images/testm-user1.jpg",
  },

  {
    quote:
      "The entire process was professional and collaborative. The final interface exceeded our expectations.",
    name: "Sarah Wilson",
    role: "Creative Director",
    image: "/images/testm-user2.jpg",
  },

  {
    quote:
      "A strong eye for detail combined with practical UX thinking. I would definitely recommend working together.",
    name: "Alex Morgan",
    role: "Founder & CEO",
    image: "/images/testm-user3.jpg",
  },
];
