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
    icon: React.createElement(CgWorkAlt),
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
  },
  {
    title: "Career Canvas",
    description:
      "A free, open-source website that helps people create ATS-friendly resume that with ease.",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "Redux"],
    imageUrl: careerCanvasImg,
    githubUrl: "https://github.com/Alfie728/Career-Canvas",
    deployedUrl: "https://careercanvas-mu.vercel.app/",
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
