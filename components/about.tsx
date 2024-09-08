"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3 text-left">
        After earning my Bachelor's degree in Electrical Engineering, I
        uncovered a deep passion for computer science and technology. The thrill
        of solving real-world problems and bringing ideas to life through coding
        has captivated me ever since. Now I’m studying IT in UNSW as a graduate
        student to expand my boundaries in this ever-evolving field.
      </p>
      <p className="text-left">
        My core stack is <span className="font-bold">React</span>,{" "}
        <span className="font-bold">Next.js</span>,{" "}
        <span className="font-bold">Node.js</span>, and{" "}
        <span className="font-bold">MongoDB</span>. I am always looking to learn
        new technologies. I am currently looking for a full-time position as a
        front-end developer.
      </p>
    </motion.section>
  );
}
