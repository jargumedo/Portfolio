export type Lang = "en" | "es";

export interface Experience {
  company: string;
  role: string;
  period: string;
  location: string;
  bullets: string[];
}

export interface Project {
  name: string;
  blurb: string;
  tags: string[];
  live: string | null;
  repo: string | null;
  status: "live" | "private" | "soon";
  role: string;
  year: string;
}

export interface CopyData {
  nav: { work: string; experience: string; about: string; contact: string };
  status: string;
  role: string;
  heroLine1: string;
  heroLine2: string;
  heroLine2b: string;
  heroLine2Em: string;
  tagline: string;
  cta: string;
  secondaryCta: string;
  marquee: string[];
  metricsLabel: string;
  metrics: Array<{ v: string; k: string }>;
  aboutLabel: string;
  aboutTitle: string;
  bio1: string;
  bio2: string;
  stackLabel: string;
  cats: Record<string, string[]>;
  languages: Array<{ name: string; level: string }>;
  experienceLabel: string;
  experienceTitle: string;
  experiences: Experience[];
  educationLabel: string;
  education: { school: string; program: string; location: string };
  workLabel: string;
  workTitle: string;
  projects: Project[];
  contactLabel: string;
  contactPre: string;
  contactEm: string;
  contactPost: string;
  contactCards: Array<{ h: string; v: string; href: string }>;
  visit: string;
  code: string;
  soon: string;
  based: string;
  builtWith: string;
  year: string;
  present: string;
}

