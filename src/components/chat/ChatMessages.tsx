"use client";

import React from "react";
import { useChatStore } from "@/store/chatStore";
import { motion } from "framer-motion";
import { FaUser } from "react-icons/fa";
import { RiRobot2Fill } from "react-icons/ri";

export default function ChatMessages() {
  const { messages, error } = useChatStore();

  if (error) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="text-red-400 text-center p-4 bg-red-500/10 rounded-lg border border-red-500/20"
      >
        {error}
      </motion.div>
    );
  }

  if (messages.length === 0) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col items-center justify-center space-y-4 h-full text-center text-slate-400 p-6"
      >
        <div className="w-16 h-16 rounded-full bg-gradient-to-r from-indigo-500/20 to-cyan-500/20 flex items-center justify-center">
          <RiRobot2Fill className="w-8 h-8 text-indigo-400" />
        </div>
        <div>
          <h3 className="text-white text-lg font-medium mb-1">
            Welcome to my Portfolio AI Chat!
          </h3>
          <p className="text-slate-400 text-sm">
            Ask me anything about Annick&apos;s skills, projects, if you want to
            know her more or how I can help you.
          </p>
        </div>
      </motion.div>
    );
  }

  return (
    <div className="space-y-6">
      {messages.map((message, index) => (
        <motion.div
          key={message.id}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: index * 0.1 }}
          className={`flex items-start space-x-3 ${
            message.role === "user" ? "flex-row-reverse space-x-reverse" : ""
          }`}
        >
          <div
            className={`w-8 h-8 rounded-full flex items-center justify-center ${
              message.role === "user"
                ? "bg-gradient-to-r from-indigo-500 to-cyan-500 text-white"
                : "bg-gradient-to-r from-slate-700 to-slate-800 text-indigo-300 border border-slate-600"
            }`}
          >
            {message.role === "user" ? (
              <FaUser className="w-3.5 h-3.5" />
            ) : (
              <RiRobot2Fill className="w-4.5 h-4.5" />
            )}
          </div>
          <div
            className={`max-w-[80%] rounded-2xl p-3 ${
              message.role === "user"
                ? "bg-gradient-to-r from-indigo-500 to-cyan-500 text-white"
                : "bg-slate-800/70 text-slate-200 border border-slate-700"
            }`}
          >
            <p className="text-sm leading-relaxed">{message.content}</p>
            <div
              className={`text-xs mt-1 opacity-70 text-right ${
                message.role === "user" ? "text-indigo-100" : "text-slate-400"
              }`}
            >
              {new Date(message.timestamp || Date.now()).toLocaleTimeString(
                [],
                {
                  hour: "2-digit",
                  minute: "2-digit",
                }
              )}
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
