"use client";

import React, { useRef, useEffect } from "react";
import { useChatStore } from "@/store/chatStore";
import ChatMessage from "./ChatMessage";
import ChatInput from "./ChatInput";
import { motion } from "framer-motion";
import { RiRobot2Fill } from "react-icons/ri";

export default function ChatContainer() {
  const { messages, isLoading, error } = useChatStore();
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Auto-scroll to the latest message
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <div className="flex flex-col h-[600px] w-full max-w-2xl mx-auto overflow-hidden rounded-2xl shadow-2xl border border-slate-700">
      {/* Backdrop effect */}
      <div className="absolute inset-0 bg-slate-900/90 backdrop-blur-md"></div>

      <div className="relative z-10 flex flex-col h-full">
        {/* Chat Header */}
        <div className="bg-gradient-to-r from-indigo-600 to-cyan-600 p-4 text-white">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
              <RiRobot2Fill className="text-white text-xl" />
            </div>
            <div>
              <h2 className="text-xl font-bold">Portfolio Assistant</h2>
              <p className="text-sm opacity-80">
                Ask me anything about Annick's work
              </p>
            </div>
          </div>
        </div>

        {/* Messages Container */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-slate-900/50">
          {messages.length === 0 ? (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col items-center justify-center h-full text-center text-slate-400 p-6 space-y-4"
            >
              <div className="w-20 h-20 rounded-full bg-gradient-to-r from-indigo-500/20 to-cyan-500/20 flex items-center justify-center">
                <RiRobot2Fill className="w-10 h-10 text-indigo-400" />
              </div>
              <div>
                <h3 className="text-white text-lg font-medium mb-2">
                  How can I help you today?
                </h3>
                <p className="text-slate-400 text-sm">
                  Ask me about Annick's skills, experience, or projects.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-2 w-full max-w-xs mt-4">
                {[
                  "Tell me about your skills",
                  "What projects have you worked on?",
                  "What is your experience?",
                  "How can I contact you?",
                ].map((suggestion, i) => (
                  <motion.button
                    key={i}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 + i * 0.1 }}
                    className="text-xs p-2 rounded-lg bg-slate-800/80 border border-slate-700 text-slate-300 hover:border-indigo-500/50 hover:bg-slate-800 transition-colors"
                    onClick={() => {
                      useChatStore.getState().addMessage(suggestion, "user");
                    }}
                  >
                    {suggestion}
                  </motion.button>
                ))}
              </div>
            </motion.div>
          ) : (
            messages.map((message) => (
              <motion.div
                key={message.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                <ChatMessage message={message} />
              </motion.div>
            ))
          )}
          {isLoading && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="flex justify-start"
            >
              <div className="bg-slate-800/70 border border-slate-700 rounded-2xl p-4 max-w-[80%] flex items-center space-x-3">
                <div className="flex space-x-1">
                  <div className="w-2 h-2 bg-indigo-400 rounded-full animate-pulse" />
                  <div className="w-2 h-2 bg-indigo-400 rounded-full animate-pulse delay-150" />
                  <div className="w-2 h-2 bg-indigo-400 rounded-full animate-pulse delay-300" />
                </div>
                <span className="text-sm text-slate-400">Thinking...</span>
              </div>
            </motion.div>
          )}
          {error && (
            <div className="bg-red-900/20 border border-red-800/30 text-red-400 p-3 rounded-lg">
              <p className="text-sm">Error: {error}</p>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Chat Input */}
        <div className="border-t border-slate-700 p-4 bg-slate-900/70">
          <ChatInput />
        </div>
      </div>
    </div>
  );
}
