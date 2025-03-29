"use client";
import React from "react";
import ChatContainer from "@/components/chat/ChatContainer";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-8">
          My Portfolio Assistant
        </h1>
        <ChatContainer />
      </div>
    </main>
  );
}
