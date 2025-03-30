"use client";

import React from "react";
import { useChatStore } from "@/store/chatStore";
import { FaUser, FaRobot } from "react-icons/fa";

const ChatMessages: React.FC = () => {
  const { messages, error } = useChatStore();

  if (error) {
    return <div className="text-red-500 text-center p-4">{error}</div>;
  }

  if (messages.length === 0) {
    return (
      <div className="text-center text-gray-500 p-4">
        Start a conversation with Annick!
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {messages.map((message) => (
        <div
          key={message.id}
          className={`flex items-start space-x-3 ${
            message.role === "user" ? "flex-row-reverse space-x-reverse" : ""
          }`}
        >
          <div
            className={`w-8 h-8 rounded-full flex items-center justify-center ${
              message.role === "user"
                ? "bg-blue-500 text-white"
                : "bg-gray-200 text-gray-700"
            }`}
          >
            {message.role === "user" ? <FaUser /> : <FaRobot />}
          </div>
          <div
            className={`max-w-[80%] rounded-lg p-3 ${
              message.role === "user"
                ? "bg-blue-500 text-white"
                : "bg-gray-100 text-gray-800"
            }`}
          >
            {message.content}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ChatMessages;
