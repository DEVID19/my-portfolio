import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  tailwind,
  git,
  figma,
  nextjs,
  sass,
  github,
  vscode,
  vercel,
  netlify,
  Zaptra,
  Tenzies,
  linkendinicon,
  instalogo,
  intern_company_logo,
  SpendWise,
  Spicecatch_logo,
  Chatify,
  nodejs,
  mongodb,
  expressjs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "experience",
    title: "experience",
  },
  {
    id: "projects",
    title: "projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Frontend Developer",
    icon: mobile,
  },
  {
    title: "React Developer",
    icon: backend,
  },
  {
    title: "Next.js Devloper",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Next JS",
    icon: nextjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Nodejs",
    icon: nodejs,
  },
  {
    name: "mongodb",
    icon: mongodb,
  },
  {
    name: "Expressjs",
    icon: expressjs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "github",
    icon: github,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "vscode",
    icon: vscode,
  },
];

const experiences = [
  {
    title: "Frontend Devloper Intern",
    company_name: "5TECHG LAB LLP",
    icon: intern_company_logo,
    iconBg: "#383E56",
    date: "Feb 2025 - Jul 2025",
    points: [
      "Developed the frontend for 5TechG Lab’s official website using React.js, Tailwind CSS, and Figma designs",
      "Delivered a responsive trading education website for a client, independently handling all frontend development",
      "Collaborated with backend teams to integrate APIs and ensure smooth data flow across the application",
      "Participated in sprint planning and team discussions, implementing UI/UX improvements based on feedback",
      "Optimized and debugged code to enhance performance, accessibility, and mobile responsiveness",
    ],
  },
  {
    title: "Frontend Developer Intern",
    company_name: "SPICECATCH RETAIL PRIVATE LIMITED",
    icon: Spicecatch_logo,
    iconBg: "#383E56",
    date: "Aug 2025 - Nov 2025",
    points: [
      "Built and maintained responsive and interactive web interfaces by translating design mockups into clean, scalable frontend code",
      "Owned the end-to-end frontend workflow, including UI development, state management, and frontend logic handling",
      "Integrated frontend applications with RESTful APIs to ensure seamless communication between frontend and backend systems",
      "Worked closely with designers and developers in an agile environment to improve UI/UX consistency and application performance",
      "Contributed to the company’s React Native mobile application by developing UI screens and features using Expo",
      "Demonstrated strong problem-solving skills, teamwork, and adaptability while working across web and mobile platforms",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "Passionate about frontend development? Let's connect on LinkedIn and discuss everything from React to Next.js. Stay updated with my latest projects and insights!",
    name: "Linked-In ↗",
    link: "https://linkedin.com/in/devid-bisen",
    designation: "",
    company: "",
    image: linkendinicon,
  },
  {
    testimonial:
      "Check out my latest projects on GitHub! From interactive UI components to full-fledged applications, explore how I build with React, TypeScript, and Next.js",
    name: "Git-hub ↗",
    link: "https://github.com/DEVID19",
    designation: "",
    company: "",
    image: github,
  },
  {
    testimonial:
      "Follow me on Instagram for tech updates, coding tips, and a glimpse into my developer journey. Let's connect and grow together!",
    name: "Instagram ↗",
    link: "https://www.instagram.com/_devid_84?igsh=NXpvNDRrZnQzbjRj",
    designation: "",
    company: "",
    image: instalogo,
  },
];

const projects = [
  {
    name: "Chatify",
    description:
      "Chatify is a full-stack real-time chat application offering secure user authentication, personal and group conversations, AI-powered chat assistance, and profile customization. Built with the MERN stack, Socket.io, and Redux Toolkit, it demonstrates real-time communication, scalable backend architecture, and modern state management.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Redux Toolkit",
        color: "green-text-gradient",
      },
      {
        name: "Node.js",
        color: "pink-text-gradient",
      },
      {
        name: "MongoDB",
        color: "green-text-gradient",
      },
      {
        name: "Socket.io",
        color: "orange-text-gradient",
      },
      {
        name: "Express.js",
        color: "pink-text-gradient",
      },
      {
        name: "Full Stack",
        color: "blue-text-gradient",
      },
      {
        name: "GenAI",
        color: "orange-text-gradient",
      },
    ],
    image: Chatify,
    source_code_link: "https://github.com/DEVID19/chatify.git",
    live_link: "https://chatify-nos7.onrender.com",
  },
  {
    name: "Zaptra",
    description:
      "Zaptra is a full-stack electronics e-commerce platform featuring user-specific authentication, cart and order tracking, and an admin dashboard for managing products, orders, and customers. Built with React, Redux Toolkit, Tailwind CSS, and powered by Appwrite, it showcases scalable architecture and secure role-based access.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Redux Toolkit",
        color: "green-text-gradient",
      },
      {
        name: "Tailwind CSS",
        color: "pink-text-gradient",
      },
      {
        name: "Appwrite",
        color: "orange-text-gradient",
      },
      {
        name: "Authentication",
        color: "blue-text-gradient",
      },
      {
        name: "Full Stack",
        color: "green-text-gradient",
      },
    ],
    image: Zaptra,
    source_code_link: "https://github.com/DEVID19/Ecommerce.git",
    live_link: "https://zaptra-electronics-store.vercel.app/",
  },

  {
    name: "SpendWise",
    description:
      "SpendWise is a personal expense tracker with user-specific authentication, category-based inputs, and visual insights using Recharts. Built with React, Context API, and Tailwind CSS, and powered by Firebase, it offers a clean and secure interface for tracking and analyzing daily expenses.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Context API",
        color: "green-text-gradient",
      },
      {
        name: "Tailwind CSS",
        color: "pink-text-gradient",
      },
      {
        name: "Firebase",
        color: "orange-text-gradient",
      },
      {
        name: "Authentication",
        color: "blue-text-gradient",
      },
      {
        name: "Data Visualization ",
        color: "green-text-gradient",
      },
    ],
    image: SpendWise,
    source_code_link: "https://github.com/DEVID19/spendwise.git",
    live_link: "https://spendwise-delta.vercel.app/",
  },
  // {
  //   name: "TenZies",
  //   description:
  //     "TenZies is a simple yet engaging dice game where players roll, hold, and match all dice to win. Built using React and Tailwind CSS, it features smooth state management, real-time UI updates, and a fun user experience designed for quick and casual gameplay. The game logic is fully handled on the client side, showcasing React’s state-driven rendering and component-based architecture.",
  //   tags: [
  //     {
  //       name: "React",
  //       color: "blue-text-gradient",
  //     },
  //     {
  //       name: "Javascript",
  //       color: "green-text-gradient",
  //     },
  //     {
  //       name: "tailwind",
  //       color: "pink-text-gradient",
  //     },
  //   ],
  //   image: Tenzies,
  //   source_code_link: "https://github.com/DEVID19/TenZies",
  //   live_link: "https://ten-zies-three.vercel.app/",
  // },
];

export { services, technologies, experiences, testimonials, projects };
