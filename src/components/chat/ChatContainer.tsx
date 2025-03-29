import React, { useRef, useEffect } from "react";
import { useChatStore } from "@/store/chatStore";
import ChatMessage from "./ChatMessage";
import ChatInput from "./ChatInput";
import { motion } from "framer-motion";

const ChatContainer: React.FC = () => {
  const { messages, isLoading, error } = useChatStore();
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Auto-scroll to the latest message
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <div className="flex flex-col h-[600px] w-full max-w-2xl mx-auto bg-gray-50 rounded-lg shadow-md overflow-hidden">
      {/* Chat Header */}
      <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-4 text-white">
        <h2 className="text-xl font-bold">Portfolio Assistant</h2>
        <p className="text-sm opacity-80">
          Ask me anything about my work and experience
        </p>
      </div>

      {/* Messages Container */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.length === 0 ? (
          <div className="flex items-center justify-center h-full text-gray-400">
            <p>Start a conversation!</p>
          </div>
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
            <div className="bg-gray-200 rounded-lg p-3 max-w-[80%] flex items-center space-x-2">
              <div className="flex space-x-1">
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-pulse" />
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-pulse delay-150" />
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-pulse delay-300" />
              </div>
              <span className="text-sm text-gray-500">Thinking...</span>
            </div>
          </motion.div>
        )}
        {error && (
          <div className="bg-red-100 text-red-700 p-3 rounded-lg">
            <p className="text-sm">Error: {error}</p>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Chat Input */}
      <div className="border-t border-gray-200 p-4">
        <ChatInput />
      </div>
    </div>
  );
};

export default ChatContainer;
