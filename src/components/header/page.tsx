"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { FaBars, FaTimes } from "react-icons/fa";
import { motion } from "framer-motion";

export default function Header() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("Home");
  const [isScrolled, setIsScrolled] = useState(false);

  const navItems = ["Home", "Projects", "Testimonials", "Contact"];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Update active section based on scroll position
      const sections = navItems.map((item) =>
        document.getElementById(item)?.getBoundingClientRect()
      );

      const current = sections.findIndex(
        (section) => section && section.top <= 100 && section.bottom >= 100
      );

      if (current !== -1) {
        setActiveSection(navItems[current]);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleNav = () => setIsNavOpen(!isNavOpen);
  const closeNav = () => setIsNavOpen(false);

  return (
    <header
      className={`fixed w-full top-0 z-50 font-sans transition-all duration-300 ${
        isScrolled
          ? "bg-slate-900/90 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo Section */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center group"
          >
            <div className="relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-indigo-500 to-cyan-500 rounded-full blur opacity-50 group-hover:opacity-75 transition duration-300"></div>
              <div className="relative w-12 h-12 rounded-full bg-slate-900 flex items-center justify-center overflow-hidden">
                <span className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">
                  A
                </span>
              </div>
            </div>
            <span className="ml-3 text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">
              Annick
            </span>
          </motion.div>

          {/* Desktop Navigation */}
          <motion.nav
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="hidden md:flex items-center gap-1"
          >
            {navItems.map((item, index) => (
              <motion.a
                key={item}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.1 + index * 0.05 }}
                href={`#${item}`}
                onClick={closeNav}
                className={`relative px-4 py-2 text-lg font-medium transition-all duration-300 rounded-lg group hover:text-white ${
                  activeSection === item ? "text-white" : "text-slate-400"
                }`}
              >
                <span className="relative z-10">{item}</span>
                {activeSection === item && (
                  <motion.div
                    layoutId="activeSection"
                    className="absolute inset-0 bg-gradient-to-r from-indigo-500/20 to-cyan-500/20 rounded-lg -z-10"
                    transition={{ type: "spring", duration: 0.5 }}
                  />
                )}
                <div
                  className={`absolute inset-0 bg-gradient-to-r from-indigo-500/20 to-cyan-500/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10`}
                />
              </motion.a>
            ))}
          </motion.nav>

          {/* Mobile Menu Button */}
          <motion.button
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            onClick={toggleNav}
            className="md:hidden group relative p-2 transition-transform duration-300 hover:scale-110"
          >
            <div className="absolute -inset-0.5 bg-gradient-to-r from-indigo-500 to-cyan-500 rounded-lg blur opacity-0 group-hover:opacity-50 transition duration-300"></div>
            <div className="relative">
              {isNavOpen ? (
                <FaTimes size={24} className="text-white" />
              ) : (
                <FaBars size={24} className="text-white" />
              )}
            </div>
          </motion.button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden ${
            isNavOpen ? "max-h-screen pb-6" : "max-h-0"
          }`}
        >
          <nav className="flex flex-col gap-2 px-2">
            {navItems.map((item, index) => (
              <motion.a
                key={item}
                initial={{ opacity: 0, x: -10 }}
                animate={
                  isNavOpen ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }
                }
                transition={{ duration: 0.3, delay: 0.05 * index }}
                href={`#${item}`}
                onClick={closeNav}
                className={`relative px-4 py-3 text-lg font-medium rounded-lg transition-all duration-300 ${
                  activeSection === item
                    ? "text-white bg-gradient-to-r from-indigo-500/20 to-cyan-500/20"
                    : "text-slate-400 hover:text-white hover:bg-indigo-500/10"
                }`}
              >
                {item}
              </motion.a>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
}
