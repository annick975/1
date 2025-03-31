"use client";

import { motion } from "framer-motion";
import {
  Facebook,
  Linkedin,
  Mail,
  MessageCircle,
  Github,
  Instagram,
  Twitter,
  ExternalLink,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-slate-900 to-slate-950 text-white font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 py-16 border-b border-slate-800">
          {/* Logo and Description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <div className="flex items-center group">
              <div className="relative">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-indigo-500 to-cyan-500 rounded-full blur opacity-50 group-hover:opacity-75 transition duration-300"></div>
                <div className="relative w-12 h-12 rounded-full bg-slate-900 flex items-center justify-center overflow-hidden">
                  <span className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">
                    A
                  </span>
                </div>
              </div>
              <span className="text-3xl font-bold ml-3 text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">
                Annick
              </span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed">
              Passionate developer specializing in cybersecurity and full-stack
              development.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="space-y-6"
          >
            <h3 className="text-lg font-semibold relative inline-block">
              Quick Links
              <div className="absolute bottom-0 left-0 w-1/2 h-0.5 bg-gradient-to-r from-indigo-500 to-cyan-500"></div>
            </h3>
            <ul className="space-y-3">
              {[
                "Home",
               
                "Projects",
                "Testimonials",
                "Contact",
              ].map((item, index) => (
                <motion.li
                  key={item}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: 0.2 + index * 0.05 }}
                  className="transform hover:translate-x-2 transition-transform duration-300"
                >
                  <a
                    href={`#${item}`}
                    className="text-slate-400 hover:text-indigo-400 transition duration-300 flex items-center gap-2"
                  >
                    <span className="h-px w-4 bg-indigo-500/50"></span>
                    {item}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-6"
          >
            <h3 className="text-lg font-semibold relative inline-block">
              Services
              <div className="absolute bottom-0 left-0 w-1/2 h-0.5 bg-gradient-to-r from-indigo-500 to-cyan-500"></div>
            </h3>
            <ul className="space-y-3">
              {[
                "Cybersecurity",
                "Backend Development",
                "Frontend Development",
              ].map((service, index) => (
                <motion.li
                  key={service}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: 0.3 + index * 0.05 }}
                  className="text-slate-400 flex items-center gap-2 group"
                >
                  <span className="h-px w-4 bg-indigo-500/50 group-hover:w-6 transition-all duration-300"></span>
                  {service}
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Currently Working At */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="space-y-6"
          >
            <h3 className="text-lg font-semibold relative inline-block">
              Currently Working At
              <div className="absolute bottom-0 left-0 w-1/2 h-0.5 bg-gradient-to-r from-indigo-500 to-cyan-500"></div>
            </h3>
            <a
              href="https://www.hepo.rw/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-slate-400 hover:text-indigo-400 transition duration-300 group px-2"
            >
              HEPO
              <ExternalLink className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>
        </div>

        {/* Social Icons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="py-12"
        >
          <div className="flex flex-wrap justify-center gap-6 md:gap-8">
            {[
              {
                icon: Mail,
                href: "mailto:niyubahwe.annick975@gmail.com",
                label: "Email",
              },
              {
                icon: Facebook,
                href: "https://www.facebook.com/",
                label: "Facebook",
              },
              {
                icon: Linkedin,
                href: "https://www.linkedin.com/in/annick-niyubahwe-04898932a/",
                label: "LinkedIn",
              },
              {
                icon: MessageCircle,
                href: "https://discord.gg/4RNQ8QtQ",
                label: "Discord",
              },
              {
                icon: Github,
                href: "https://github.com/annick975",
                label: "GitHub",
              },
              {
                icon: Instagram,
                href: "https://www.instagram.com/n_tannick975/",
                label: "Instagram",
              },
              { icon: Twitter, href: "https://x.com/", label: "Twitter" },
            ].map((social, index) => (
              <motion.a
                key={index}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.5 + index * 0.05 }}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative"
              >
                <div className="absolute -inset-2 bg-gradient-to-r from-indigo-500 to-cyan-500 rounded-full opacity-0 group-hover:opacity-20 transition duration-300 blur"></div>
                <div className="w-10 h-10 rounded-full flex items-center justify-center bg-slate-800/50 border border-slate-700 group-hover:border-indigo-500/50 transition-all duration-300">
                  <social.icon className="w-5 h-5 text-slate-400 group-hover:text-indigo-400 transition-colors duration-300" />
                </div>
                <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-xs text-slate-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                  {social.label}
                </span>
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* Footer Bottom */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-center py-8 text-slate-400 text-sm border-t border-slate-800 space-y-2"
        >
          <p>&copy; {new Date().getFullYear()} Annick. All rights reserved.</p>
          <p className="flex items-center justify-center gap-2">
            Made with <span className="text-red-500 animate-pulse">❤</span> by
            Annick
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
