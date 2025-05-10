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
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
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
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Frontend Developer",
    icon: web,
  },
  {
    title: "Content Creator",
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
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

import raretech from "../assets/raretech.png"; // Use your own icons or replace with suitable ones
import examSystem from "../assets/exam.jpg";
import learning from "../assets/learning.png";

const experiences = [
  {
    title: "Full Stack MERN Developer",
    company_name: "RareTech Institute",
    icon: raretech,
    iconBg: "#383E56",
    date: "Aug 2024",
    points: [
      "Designed and developed the RareTech Institute website (raretech.co.in) from scratch using HTML, CSS, JavaScript, and React.js.",
      "Created responsive layouts and reusable components using Tailwind CSS.",
      "Handled animations and transitions for a modern UI experience using Framer Motion.",
      "Deployed the website using Vercel and maintained its source code via GitHub.",
    ],
  },
  {
    title: "Full Stack Developer",
    company_name: "Exam Management System (Academic Project)",
    icon: examSystem,
    iconBg: "#E6DEDD",
    date: "Feb 2025 - Present",
    points: [
      "Built a dynamic exam system allowing multiple exam types and question subcategories.",
      "Used Node.js and Express for backend APIs and MongoDB for storing exam data.",
      "Enabled secure login for institute admins and students, and result generation with scoring logic.",
      "Integrated frontend with backend and ensured question saving, progress tracking, and type switching features.",
    ],
  },
  {
    title: "Self Learning Journey",
    company_name: "Online & Personal Learning",
    icon: learning,
    iconBg: "#383E56",
    date: "2022 - Present",
    points: [
      "Learned core web development technologies including HTML, CSS, JavaScript, and Git.",
      "Mastered React.js and state management techniques for building scalable web apps.",
      "Explored backend development with Node.js, Express.js, MongoDB, and JWT authentication.",
      "Worked on real-world projects independently and constantly improved through self-paced learning.",
    ],
  },
];


const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Harsh proved me wrong.",
    name: "Mandeep Singh",
    designation: "Owner",
    company: "Raretech",
    image: raretech,
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Harsh does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Harsh optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];
const education = [
  {
    year: "2021",
    level: "Middle School",
    description:
      "8th Grade, Shri Gauri Model High School, Jagirpur, Ludhiana. Completed my middle school education, building a strong foundation in various subjects and developing skills in communication and critical thinking.",
  },
  {
    year: "2023",
    level: "High School",
    description:
      "10th Grade, Shri Gauri Model High School, Jagirpur, Ludhiana. Successfully completed secondary education with a focus on core subjects like Science, Mathematics, and English. This period honed my problem-solving skills and academic curiosity.",
  },
  {
    year: "Ongoing",
    level: "Senior Secondary School",
    description:
      "12th Grade (Arts), Simran Public Senior Secondary School, Ludhiana. Currently pursuing 12th Grade with a major in Arts, studying subjects like History, English, Punjabi, Computer, Physical Education, and Hindi. This phase is shaping my interest in the humanities and technology.",
  },
];
export default education;

const projects = [
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
