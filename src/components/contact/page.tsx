"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { FaPhone, FaLocationDot, FaBusinessTime } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(formData);
  };

  return (
    <section
      id="Contact"
      className="bg-gradient-to-b from-slate-950 to-slate-900 py-24"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:space-x-12">
          {/* Form Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="w-full lg:w-2/3 mb-12 lg:mb-0"
          >
            <h2 className="text-4xl font-bold mb-2">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">
                Reach out!
              </span>
            </h2>
            <p className="text-slate-300 mb-8 text-lg">
              Feel free to send me a message
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="relative group">
                  <input
                    type="text"
                    required
                    value={formData.firstName}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-slate-900/50 border border-slate-700 focus:border-indigo-500/60 rounded-lg focus:outline-none transition-colors duration-300 text-white placeholder-transparent peer"
                    id="firstName"
                    placeholder="First Name"
                  />
                  <label
                    htmlFor="firstName"
                    className="absolute left-4 -top-6 text-sm text-slate-400 transition-all 
                    peer-placeholder-shown:text-base peer-placeholder-shown:text-slate-400 
                    peer-placeholder-shown:top-3 peer-focus:-top-6 peer-focus:text-sm peer-focus:text-indigo-400"
                  >
                    First Name
                  </label>
                </div>

                <div className="relative group">
                  <input
                    type="text"
                    required
                    value={formData.lastName}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-slate-900/50 border border-slate-700 focus:border-indigo-500/60 rounded-lg focus:outline-none transition-colors duration-300 text-white placeholder-transparent peer"
                    id="lastName"
                    placeholder="Last Name"
                  />
                  <label
                    htmlFor="lastName"
                    className="absolute left-4 -top-6 text-sm text-slate-400 transition-all 
                    peer-placeholder-shown:text-base peer-placeholder-shown:text-slate-400 
                    peer-placeholder-shown:top-3 peer-focus:-top-6 peer-focus:text-sm peer-focus:text-indigo-400"
                  >
                    Last Name
                  </label>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="relative group">
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-slate-900/50 border border-slate-700 focus:border-indigo-500/60 rounded-lg focus:outline-none transition-colors duration-300 text-white placeholder-transparent peer"
                    id="email"
                    placeholder="Email"
                  />
                  <label
                    htmlFor="email"
                    className="absolute left-4 -top-6 text-sm text-slate-400 transition-all 
                    peer-placeholder-shown:text-base peer-placeholder-shown:text-slate-400 
                    peer-placeholder-shown:top-3 peer-focus:-top-6 peer-focus:text-sm peer-focus:text-indigo-400"
                  >
                    Email
                  </label>
                </div>

                <div className="relative group">
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-slate-900/50 border border-slate-700 focus:border-indigo-500/60 rounded-lg focus:outline-none transition-colors duration-300 text-white placeholder-transparent peer"
                    id="phone"
                    placeholder="Phone"
                  />
                  <label
                    htmlFor="phone"
                    className="absolute left-4 -top-6 text-sm text-slate-400 transition-all 
                    peer-placeholder-shown:text-base peer-placeholder-shown:text-slate-400 
                    peer-placeholder-shown:top-3 peer-focus:-top-6 peer-focus:text-sm peer-focus:text-indigo-400"
                  >
                    Phone
                  </label>
                </div>
              </div>

              <div className="relative group">
                <textarea
                  required
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-slate-900/50 border border-slate-700 focus:border-indigo-500/60 rounded-lg focus:outline-none transition-colors duration-300 text-white placeholder-transparent peer"
                  id="message"
                  placeholder="Message"
                ></textarea>
                <label
                  htmlFor="message"
                  className="absolute left-4 -top-6 text-sm text-slate-400 transition-all 
                  peer-placeholder-shown:text-base peer-placeholder-shown:text-slate-400 
                  peer-placeholder-shown:top-3 peer-focus:-top-6 peer-focus:text-sm peer-focus:text-indigo-400"
                >
                  Message
                </label>
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full py-4 px-6 bg-gradient-to-r from-indigo-500 to-cyan-500 rounded-lg text-white font-semibold 
                transform hover:-translate-y-1 transition-all duration-300 hover:shadow-lg hover:shadow-indigo-500/30"
              >
                SEND MESSAGE
              </motion.button>
            </form>
          </motion.div>

          {/* Contact Info Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-full lg:w-1/3"
          >
            <div className="bg-slate-900/70 backdrop-blur-sm p-8 rounded-2xl border border-slate-800 shadow-xl">
              <h3 className="text-2xl font-bold text-indigo-300 mb-8">
                Contact Information
              </h3>

              <div className="space-y-6">
                <div className="flex items-center group">
                  <div className="w-12 h-12 rounded-full bg-indigo-500/10 flex items-center justify-center group-hover:bg-indigo-500/20 transition-colors duration-300">
                    <FaLocationDot className="text-indigo-400 text-xl" />
                  </div>
                  <div className="ml-4">
                    <p className="text-slate-400 group-hover:text-white transition-colors duration-300">
                      Kigali, Rwanda
                    </p>
                  </div>
                </div>

                <div className="flex items-center group">
                  <div className="w-12 h-12 rounded-full bg-indigo-500/10 flex items-center justify-center group-hover:bg-indigo-500/20 transition-colors duration-300">
                    <FaPhone className="text-indigo-400 text-xl" />
                  </div>
                  <div className="ml-4">
                    <p className="text-slate-400 group-hover:text-white transition-colors duration-300">
                      +250 788 999 619
                    </p>
                  </div>
                </div>

                <div className="flex items-center group">
                  <div className="w-12 h-12 rounded-full bg-indigo-500/10 flex items-center justify-center group-hover:bg-indigo-500/20 transition-colors duration-300">
                    <MdEmail className="text-indigo-400 text-xl" />
                  </div>
                  <div className="ml-4">
                    <p className="text-slate-400 group-hover:text-white transition-colors duration-300">
                      niyubahwe.annick975@gmail.com
                    </p>
                  </div>
                </div>

                <div className="flex items-center group">
                  <div className="w-12 h-12 rounded-full bg-indigo-500/10 flex items-center justify-center group-hover:bg-indigo-500/20 transition-colors duration-300">
                    <FaBusinessTime className="text-indigo-400 text-xl" />
                  </div>
                  <div className="ml-4">
                    <p className="text-slate-400 group-hover:text-white transition-colors duration-300">
                      Available anytime
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
