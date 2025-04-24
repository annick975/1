"use client";

import React, { useEffect, useRef } from "react";
import { FaTimes } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import ChatMessages from "./ChatMessages";
import ChatInput from "./ChatInput";

interface ChatWindowProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ChatWindow({ isOpen, onClose }: ChatWindowProps) {
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.9 }}
          transition={{ duration: 0.3 }}
          className="fixed bottom-24 right-6 w-96 h-[600px] rounded-2xl shadow-2xl flex flex-col z-50 overflow-hidden"
        >
          {/* Backdrop gradient and blur effect */}
          <div className="absolute inset-0 bg-slate-900/90 backdrop-blur-md border border-slate-700"></div>

          <div className="relative flex flex-col h-full z-10">
            {/* Header */}
            <div className="flex items-center justify-between p-4 border border-slate-700">
              <div className="flex items-center gap-3">
                <div className="relative w-10 h-10 rounded-full bg-gradient-to-r from-indigo-500 to-cyan-500 flex items-center justify-center">
                  <span className="text-lg font-bold text-white">A</span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white">
                    Chat with AnnickAI
                  </h3>
                  <div className="flex items-center">
                    <div className="w-2 h-2 rounded-full bg-green-500 mr-2"></div>
                    <span className="text-xs text-green-400">Online now</span>
                  </div>
                </div>
              </div>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={onClose}
                className="text-slate-400 hover:text-white transition-colors p-2"
                aria-label="Close chat"
              >
                <FaTimes />
              </motion.button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 scrollbar-thin scrollbar-thumb-slate-700 scrollbar-track-transparent">
              <ChatMessages />
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="p-4 border-t border-slate-700">
              <ChatInput />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