const COPY: Record<Lang, CopyData> = {
  en: {
    nav: { work: "Work", experience: "Experience", about: "About", contact: "Contact" },
    status: "Available for new projects · Mendoza, AR",
    role: "Full Stack Developer · SSR",
    heroLine1: "Building",
    heroLine2: "for the",
    heroLine2b: "web.",
    heroLine2Em: "interfaces",
    tagline:
      "Full Stack SSR specialized in Vue and React. I build high-performance, real-time products where architecture and UX are critical.",
    cta: "Get in touch",
    secondaryCta: "Download CV",
    marquee: [
      "Vue.js", "React", "TypeScript", "WebSockets", "Node",
      "Performance", "Real-time", "AI integration", "Available for hire",
    ],

    metricsLabel: "Impact",
    metrics: [
      { v: "90%", k: "Faster load times at Fydels" },
      { v: "150K+", k: "Users on shipped products" },
      { v: "+30%", k: "Sales metrics uplift" },
      { v: "5", k: "Devs led on multidisciplinary team" },
    ],

    aboutLabel: "About",
    aboutTitle: "A developer who treats craft as a habit, not a buzzword.",
    bio1:
      "I'm Juliano — Full Stack Developer SSR based in Mendoza, Argentina. I work on complex product environments where performance, architecture and user experience are non-negotiable.",
    bio2:
      "Beyond shipping interfaces, I design solutions that improve operational efficiency through automation and AI — directly contributing to business growth.",
    stackLabel: "Stack",
    cats: {
      Frontend: ["Vue.js", "React", "TypeScript", "JavaScript ES6+", "Vuex", "Redux", "Angular", "TailwindCSS"],
      "Backend / DB": ["Node.js", "Express", "REST APIs", "PostgreSQL", "WebSockets"],
      "AI & Tools": ["Claude", "Codex", "n8n", "AI agents", "Git", "Postman", "Trello"],
    },
    languages: [
      { name: "Spanish", level: "Native" },
      { name: "English", level: "Technical · fluent reading & conversation" },
    ],

    experienceLabel: "Experience",
    experienceTitle: "Where I've made an impact.",
    experiences: [
      {
        company: "Fydels",
        role: "Full Stack Developer",
        period: "Feb 2025 — Present",
        location: "Mendoza, AR",
        bullets: [
          "Reduced application load times by up to 90% by optimizing rendering and state management on a platform with 150K+ users.",
          "Led a multidisciplinary team of 5 developers, ensuring on-time delivery aligned with business goals.",
          "Designed and implemented an end-to-end metrics system, contributing to a 30% uplift in sales-related metrics.",
          "Built real-time features with WebSockets — AI-assisted and group chats with low-latency communication.",
          "Improved front-end architecture and scalability, reducing unnecessary re-renders and optimizing data flow.",
        ],
      },
      {
        company: "EstoyAca",
        role: "Full Stack Developer",
        period: "2024 — 2025",
        location: "Remote",
        bullets: [
          "Built the full Vue.js front-end for a web app with real-time chat, geolocation and payment integrations.",
          "Implemented dynamic navigation with Vue Router and integrated multiple external APIs.",
          "Optimized front-end performance and cross-device usability.",
          "Collaborated with backend teams on data structure design to improve service communication.",
        ],
      },
    ],

    educationLabel: "Education",
    education: {
      school: "UTN — Universidad Tecnológica Nacional",
      program: "Tecnicatura en Programación",
      location: "Mendoza, Argentina",
    },

    workLabel: "Selected work",
    workTitle: "Side projects shipped with real users in mind.",
    projects: [
      {
        name: "Fydels",
        blurb:
          "Production platform serving 150K+ users. Led a team of 5, reduced load times by 90%, shipped real-time chat with AI agents over WebSockets and built an end-to-end metrics system that drove a 30% sales uplift.",
        tags: ["Vue.js", "TypeScript", "WebSockets", "AI agents", "Performance"],
        live: "https://fydels.com",
        repo: null,
        status: "private",
        role: "Front-End Lead",
        year: "2025",
      },
      {
        name: "Salva Mi Huella",
        blurb:
          "Community platform connecting rescuers, foster homes and adopters. User management, admin-only views and a moderated content pipeline.",
        tags: ["React", "Redux", "Node.js", "Express", "Tailwind"],
        live: "https://salva-mi-huella.vercel.app/",
        repo: "https://github.com/Salva-mi-huella/client",
        status: "live",
        role: "Front-end + UX",
        year: "2024",
      },
      {
        name: "Estoy Acá",
        blurb:
          "Service-exchange marketplace with payment gateways, real-time chat, geolocation and tiered user accounts. Built the full Vue.js front-end.",
        tags: ["Vue", "Vue Router", "Tailwind", "REST APIs"],
        live: null,
        repo: null,
        status: "soon",
        role: "Front-end",
        year: "2024",
      },
    ],
    contactLabel: "Contact",
    contactPre: "Have something",
    contactEm: "in mind?",
    contactPost: "Let's talk.",
    contactCards: [
      { h: "Email", v: "juliargumedoblanco@gmail.com", href: "mailto:juliargumedoblanco@gmail.com" },
      { h: "WhatsApp", v: "+54 9 261 334 8352", href: "https://wa.me/+5492613348352" },
      {
        h: "Resume",
        v: "Download CV",
        href: "/CV Juliano Argumedo EN.pdf",
      },
    ],
    visit: "Visit",
    code: "Code",
    soon: "Coming soon",
    based: "Mendoza, AR",
    builtWith: "Designed & built by Juliano Argumedo",
    year: "2026",
    present: "Present",
  },

  es: {
    nav: { work: "Proyectos", experience: "Experiencia", about: "Sobre mí", contact: "Contacto" },
    status: "Disponible para nuevos proyectos · Mendoza, AR",
    role: "Desarrollador Full Stack · SSR",
    heroLine1: "Diseñando",
    heroLine2: "para la",
    heroLine2b: "web.",
    heroLine2Em: "interfaces",
    tagline:
      "Full Stack SSR especializado en Vue y React. Construyo productos en tiempo real y de alto rendimiento donde arquitectura y UX son críticas.",
    cta: "Hablemos",
    secondaryCta: "Descargar CV",
    marquee: [
      "Vue.js", "React", "TypeScript", "WebSockets", "Node",
      "Performance", "Tiempo real", "Integración IA", "Disponible para trabajar",
    ],

    metricsLabel: "Impacto",
    metrics: [
      { v: "90%", k: "Reducción de tiempos de carga en Fydels" },
      { v: "150K+", k: "Usuarios en productos en producción" },
      { v: "+30%", k: "Aumento en métricas de ventas" },
      { v: "5", k: "Devs liderados en equipo multidisciplinario" },
    ],

    aboutLabel: "Sobre mí",
    aboutTitle: "Un desarrollador que toma el oficio como un hábito, no como un buzzword.",
    bio1:
      "Soy Juliano — Desarrollador Full Stack SSR basado en Mendoza, Argentina. Trabajo en entornos de producto complejos donde la performance, la arquitectura y la experiencia de usuario son innegociables.",
    bio2:
      "Más allá del desarrollo de interfaces, diseño soluciones que mejoran la eficiencia operativa a través de automatización e IA — contribuyendo directamente al crecimiento del negocio.",
    stackLabel: "Stack",
    cats: {
      Frontend: ["Vue.js", "React", "TypeScript", "JavaScript ES6+", "Vuex", "Redux", "Angular", "TailwindCSS"],
      "Backend / DB": ["Node.js", "Express", "APIs REST", "PostgreSQL", "WebSockets"],
      "IA & Tools": ["Claude", "Codex", "n8n", "Agentes de IA", "Git", "Postman", "Trello"],
    },
    languages: [
      { name: "Español", level: "Nativo" },
      { name: "Inglés", level: "Técnico · lectura fluida y conversación" },
    ],

    experienceLabel: "Experiencia",
    experienceTitle: "Dónde generé impacto.",
    experiences: [
      {
        company: "Fydels",
        role: "Full Stack Developer",
        period: "Feb 2025 — Actualidad",
        location: "Mendoza, AR",
        bullets: [
          "Reduje los tiempos de carga hasta en un 90%, optimizando renderizado y manejo de estado en una plataforma con más de 150K usuarios.",
          "Lideré un equipo multidisciplinario de 5 desarrolladores, asegurando entregas en tiempo alineadas con objetivos de negocio.",
          "Diseñé e implementé un sistema de métricas end-to-end, contribuyendo a un aumento del 30% en métricas de ventas.",
          "Implementé funcionalidades en tiempo real con WebSockets — chats asistidos por IA y grupales con comunicación de baja latencia.",
          "Mejoré la arquitectura y escalabilidad del front-end, reduciendo re-renderizados innecesarios y optimizando el flujo de datos.",
        ],
      },
      {
        company: "EstoyAca",
        role: "Full Stack Developer",
        period: "2024 — 2025",
        location: "Remoto",
        bullets: [
          "Desarrollé el front-end completo en Vue.js de una app con chat en tiempo real, geolocalización e integración de pagos.",
          "Implementé navegación dinámica con Vue Router e integré múltiples APIs externas.",
          "Optimicé la performance del front-end y la usabilidad en distintos dispositivos.",
          "Colaboré con equipos de backend en la definición de estructuras de datos para mejorar la comunicación entre servicios.",
        ],
      },
    ],

    educationLabel: "Educación",
    education: {
      school: "UTN — Universidad Tecnológica Nacional",
      program: "Tecnicatura en Programación",
      location: "Mendoza, Argentina",
    },

    workLabel: "Trabajo seleccionado",
    workTitle: "Proyectos personales pensados para usuarios reales.",
    projects: [
      {
        name: "Fydels",
        blurb:
          "Plataforma en producción con más de 150K usuarios. Lideré un equipo de 5, reduje los tiempos de carga en un 90%, implementé chat en tiempo real con agentes de IA sobre WebSockets y construí un sistema de métricas end-to-end que impulsó un 30% en ventas.",
        tags: ["Vue.js", "TypeScript", "WebSockets", "Agentes IA", "Performance"],
        live: "https://fydels.com",
        repo: null,
        status: "private",
        role: "Front-End Lead",
        year: "2025",
      },
      {
        name: "Salva Mi Huella",
        blurb:
          "Plataforma comunitaria que conecta rescatistas, hogares de tránsito y adoptantes. Gestión de usuarios, vistas exclusivas para admin y pipeline de contenido moderado.",
        tags: ["React", "Redux", "Node.js", "Express", "Tailwind"],
        live: "https://salva-mi-huella.vercel.app/",
        repo: "https://github.com/Salva-mi-huella/client",
        status: "live",
        role: "Front-end + UX",
        year: "2024",
      },
      {
        name: "Estoy Acá",
        blurb:
          "Marketplace de intercambio de servicios con pasarelas de pago, chat en tiempo real, geolocalización y cuentas escalonadas. Construí el front-end completo en Vue.js.",
        tags: ["Vue", "Vue Router", "Tailwind", "APIs REST"],
        live: null,
        repo: null,
        status: "soon",
        role: "Front-end",
        year: "2024",
      },
    ],
    contactLabel: "Contacto",
    contactPre: "¿Tenés algo",
    contactEm: "en mente?",
    contactPost: "Hablemos.",
    contactCards: [
      { h: "Email", v: "juliargumedoblanco@gmail.com", href: "mailto:juliargumedoblanco@gmail.com" },
      { h: "WhatsApp", v: "+54 9 261 334 8352", href: "https://wa.me/+5492613348352" },
      {
        h: "Currículum",
        v: "Descargar CV",
        href: "/CV Juliano Argumedo EN.pdf",
      },
    ],
    visit: "Visitar",
    code: "Código",
    soon: "Pronto",
    based: "Mendoza, AR",
    builtWith: "Diseñado y desarrollado por Juliano Argumedo",
    year: "2026",
    present: "Actualidad",
  },
};

export default COPY;
