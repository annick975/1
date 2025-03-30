"use client";

import React from "react";
import { FaComments } from "react-icons/fa";

interface ChatButtonProps {
  onClick: () => void;
  isOpen: boolean;
}

const ChatButton: React.FC<ChatButtonProps> = ({ onClick, isOpen }) => {
  return (
    <button
      onClick={onClick}
      className={`fixed bottom-6 right-6 p-4 rounded-full shadow-lg transition-all duration-300 ${
        isOpen ? "bg-red-500 hover:bg-red-600" : "bg-blue-500 hover:bg-blue-600"
      } text-white z-50`}
      aria-label={isOpen ? "Close chat" : "Open chat"}
    >
      <FaComments className="w-6 h-6" />
    </button>
  );
};

export default ChatButton;
