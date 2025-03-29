import React from "react";
import { ChatMessage as MessageType } from "@/store/chatStore";
import { FaUser, FaRobot } from "react-icons/fa";

interface ChatMessageProps {
  message: MessageType;
}

const ChatMessage: React.FC<ChatMessageProps> = ({ message }) => {
  const isUser = message.role === "user";

  return (
    <div className={`flex ${isUser ? "justify-end" : "justify-start"} mb-4`}>
      <div
        className={`flex max-w-[80%] ${
          isUser ? "flex-row-reverse" : "flex-row"
        }`}
      >
        {/* Avatar */}
        <div
          className={`flex-shrink-0 h-8 w-8 rounded-full flex items-center justify-center ${
            isUser ? "bg-blue-500 ml-2" : "bg-purple-600 mr-2"
          }`}
        >
          {isUser ? (
            <FaUser className="text-white text-sm" />
          ) : (
            <FaRobot className="text-white text-sm" />
          )}
        </div>

        {/* Message Bubble */}
        <div
          className={`p-3 rounded-lg ${
            isUser
              ? "bg-blue-500 text-white rounded-tr-none"
              : "bg-white border border-gray-200 rounded-tl-none"
          }`}
        >
          <div className="text-sm whitespace-pre-wrap">{message.content}</div>
          <div
            className={`text-xs mt-1 ${
              isUser ? "text-blue-100" : "text-gray-400"
            }`}
          >
            {new Date(message.timestamp).toLocaleTimeString([], {
              hour: "2-digit",
              minute: "2-digit",
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatMessage;
