import React, { useState, FormEvent } from "react";
import { useChatStore } from "@/store/chatStore";
import { FaPaperPlane } from "react-icons/fa";

const ChatInput: React.FC = () => {
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
        className="flex-1 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        disabled={isLoading}
      />
      <button
        type="submit"
        disabled={!input.trim() || isLoading}
        className="bg-blue-500 text-white p-3 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-700 disabled:opacity-50 transition-colors"
      >
        <FaPaperPlane />
      </button>
    </form>
  );
};

export default ChatInput;
