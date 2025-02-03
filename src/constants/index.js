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
  salk,
  codesoft,
  BharatIntern,
  metaverse,
  travel,
  tictactoe,
  threejs,
  nextjs,
  sass,
  github,
  vscode,
  vercel,
  netlify,
  Apple,
  Tenzies,
  Endgame,
  linkendinicon,
  instalogo,
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
    title: "Next JS Developer",
    icon: mobile,
  },
  {
    title: "Frontend Developer",
    icon: backend,
  },
  {
    title: "Backend Devloper",
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
    name: "Sass",
    icon: sass,
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
  {
    name: "netlify",
    icon: netlify,
  },
  {
    name: "vercel",
    icon: vercel,
  },
];

const experiences = [
  {
    title: "Web Developer Intern",
    company_name: "CodeSoft",
    icon: codesoft,
    iconBg: "#383E56",
    date: "Aug 2023 - Sep 2023",
    points: [
      "Developed and deployed web applications using modern technologies, ensuring clean and efficient code.",
      "Completed real-world projects within deadlines, demonstrating strong problem-solving and time-management skills.",
      "Implemented responsive designs and optimized UI for seamless user experience across devices.",
      "Gained hands-on experience in full-cycle web development, from planning and coding to testing and deployment.",
    ],
  },
  {
    title: "web Developer Intern",
    company_name: "Bharat Intern",
    icon: BharatIntern,
    iconBg: "#E6DEDD",
    date: "Sep 2023 - Oct 2023",
    points: [
      "Built web applications from scratch, following best practices in modern web development.",
      "Utilized cutting-edge technologies to develop responsive and high-performance web solutions.",
      "Consistently met deadlines by efficiently managing tasks and ensuring timely project submissions.",
      "Demonstrated end-to-end development skills, from planning and coding to deployment and optimization.",
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
    name: "Apple",
    description:
      "Apple Clone is a visually stunning replica of Apple's website built with React, Three.js, and GSAP. It features smooth animations, 3D elements, and seamless interactions, delivering an immersive user experience.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Javascript",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: Apple,
    source_code_link: "https://github.com/DEVID19/Apple",
    live_link: "https://apple-virid.vercel.app/",
  },
  {
    name: "TenZies",
    description:
      "Tenzies Game is a fun and interactive dice game built with React, featuring smooth state management and dynamic UI updates. Players roll dice, hold numbers, and aim to match all for a win.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Javascript",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: Tenzies,
    source_code_link: "https://github.com/DEVID19/TenZies",
    live_link: "https://ten-zies-three.vercel.app/",
  },
  {
    name: "Assembly-EndGame",
    description:
      "Assembly Endgame is a strategic puzzle game built with React, featuring engaging mechanics and dynamic interactions. Players solve challenges by assembling pieces to complete the endgame objective.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Javascript",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: Endgame,
    source_code_link: "https://github.com/DEVID19/EndGame",
    live_link: "https://end-game-neon.vercel.app/",
  },
];

export { services, technologies, experiences, testimonials, projects };
