"use client";

import { FiExternalLink, FiGithub } from "react-icons/fi";
import { motion } from "framer-motion";

interface ProjectCardProps {
  projects: Array<{
    name: string;
    sourceCodeUrl: string;
    liveDemoUrl: string;
    description?: string;
  }>;
}

export default function Projects({ projects }: ProjectCardProps) {
  return (
    <section
      id="Projects"
      className="min-h-screen bg-gradient-to-b from-slate-950 to-slate-900 py-24 px-6 font-sans"
    >
      {/* Header Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-6xl mx-auto text-center space-y-4 mb-16"
      >
        <h2 className="text-4xl font-bold mb-4">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">
            Projects
          </span>
        </h2>
        <div className="h-1 w-20 bg-gradient-to-r from-indigo-500 to-cyan-500 rounded-full mx-auto" />
        <h2 className="text-slate-300 mb-12 max-w-2xl mx-auto">
          What I&apos;ve been doing so far...
        </h2>
      </motion.div>

      {/* Projects Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
            className="group relative bg-slate-900/70 backdrop-blur-lg rounded-xl overflow-hidden border border-slate-800 shadow-lg"
          >
            {/* Card Content */}
            <div className="p-8 h-full flex flex-col">
              {/* Project Number */}
              <span className="text-6xl font-bold text-indigo-500/10 absolute top-4 right-4">
                {(index + 1).toString().padStart(2, "0")}
              </span>

              {/* Project Name */}
              <h3 className="text-xl font-semibold text-white mb-4 relative z-10">
                {project.name}
              </h3>

              {/* Project description */}
              <p className="text-slate-400 text-sm flex-grow">
                {project.description ||
                  "Click to learn more about this project and see it in action."}
              </p>

              {/* Links Section */}
              <div className="flex items-center gap-4 mt-6 pt-4 border-t border-slate-700/30 relative z-20">
                <a
                  href={project.sourceCodeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-slate-400 hover:text-indigo-400 transition-colors"
                >
                  <FiGithub className="w-4 h-4" />
                  <span>Source Code</span>
                </a>
                <a
                  href={project.liveDemoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-slate-400 hover:text-cyan-400 transition-colors ml-auto"
                >
                  <span>Live Demo</span>
                  <FiExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Hover Effects - moved below the content */}
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/10 to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent pointer-events-none" />
          </motion.div>
        ))}
      </div>

      {/* View More Projects Button */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="text-center mt-16"
      >
        {" "}
        <a href="https://github.com/annick975" target="blank">
          {" "}
          <button className="group relative px-8 py-3 bg-gradient-to-r from-indigo-500 to-cyan-500 rounded-lg overflow-hidden hover:shadow-lg hover:shadow-indigo-500/20 transition-all duration-300 hover:-translate-y-1">
            <span className="relative flex items-center gap-2 text-white font-medium">
              View More Projects
              <svg
                className="w-5 h-5 transform group-hover:translate-x-1 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
            </span>
          </button>
        </a>
      </motion.div>
    </section>
  );
}
