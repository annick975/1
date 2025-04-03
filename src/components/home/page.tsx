"use client";

import { useState, useEffect, useRef } from "react";
import {
  FaGithub,
  FaLinkedinIn,
  FaJava,
  FaKey,
  FaLock,
  FaNetworkWired,
  FaNode,
  FaInstagram,
} from "react-icons/fa";
import { motion } from "framer-motion";
import {
  SiLinux,
  SiGnubash,
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiTailwindcss,
  SiBootstrap,
  SiReact,
  SiExpress,
  SiMongodb,
  SiPhp,
  SiPython,
  SiMysql,
  SiTypescript,
} from "react-icons/si";
import { TbBrandGolang } from "react-icons/tb";

const phrases = [
  "Cybersecurity Specialist",
  "Frontend Developer",
  "Backend Developer",
];

interface Skill {
  name: string;
  icon: JSX.Element;
  level?: number;
}

interface SkillCategory {
  category: string;
  skills: Skill[];
}

const skillCategories: SkillCategory[] = [
  {
    category: "Frontend",
    skills: [
      { name: "React", icon: <SiReact className="w-5 h-5" />, level: 90 },
      {
        name: "TypeScript",
        icon: <SiTypescript className="w-5 h-5" />,
        level: 85,
      },
      {
        name: "JavaScript",
        icon: <SiJavascript className="w-5 h-5" />,
        level: 90,
      },
      { name: "HTML", icon: <SiHtml5 className="w-5 h-5" />, level: 95 },
      { name: "CSS", icon: <SiCss3 className="w-5 h-5" />, level: 90 },
      {
        name: "Tailwind",
        icon: <SiTailwindcss className="w-5 h-5" />,
        level: 85,
      },
      {
        name: "Bootstrap",
        icon: <SiBootstrap className="w-5 h-5" />,
        level: 80,
      },
    ],
  },
  {
    category: "Cybersecurity",
    skills: [
      { name: "Linux", icon: <SiLinux className="w-5 h-5" />, level: 90 },
      {
        name: "Bash Scripting",
        icon: <SiGnubash className="w-5 h-5" />,
        level: 85,
      },
      { name: "PKI", icon: <FaKey className="w-5 h-5" />, level: 80 },
      {
        name: "Penetration Testing",
        icon: <FaLock className="w-5 h-5" />,
        level: 75,
      },
      {
        name: "DNS Sec",
        icon: <FaNetworkWired className="w-5 h-5" />,
        level: 85,
      },
    ],
  },

  {
    category: "Backend",
    skills: [
      { name: "Java", icon: <FaJava className="w-5 h-5" />, level: 85 },
      { name: "Python", icon: <SiPython className="w-5 h-5" />, level: 80 },
      { name: "Node.js", icon: <FaNode className="w-5 h-5" />, level: 85 },
      {
        name: "Express.js",
        icon: <SiExpress className="w-5 h-5" />,
        level: 80,
      },
      { name: "MongoDB", icon: <SiMongodb className="w-5 h-5" />, level: 75 },
      { name: "PHP", icon: <SiPhp className="w-5 h-5" />, level: 70 },
      { name: "MySQL", icon: <SiMysql className="w-5 h-5" />, level: 80 },
      {
        name: "Golang",
        icon: <TbBrandGolang className="w-5 h-5" />,
        level: 65,
      },
    ],
  },
];

