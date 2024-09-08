import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import webOverflowImg from "@/public/web_overflow.png";
import careerCanvasImg from "@/public/career_canvas.png";
// import wordanalyticsImg from "@/public/wordanalytics.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Education",
    hash: "#Education",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Bachelor of Engineering in EE",
    location: "South China University of Technology",
    description:
      "Where I started my journey and found my passion for computer science and web development.",
    icon: React.createElement(LuGraduationCap),
    date: "2018 - 2022",
  },
  {
    title: "Master of Information Technology",
    location: "University of New South Wales",
    description:
      "I'm currently studying at UNSW as a graduate student. Through my studies, I have gained a solid foundation in computer science and web development concepts.",
    icon: React.createElement(LuGraduationCap),
    date: "2024 - 2026",
  },
  {
    title: "Learning to be a Full-Stack Developer",
    location: "Sydney, Australia",
    description:
      "I'm learning to be a full-stack developer through online courses and building projects. My stack includes React, Next.js, TypeScript, Tailwind and MongoDB.",
    icon: React.createElement(FaReact),
    date: "2023 - present",
  },
] as const;

export const projectsData = [
  {
    title: "Web Overflow",
    description:
      "Built a platform for developers to ask questions, share knowledge, and interact with a community of peers.",
    tags: ["React", "TypeScript", "Next.js", "MongoDB", "Tailwind"],
    imageUrl: webOverflowImg,
    githubUrl: "https://github.com/Alfie728/weboverflow",
    deployedUrl: "https://weboverflow-alfiechen.vercel.app",
    type: "Web Application",
    timeline: "3 months",
    role: "Full-stack Developer",
    teamSize: "1 member",
    purpose:
      "The main objective of Web Overflow was to create a user-friendly platform where developers could easily ask questions, share their knowledge, and engage with a community of like-minded professionals. I aimed to build a responsive, intuitive interface with robust backend functionality to support a growing user base.",
    stack: [
      {
        name: "Next.js",
        description: "To enable server-side rendering and optimize performance",
      },
      {
        name: "TypeScript",
        description: "For adding static typing and improving code quality",
      },
      {
        name: "MongoDB",
        description: "As a flexible, scalable database solution",
      },
      {
        name: "Tailwind CSS",
        description: "For rapid UI development and consistent styling",
      },
      {
        name: "Clerk",
        description: "For authentication and user management",
      },
      {
        name: "OpenAI API",
        description: "AI assistant for generating responses to questions",
      },
    ],
    stackExplanation:
      "This stack was chosen for its scalability, performance, and developer experience. Next.js and React provide a powerful frontend framework, while MongoDB offers flexibility for our data models. TypeScript enhances code quality and maintainability.",
    developmentProcess:
      "My development process involved iterative design, regular code reviews, and continuous integration. I started with wireframing and prototyping, followed by building the core functionality, and then iteratively added features based on user feedback.",
    challenges: [
      "One of the main challenges I faced was implementing real-time updates for questions and answers. I explored various solutions, including WebSockets and server-sent events, before settling on a combination of optimistic UI updates and polling for the best balance of performance and reliability.",
      "Another significant challenge was designing a scalable database schema that could efficiently handle complex queries for searching and filtering questions. I iteratively refined my MongoDB schema and index strategy to optimize query performance.",
    ],
    lessonsLearned: [
      "The importance of thorough planning and architecture design before diving into coding",
      "The value of continuous user feedback in shaping the product",
      "Techniques for optimizing database queries and frontend performance",
      "Effective strategies for managing a development workflow",
    ],
  },
  {
    title: "Career Canvas",
    description:
      "A free, open-source website that helps people create ATS-friendly resume that with ease.",
    tags: ["React", "TypeScript", "Next.js", "Tailwind" ],
    imageUrl: careerCanvasImg,
    githubUrl: "https://github.com/Alfie728/Career-Canvas",
    deployedUrl: "https://careercanvas-mu.vercel.app/",
    type: "Web Application",
    timeline: "1 month",
    role: "Front-end Developer",
    teamSize: "1 member",
    purpose:
      "Career Canvas aims to simplify the resume creation process, helping job seekers create professional, ATS-friendly resumes quickly and easily.",
    stack: [
      {
        name: "Next.js",
        description: "For server-side rendering and optimized performance",
      },
      {
        name: "TypeScript",
        description: "To enhance code quality and maintainability",
      },
      {
        name: "Tailwind CSS",
        description: "For rapid and consistent UI development",
      },
      {
        name: "Dnd-kit",
        description: "For smooth, intuitive drag and drop functionality",
      },
    ],
    stackExplanation:
      "This tech stack was chosen for its robustness in building modern web applications. Next.js provides an excellent framework for React applications, while TypeScript adds type safety. Redux manages the complex state of resume data, and Tailwind CSS allows for quick and responsive design implementation.",
    developmentProcess:
      "The development of Career Canvas followed an agile methodology. I started with a basic MVP and iteratively added features based on user feedback and testing. Regular code reviews and continuous integration ensured code quality throughout the development process.",
    challenges: [
      "One major challenge was designing an intuitive user interface that could handle the complexity of resume creation while remaining simple to use.",
      "Another challenge was implementing a flexible and extensible data structure to accommodate various resume formats and sections.",
    ],
    lessonsLearned: [
      "The importance of user-centric design in creating tools for broad audiences",
      "Techniques for managing complex form state in React applications",
      "Strategies for creating responsive and print-friendly layouts",
      "The value of open-source development in gathering community contributions and feedback",
    ],
  },
] as const;

export const skillsData = [
  "Next.js",
  "React.js",
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "Git",
  "Tailwind",
  "Node.js",
  "MongoDB",
  "PostgreSQL",
  "Python",
  "Framer Motion",
  "GSAP",
] as const;
