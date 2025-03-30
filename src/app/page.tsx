"use client";
import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4">
        <div className="text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-4">
            NIYUBAHWE UWACU Annick
          </h1>
          <p className="text-xl md:text-2xl mb-8">
            Full-Stack Developer & Cybersecurity Enthusiast
          </p>
          <div className="flex justify-center space-x-4">
            <a
              href="https://github.com/annick975"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-gray-200 transition-colors"
            >
              <FaGithub size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/annick-niyubahwe-04898932a/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-gray-200 transition-colors"
            >
              <FaLinkedin size={24} />
            </a>
            <a
              href="mailto:niyubahwe.annick975@gmail.com"
              className="text-white hover:text-gray-200 transition-colors"
            >
              <FaEnvelope size={24} />
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">About Me</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            I am a passionate full-stack developer with 5 years of experience in
            building web applications. My expertise includes React, Node.js, and
            TypeScript. I am also deeply interested in cybersecurity and
            continuously learning about new technologies and best practices.
          </p>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Skills</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              "React",
              "Node.js",
              "TypeScript",
              "MongoDB",
              "Python",
              "Next.js",
              "Git",
              "Docker",
            ].map((skill) => (
              <div
                key={skill}
                className="bg-white p-4 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow"
              >
                {skill}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Projects</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "E-commerce Platform",
                description:
                  "Built with Next.js and MongoDB, featuring real-time inventory management and payment integration.",
                tech: ["Next.js", "MongoDB", "Stripe"],
              },
              {
                title: "AI Content Management",
                description:
                  "AI-powered content management system using React and Python for intelligent content organization.",
                tech: ["React", "Python", "TensorFlow"],
              },
              {
                title: "Weather App",
                description:
                  "Mobile weather application with real-time updates and location-based forecasts.",
                tech: ["React Native", "OpenWeather API"],
              },
              {
                title: "Portfolio Chatbot",
                description:
                  "Interactive chatbot using Gemini AI to provide information about my work and experience.",
                tech: ["Next.js", "Gemini AI", "TypeScript"],
              },
            ].map((project) => (
              <div
                key={project.title}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
              >
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Get in Touch</h2>
          <p className="text-lg text-gray-700 mb-8">
            Interested in working together? Let's connect!
          </p>
          <div className="flex justify-center space-x-6">
            <a
              href="mailto:niyubahwe.annick975@gmail.com"
              className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition-colors"
            >
              Email Me
            </a>
            <a
              href="https://www.linkedin.com/in/annick-niyubahwe-04898932a/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-800 text-white px-6 py-3 rounded-lg hover:bg-gray-900 transition-colors"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
