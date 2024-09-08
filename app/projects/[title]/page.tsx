"use client";

import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaArrowLeft, FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { projectsData } from "@/lib/data";
import { notFound } from "next/navigation";
import MorphingButton from "@/components/MorphingButton";
import SubmitBtn from "@/components/submit-btn";
import { sendEmail } from "@/actions/sendEmail";
import toast from "react-hot-toast";

const FadeInSection = ({ children }: { children: React.ReactNode }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.3,
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
        hidden: { opacity: 0, y: 40 },
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

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!project) {
    notFound();
  }

  return (
    <div className="min-h-screen ">
      <main className="container mx-auto px-4 py-8 max-w-4xl">
        <MorphingButton />
        <FadeInSection>
          <h1 className="text-4xl font-bold mb-4">{project.title}</h1>
          <p className="text-lg text-gray-600 mb-6">{project.description}</p>
        </FadeInSection>

        <FadeInSection>
          <div className="grid grid-cols-2 gap-4 mb-8">
            <div>
              <h3 className="font-semibold mb-2">Type</h3>
              <p className="text-gray-600">{project.type}</p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Timeline</h3>
              <p className="text-gray-600">{project.timeline}</p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Role</h3>
              <p className="text-gray-600">{project.role}</p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Team Size</h3>
              <p className="text-gray-600">{project.teamSize}</p>
            </div>
          </div>
        </FadeInSection>

        <FadeInSection>
          <Image
            src={project.imageUrl}
            alt={`${project.title} Screenshot`}
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
            <p className="text-gray-600 mb-4">{project.purpose}</p>
          </section>
        </FadeInSection>

        <FadeInSection>
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">
              Web Stack and Explanation
            </h2>
            <ul className="list-disc list-inside space-y-2 text-gray-600 mb-4">
              {project.stack.map((item, index) => (
                <li key={index}>
                  {item.name}: {item.description}
                </li>
              ))}
            </ul>
            <p className="text-gray-600">{project.stackExplanation}</p>
          </section>
        </FadeInSection>

        <FadeInSection>
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Development Process</h2>
            <p className="text-gray-600">{project.developmentProcess}</p>
          </section>
        </FadeInSection>

        <FadeInSection>
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">
              Problems and Thought Process
            </h2>
            {project.challenges.map((challenge, index) => (
              <p key={index} className="text-gray-600 mb-4">
                {challenge}
              </p>
            ))}
          </section>
        </FadeInSection>

        <FadeInSection>
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Lessons Learned</h2>
            <ul className="list-disc list-inside space-y-2 text-gray-600">
              {project.lessonsLearned.map((lesson, index) => (
                <li key={index}>{lesson}</li>
              ))}
            </ul>
          </section>
        </FadeInSection>

        <FadeInSection>
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Let's Build Something Together</h2>
            <p className="text-gray-700 mt-6 dark:text-white/80">
              Please contact me directly at{" "}
              <a className="underline" href="mailto:zegro728@gmail.com">
                zegro728@gmail.com
              </a>{" "}
              or through this form.
            </p>
            <form
              className="mt-10 flex flex-col dark:text-black"
              action={async (formData) => {
                const { data, error } = await sendEmail(formData);
                if (error) {
                  toast.error(error);
                  return;
                }
                toast.success("Email sent successfully!");
              }}
            >
              <input
                className="h-14 px-4 rounded-lg borderBlack dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
                name="senderEmail"
                type="email"
                required
                maxLength={500}
                placeholder="Your email"
              />
              <textarea
                className="h-52 my-3 rounded-lg borderBlack p-4 dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
                name="message"
                placeholder="Your message"
                required
                maxLength={5000}
              />
              <SubmitBtn />
            </form>
          </section>
        </FadeInSection>
      </main>
    </div>
  );
}
