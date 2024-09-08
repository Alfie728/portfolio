"use client";

import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaArrowLeft, FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { projectsData } from "@/lib/data";
import { notFound } from "next/navigation";

const FadeInSection = ({ children }: { children: React.ReactNode }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial="hidden"
      transition={{ duration: 0.5 }}
      variants={{
        visible: { opacity: 1, y: 0 },
        hidden: { opacity: 0, y: 20 },
      }}
    >
      {children}
    </motion.div>
  );
};

export default function ProjectPage({ params }: { params: { title: string } }) {
  const project = projectsData.find(
    (project) => project.title === decodeURIComponent(params.title)
  );

  if (!project) {
    notFound();
  }

  return (
    <div className="min-h-screen ">
      <main className="container mx-auto px-4 py-8 max-w-4xl">
        <Link
          href="/#projects"
          className="inline-flex items-center text-sm font-medium text-gray-600 hover:text-gray-900 mb-6"
        >
          <FaArrowLeft className="w-4 h-4 mr-2" />
          Back to Projects
        </Link>

        <FadeInSection>
          <h1 className="text-4xl font-bold mb-4">Web Overflow</h1>
          <p className="text-lg text-gray-600 mb-6">
            A platform for developers to ask questions, share knowledge, and
            interact with a community of peers.
          </p>
        </FadeInSection>

        <FadeInSection>
          <div className="grid grid-cols-2 gap-4 mb-8">
            <div>
              <h3 className="font-semibold mb-2">Type</h3>
              <p className="text-gray-600">Web Application</p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Timeline</h3>
              <p className="text-gray-600">3 months</p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Role</h3>
              <p className="text-gray-600">Full-stack Developer</p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Team Size</h3>
              <p className="text-gray-600">3 members</p>
            </div>
          </div>
        </FadeInSection>

        <FadeInSection>
          <Image
            src="/placeholder.svg"
            alt="Web Overflow Project Screenshot"
            width={1200}
            height={675}
            className="w-full h-auto rounded-lg shadow-lg mb-12"
          />
        </FadeInSection>

        <FadeInSection>
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">
              Project Purpose and Goal
            </h2>
            <p className="text-gray-600 mb-4">
              The main objective of Web Overflow was to create a user-friendly
              platform where developers could easily ask questions, share their
              knowledge, and engage with a community of like-minded
              professionals. We aimed to build a responsive, intuitive interface
              with robust backend functionality to support a growing user base.
            </p>
          </section>
        </FadeInSection>

        <FadeInSection>
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">
              Web Stack and Explanation
            </h2>
            <ul className="list-disc list-inside space-y-2 text-gray-600 mb-4">
              <li>
                React: For building a dynamic and responsive user interface
              </li>
              <li>
                Next.js: To enable server-side rendering and optimize
                performance
              </li>
              <li>
                TypeScript: For adding static typing and improving code quality
              </li>
              <li>MongoDB: As a flexible, scalable database solution</li>
              <li>
                Tailwind CSS: For rapid UI development and consistent styling
              </li>
            </ul>
            <p className="text-gray-600">
              This stack was chosen for its scalability, performance, and
              developer experience. Next.js and React provide a powerful
              frontend framework, while MongoDB offers flexibility for our data
              models. TypeScript enhances code quality and maintainability.
            </p>
          </section>
        </FadeInSection>

        <FadeInSection>
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Development Process</h2>
            <div className="grid grid-cols-2 gap-4 mb-4">
              {[1, 2, 3, 4].map((i) => (
                <Image
                  key={i}
                  src="/placeholder.svg"
                  alt={`Development process step ${i}`}
                  width={600}
                  height={400}
                  className="w-full h-auto rounded-lg shadow-md"
                />
              ))}
            </div>
            <p className="text-gray-600">
              Our development process involved iterative design, regular code
              reviews, and continuous integration. We started with wireframing
              and prototyping, followed by building the core functionality, and
              then iteratively added features based on user feedback.
            </p>
          </section>
        </FadeInSection>

        <FadeInSection>
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">
              Problems and Thought Process
            </h2>
            <p className="text-gray-600 mb-4">
              One of the main challenges we faced was implementing real-time
              updates for questions and answers. We explored various solutions,
              including WebSockets and server-sent events, before settling on a
              combination of optimistic UI updates and polling for the best
              balance of performance and reliability.
            </p>
            <p className="text-gray-600">
              Another significant challenge was designing a scalable database
              schema that could efficiently handle complex queries for searching
              and filtering questions. We iteratively refined our MongoDB schema
              and index strategy to optimize query performance.
            </p>
          </section>
        </FadeInSection>

        <FadeInSection>
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Lessons Learned</h2>
            <ul className="list-disc list-inside space-y-2 text-gray-600">
              <li>
                The importance of thorough planning and architecture design
                before diving into coding
              </li>
              <li>
                The value of continuous user feedback in shaping the product
              </li>
              <li>
                Techniques for optimizing database queries and frontend
                performance
              </li>
              <li>
                Effective strategies for managing a collaborative development
                workflow
              </li>
            </ul>
          </section>
        </FadeInSection>

        <FadeInSection>
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Other Projects</h2>
            <div className="grid grid-cols-2 gap-6">
              {["Project 1", "Project 2"].map((project, index) => (
                <div key={index} className="bg-white rounded-lg shadow-md p-4">
                  <Image
                    src="/placeholder.svg"
                    alt={project}
                    width={400}
                    height={300}
                    className="w-full h-auto rounded-lg mb-4"
                  />
                  <h3 className="font-semibold mb-2">{project}</h3>
                  <p className="text-gray-600 text-sm mb-4">
                    Brief description of the project goes here.
                  </p>
                  <Link href="#" className="text-blue-600 hover:underline">
                    View Project
                  </Link>
                </div>
              ))}
            </div>
          </section>
        </FadeInSection>

        <FadeInSection>
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">
              Let's Build Something Together
            </h2>
            <p className="text-gray-600 mb-4">
              I'm always open to discussing product design work or partnership
              opportunities.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700"
            >
              Start a Conversation
            </Link>
          </section>
        </FadeInSection>
      </main>
    </div>
  );
}
