"use client";

import React, { createContext, useContext, useState } from "react";
import ChatButton from "./ChatButton";
import ChatWindow from "./ChatWindow";
import { useChatStore } from "@/store/chatStore";

interface ChatContextType {
  isOpen: boolean;
  toggleChat: () => void;
}

const ChatContext = createContext<ChatContextType | undefined>(undefined);

export const useChat = () => {
  const context = useContext(ChatContext);
  if (!context) {
    throw new Error("useChat must be used within a ChatProvider");
  }
  return context;
};

export function ChatProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const clearMessages = useChatStore((state) => state.clearMessages);

  const toggleChat = () => {
    if (!isOpen) {
      clearMessages();
    }
    setIsOpen(!isOpen);
  };

  return (
    <ChatContext.Provider value={{ isOpen, toggleChat }}>
      {children}
      <ChatButton onClick={toggleChat} isOpen={isOpen} />
      <ChatWindow isOpen={isOpen} onClose={toggleChat} />
    </ChatContext.Provider>
  );
}
