"use client";

import React from "react";
import { ChatMessage as MessageType } from "@/store/chatStore";
import { FaUser } from "react-icons/fa";
import { RiRobot2Fill } from "react-icons/ri";
import { motion } from "framer-motion";

interface ChatMessageProps {
  message: MessageType;
}

export default function ChatMessage({ message }: ChatMessageProps) {
  const isUser = message.role === "user";

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className={`flex ${isUser ? "justify-end" : "justify-start"} mb-4`}
    >
      <div
        className={`flex max-w-[80%] ${
          isUser ? "flex-row-reverse" : "flex-row"
        }`}
      >
        {/* Avatar */}
        <div
          className={`flex-shrink-0 h-8 w-8 rounded-full flex items-center justify-center ${
            isUser
              ? "bg-gradient-to-r from-indigo-500 to-cyan-500 ml-2"
              : "bg-gradient-to-r from-slate-700 to-slate-800 border border-slate-600 mr-2"
          }`}
        >
          {isUser ? (
            <FaUser className="text-white text-sm" />
          ) : (
            <RiRobot2Fill className="text-indigo-300 text-sm" />
          )}
        </div>

        {/* Message Bubble */}
        <div
          className={`p-3 rounded-2xl ${
            isUser
              ? "bg-gradient-to-r from-indigo-500 to-cyan-500 text-white rounded-tr-none"
              : "bg-slate-800/70 border border-slate-700 text-slate-200 rounded-tl-none"
          }`}
        >
          <div className="text-sm whitespace-pre-wrap">{message.content}</div>
          <div
            className={`text-xs mt-1 text-right ${
              isUser ? "text-indigo-100" : "text-slate-400"
            }`}
          >
            {new Date(message.timestamp || Date.now()).toLocaleTimeString([], {
              hour: "2-digit",
              minute: "2-digit",
            })}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
