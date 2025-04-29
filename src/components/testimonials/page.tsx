"use client";

import { motion } from "framer-motion";
import { FaQuoteLeft } from "react-icons/fa";
import { FaUserCircle } from "react-icons/fa";

interface Testimonial {
  name: string;
  company: string;
  avatarColor: string;
  testimonial: string;
}

const testimonialsData: Testimonial[] = [
  {
    name: "Danielle Skies",
    company: "Cybersecurity Director at Internet Society",
    avatarColor: "from-indigo-400 to-blue-500",
    testimonial:
      "Annick has shown a strong understanding of cybersecurity concepts and effectively applies them to real-world situations. She excels in problem-solving and teamwork, demonstrating professionalism that sets a positive example for her peers. I am confident she will continue to thrive in her cybersecurity career.",
  },
  {
    name: "Rogers BALINDA",
    company: "Backend Developer at KaCyber Technologies",
    avatarColor: "from-cyan-400 to-teal-500",
    testimonial:
      "Working with Annick was a fantastic experience. She is an excellent collaborator who brings positive energy and innovative ideas. Her problem-solving skills were invaluable during challenges, and her clear communication kept our team on track. Annick's dedication and technical expertise significantly contributed to the project's success. I look forward to collaborating with her again.",
  },
  {
    name: "Mary NJERI ACHIENG",
    company: "Frontend developer at M-Kopa Ltd.",
    avatarColor: "from-purple-400 to-indigo-500",
    testimonial:
      "I had the pleasure of working with Annick on a full-stack application, and the results were very impressive! She thoroughly understood our needs and delivered a high-quality product that exceeded our expectations. Annick communicated excellently, always responsive and clear about the project's progress. Her professionalism and ability to meet deadlines make her a highly recommended developer!",
  },
];

export default function Testimonials() {
  return (
    <section
      id="Testimonials"
      className="py-24 bg-gradient-to-b from-slate-950 to-slate-900 font-sans"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">
              Testimonials
            </span>
          </h2>

          <div className="mt-4 w-24 h-1 bg-gradient-to-r from-indigo-500 to-cyan-500 mx-auto rounded-full" />
          <h2 className="text-slate-300 mb-12 max-w-2xl mx-auto">
            Want to know how working with me feels?
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonialsData.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
              className="group relative"
            >
              {/* Card background with subtle animation */}
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 to-cyan-500/10 rounded-2xl transform rotate-1 group-hover:rotate-2 transition-transform duration-300 opacity-0 group-hover:opacity-100" />

              <div className="relative bg-slate-900/80 backdrop-blur-sm p-8 rounded-2xl shadow-xl border border-slate-800 hover:border-indigo-500/30 transition-all duration-300 h-full flex flex-col">
                {/* Quote icon */}
                <div className="absolute top-4 right-4 text-indigo-500/20 group-hover:text-indigo-500/40 transition-colors duration-300">
                  <FaQuoteLeft className="w-8 h-8" />
                </div>

                {/* Profile section */}
                <div className="flex items-center mb-6">
                  <div className="relative w-16 h-16 rounded-full">
                    <div className="w-16 h-16 rounded-full flex items-center justify-center overflow-hidden bg-gradient-to-br ring-2 ring-slate-700 group-hover:ring-indigo-500/30 transition-all duration-300">
                      <div
                        className={`absolute rounded-full inset-0 bg-gradient-to-br ${testimonial.avatarColor} opacity-20 group-hover:opacity-30 transition-opacity duration-300`}
                      ></div>
                      <FaUserCircle className="w-12 h-12 text-white/70" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-indigo-400 text-lg font-semibold group-hover:text-indigo-300 transition-colors duration-300">
                      {testimonial.name}
                    </h4>
                    <p className="text-slate-400 text-sm italic">
                      {testimonial.company}
                    </p>
                  </div>
                </div>

                {/* Testimonial text */}
                <div className="relative flex-grow">
                  <p className="text-slate-400 leading-relaxed text-base group-hover:text-slate-300 transition-colors duration-300">
                    {testimonial.testimonial}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
