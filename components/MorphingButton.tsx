"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa";

export default function MorphingBackButton() {
  const [ref, inView] = useInView({
    threshold: 0,
  });

  return (
    <>
      <motion.div
        layoutId="back-button"
        layout
        ref={ref}
        initial={{ opacity: 1 }}
        animate={{ opacity: inView ? 1 : 0 }}
        exit={{ opacity: 0 }}
        className="mb-6"
      >
        <Link
          href="/#projects"
          className="inline-flex items-center text-sm font-medium text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
        >
          <motion.div
            layout
            layoutId="back-button-wrapper"
            className="flex items-center gap-2"
          >
            <FaArrowLeft className="w-4 h-4 mr-2" />
            Back to Projects
          </motion.div>
        </Link>
      </motion.div>
      <AnimatePresence mode="popLayout">
        {!inView && (
          <motion.div
            layoutId="back-button"
            layout
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.1 }}
          >
            <Link
              href="/#projects"
              className="fixed top-6 left-1/2 -translate-x-1/2 z-50 bg-white bg-opacity-80 font-medium text-gray-600 hover:text-gray-900 px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer border border-black/10 dark:bg-gray-950 dark:bg-opacity-80 dark:text-white/60 dark:hover:text-white dark:border-white/10"
            >
              <motion.div
                layout
                layoutId="back-button-wrapper"
                className="flex items-center gap-2"
              >
                <FaArrowLeft className="text-sm" />
                Back to Projects
              </motion.div>
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
