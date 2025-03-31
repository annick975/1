"use client";

import React, { useState, FormEvent } from "react";
import { useChatStore } from "@/store/chatStore";
import { FaPaperPlane } from "react-icons/fa";
import { motion } from "framer-motion";

export default function ChatInput() {
  const [input, setInput] = useState("");
  const { addMessage, setLoading, setError, getApiMessages, isLoading } =
    useChatStore();

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (!input.trim()) return;

    // Add user message to state
    const userMessage = input.trim();
    addMessage(userMessage, "user");
    setInput("");
    setLoading(true);

    try {
      // Get messages in the correct format for the API
      const allMessages = getApiMessages();

      // Send request to API
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ messages: allMessages }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || "Failed to get response");
      }

      const data = await response.json();

      if (!data.response) {
        throw new Error("Invalid response format from server");
      }

      // Add assistant response to state
      addMessage(data.response, "assistant");
      setError(null);
    } catch (error) {
      console.error("Error sending message:", error);
      setError(
        error instanceof Error
          ? error.message
          : "Failed to get a response. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex items-center space-x-2">
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Type your message..."
        className="flex-1 p-3 bg-slate-800/50 text-white border border-slate-700 rounded-lg focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 placeholder-slate-400"
        disabled={isLoading}
      />
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        type="submit"
        disabled={!input.trim() || isLoading}
        className="bg-gradient-to-r from-indigo-500 to-cyan-500 text-white p-3 rounded-lg hover:shadow-lg hover:shadow-indigo-500/25 focus:outline-none disabled:opacity-50 transition-all duration-300"
      >
        <FaPaperPlane className={isLoading ? "animate-pulse" : ""} />
      </motion.button>
    </form>
  );
}
