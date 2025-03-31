"use client";

import React from "react";
import { FaComments } from "react-icons/fa";
import { motion } from "framer-motion";

interface ChatButtonProps {
  onClick: () => void;
  isOpen: boolean;
}

export default function ChatButton({ onClick, isOpen }: ChatButtonProps) {
  return (
    <motion.button
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      onClick={onClick}
      className={`fixed bottom-6 right-6 p-4 rounded-full shadow-lg transition-all duration-300 ${
        isOpen
          ? "bg-gradient-to-r from-red-500 to-pink-500"
          : "bg-gradient-to-r from-indigo-500 to-cyan-500"
      } text-white z-50`}
      aria-label={isOpen ? "Close chat" : "Open chat"}
    >
      <FaComments className="w-6 h-6" />
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="absolute -top-2 -right-2 w-5 h-5 bg-indigo-600 text-white text-xs rounded-full flex items-center justify-center"
      >
        AI
      </motion.span>
    </motion.button>
  );
}