export default function Home() {
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [deleting, setDeleting] = useState(false);
  const [letterIndex, setLetterIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [activeTab, setActiveTab] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);

  const typingSpeed = 100;
  const deletingSpeed = 80;
  const pauseDuration = 1800;

  useEffect(() => {
    setIsVisible(true);

    const currentPhrase = phrases[currentPhraseIndex];

    if (deleting) {
      if (letterIndex > 0) {
        const timer = setTimeout(() => {
          setDisplayedText(currentPhrase.slice(0, letterIndex - 1));
          setLetterIndex(letterIndex - 1);
        }, deletingSpeed);
        return () => clearTimeout(timer);
      } else {
        setDeleting(false);
        setCurrentPhraseIndex((prev) => (prev + 1) % phrases.length);
      }
    } else {
      if (letterIndex < currentPhrase.length) {
        const timer = setTimeout(() => {
          setDisplayedText(currentPhrase.slice(0, letterIndex + 1));
          setLetterIndex(letterIndex + 1);
        }, typingSpeed);
        return () => clearTimeout(timer);
      } else {
        const timer = setTimeout(() => setDeleting(true), pauseDuration);
        return () => clearTimeout(timer);
      }
    }
  }, [letterIndex, deleting, currentPhraseIndex]);

  // Handle scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section
      id="Home"
      ref={sectionRef}
      className="relative min-h-screen bg-gradient-to-b from-slate-950 to-slate-900 overflow-hidden font-sans"
    >
      {/* Subtle grid background */}
      <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] bg-center opacity-[0.03]" />

      {/* Gradient orbs */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-indigo-500/10 rounded-full blur-[100px]" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-cyan-500/10 rounded-full blur-[100px]" />

      {/* Main content container */}
      <div className="relative z-10 container mx-auto px-4 py-16 md:py-24 flex flex-col justify-center min-h-screen">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col md:flex-row items-center gap-12 md:gap-16"
          >
            {/* Left column - Text content */}
            <div className="flex-1 space-y-8">
              {/* Headline tag */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <div className="inline-flex items-center px-3 py-1 rounded-full bg-gradient-to-r from-indigo-500/10 to-cyan-500/10 backdrop-blur-sm border border-indigo-500/20">
                  <span className="text-xs font-medium text-indigo-300 tracking-wider">
                    PERSONAL PORTFOLIO
                  </span>
                </div>
              </motion.div>

              {/* Main heading */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="space-y-3"
              >
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                  Hello, I'm{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">
                    Annick NIYUBAHWE
                  </span>
                </h1>

                <div className="h-14 flex items-center">
                  <span className="text-2xl md:text-3xl font-medium text-indigo-200">
                    <span className="inline-block mr-2">I'm a</span>
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400 border-r-2 border-indigo-400 pr-1">
                      {displayedText}
                    </span>
                  </span>
                </div>

                <p className="text-lg text-slate-300 max-w-xl leading-relaxed">
                  Turning complex challenges into innovative solutions in
                  cybersecurity and software development, with a passion for
                  creating secure and elegant applications.
                </p>
              </motion.div>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="flex flex-wrap gap-4 pt-4"
              >
                <a href="#Contact">
                  <button className="px-8 py-3 rounded-lg bg-gradient-to-r from-indigo-500 to-cyan-500 text-white font-medium transition-all duration-300 hover:shadow-lg hover:shadow-indigo-500/25 hover:-translate-y-1">
                    Contact Me
                  </button>
                </a>
                <a href="#Projects">
                  <button className="px-8 py-3 rounded-lg border border-slate-700 text-slate-200 font-medium transition-all duration-300 hover:bg-slate-800 hover:-translate-y-1">
                    View Projects
                  </button>
                </a>
              </motion.div>

              {/* Social Links */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 1 }}
                className="flex gap-4 pt-6"
              >
                {[
                  { Icon: FaGithub, link: "https://github.com/annick975" },
                  {
                    Icon: FaLinkedinIn,
                    link: "https://www.linkedin.com/in/annick-niyubahwe-04898932a/",
                  },
                  {
                    Icon: FaInstagram,
                    link: "https://instagram.com/n_tannick975",
                  },
                ].map((social, index) => (
                  <a
                    key={index}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full flex items-center justify-center border border-slate-700 text-slate-300 transition-all duration-300 hover:bg-indigo-500/20 hover:border-indigo-500/50 hover:text-white"
                  >
                    <social.Icon className="w-4 h-4" />
                  </a>
                ))}
              </motion.div>
            </div>

            {/* Right column - Skills & Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex-1 w-full max-w-md"
            >
              <div className="relative p-6 md:p-8 bg-slate-900/70 backdrop-blur-lg rounded-2xl border border-slate-800 shadow-xl">
                {/* Gradient border effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-indigo-500/20 to-cyan-500/20 blur opacity-50 -z-10" />

                {/* Skills */}
                <div className="space-y-6">
                  <h3 className="text-xl font-semibold text-white">
                    Technical Skills
                  </h3>

                  {/* Tabs */}
                  <div className="flex space-x-1 border-b border-slate-800">
                    {skillCategories.map((category, index) => (
                      <button
                        key={index}
                        onClick={() => setActiveTab(index)}
                        className={`relative py-2 px-4 text-sm font-medium transition-colors duration-300 ${
                          activeTab === index
                            ? "text-indigo-400"
                            : "text-slate-400 hover:text-white"
                        }`}
                      >
                        {category.category}
                        {activeTab === index && (
                          <motion.div
                            layoutId="activeTabIndicator"
                            className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-indigo-500 to-cyan-500"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.3 }}
                          />
                        )}
                      </button>
                    ))}
                  </div>

                  {/* Skills Content */}
                  <div className="space-y-3 min-h-[280px]">
                    {skillCategories.map((category, categoryIndex) => (
                      <div
                        key={categoryIndex}
                        className={`${
                          activeTab === categoryIndex ? "block" : "hidden"
                        }`}
                      >
                        <div className="grid grid-cols-1 gap-3">
                          {category.skills.map((skill, skillIndex) => (
                            <motion.div
                              key={skillIndex}
                              initial={{ opacity: 0, y: 10 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ delay: skillIndex * 0.1 }}
                              className="group flex items-center justify-between p-3 rounded-lg bg-slate-800/50 hover:bg-slate-800 border border-slate-700 hover:border-indigo-500/30 transition-all duration-300"
                            >
                              <div className="flex items-center space-x-3">
                                <span className="text-indigo-400 group-hover:text-indigo-300 transition-colors duration-300">
                                  {skill.icon}
                                </span>
                                <span className="text-slate-300 group-hover:text-white transition-colors duration-300">
                                  {skill.name}
                                </span>
                              </div>
                              {skill.level && (
                                <div className="flex items-center">
                                  <div className="w-20 h-1.5 bg-slate-700 rounded-full overflow-hidden">
                                    <div
                                      className="h-full bg-gradient-to-r from-indigo-500 to-cyan-500 rounded-full"
                                      style={{ width: `${skill.level}%` }}
                                    />
                                  </div>
                                  <span className="text-xs text-slate-400 ml-2">
                                    {skill.level}%
                                  </span>
                                </div>
                              )}
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Stats */}
                  <div className="pt-6 border-t border-slate-800">
                    <div className="grid grid-cols-3 gap-4">
                      {[
                        { label: "Projects", value: "20+" },
                        { label: "Experience", value: "5+ Years" },
                        { label: "Clients", value: "15+" },
                      ].map((stat) => (
                        <div key={stat.label} className="text-center">
                          <h4 className="text-2xl font-bold text-white">
                            {stat.value}
                          </h4>
                          <p className="text-sm text-slate-400">{stat.label}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
        <span className="text-xs text-slate-500 mb-2">Scroll Down</span>
        <div className="w-5 h-10 rounded-full border border-slate-700 flex items-center justify-center">
          <div className="w-1.5 h-1.5 bg-indigo-400 rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
}
