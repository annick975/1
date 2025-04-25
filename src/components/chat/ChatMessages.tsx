"use client";

import React, { useRef, useEffect } from "react";
import { useChatStore } from "@/store/chatStore";
import { motion } from "framer-motion";
import { FaUser } from "react-icons/fa";
import { RiRobot2Fill } from "react-icons/ri";

// Function to parse and format text with links and basic markdown
const renderFormattedText = (text: string) => {
  // Process markdown-style links first: [text](url)
  const markdownLinkRegex = /\[([^\]]+)\]\(([^)]+)\)/g;
  let processedText = text;
  const markdownLinks: {
    displayText: string;
    url: string;
    position: number;
  }[] = [];

  // Find all markdown-style links and collect their information
  let match;
  while ((match = markdownLinkRegex.exec(text)) !== null) {
    markdownLinks.push({
      displayText: match[1],
      url: match[2],
      position: match.index,
    });
  }

  // Replace markdown links with placeholders to avoid conflicts with other regex
  let placeholderIdx = 0;
  for (const link of markdownLinks) {
    const placeholder = `__LINK_PLACEHOLDER_${placeholderIdx++}__`;
    processedText = processedText.replace(
      `[${link.displayText}](${link.url})`,
      placeholder
    );
  }

  // Split the text into paragraphs to process lists
  const paragraphs = processedText.split("\n\n");

  // Process each paragraph for different formatting elements
  const formattedParagraphs = paragraphs.map((paragraph, paragraphIndex) => {
    // Check if this is a bullet point list
    const listItems = paragraph.split("\n").filter((line) => line.trim());
    const isList = listItems.every(
      (item) => item.trim().startsWith("* ") || item.trim().startsWith("- ")
    );

    if (isList) {
      // Return a formatted unordered list
      return (
        <ul
          key={`p-${paragraphIndex}`}
          className="list-disc pl-5 space-y-1 mb-3"
        >
          {listItems.map((item, itemIndex) => {
            // Remove the bullet marker
            const itemContent = item.trim().replace(/^[*-]\s+/, "");
            // Process this list item content for formatting and links
            return (
              <li key={`li-${paragraphIndex}-${itemIndex}`}>
                {processTextFormatting(itemContent, markdownLinks)}
              </li>
            );
          })}
        </ul>
      );
    } else {
      // Process regular paragraph for formatting and links
      return (
        <p key={`p-${paragraphIndex}`} className="mb-3">
          {processTextFormatting(paragraph, markdownLinks)}
        </p>
      );
    }
  });

  return <>{formattedParagraphs}</>;
};

// Process text for formatting (bold, italic) and links
const processTextFormatting = (
  text: string,
  markdownLinks: { displayText: string; url: string; position: number }[]
) => {
  // Process regular URLs
  const urlRegex = /(https?:\/\/[^\s]+)/g;
  let parts = text.split(urlRegex);
  const urls = text.match(urlRegex) || [];

  // Process parts for placeholders, bold, and italic formatting
  let result: React.ReactNode[] = [];

  parts.forEach((part, i) => {
    if (part.includes("__LINK_PLACEHOLDER_")) {
      // Handle placeholders (markdown links)
      let segments = part.split(/(__LINK_PLACEHOLDER_\d+__)/);

      segments.forEach((segment) => {
        if (segment.startsWith("__LINK_PLACEHOLDER_")) {
          // Extract placeholder index
          const idx = parseInt(
            segment.match(/__LINK_PLACEHOLDER_(\d+)__/)?.[1] || "0"
          );
          const link = markdownLinks[idx];

          result.push(
            <a
              key={`md-${i}-${idx}`}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-cyan-400 hover:text-cyan-300 underline transition-colors"
            >
              {link.displayText}
            </a>
          );
        } else if (segment) {
          // Process bold and italic in text segments
          result.push(...processFormattingInText(segment, `text-${i}`));
        }
      });
    } else {
      // Process bold and italic in regular text
      result.push(...processFormattingInText(part, `text-${i}`));
    }

    // Add URL if exists
    if (urls[i]) {
      result.push(
        <a
          key={`url-${i}`}
          href={urls[i]}
          target="_blank"
          rel="noopener noreferrer"
          className="text-cyan-400 hover:text-cyan-300 underline transition-colors"
        >
          {urls[i]}
        </a>
      );
    }
  });

  return result;
};

// Process bold and italic formatting within text
const processFormattingInText = (text: string, keyPrefix: string) => {
  const result: React.ReactNode[] = [];

  // Process bold with ** or __
  const boldRegex = /(\*\*|__)(.*?)\1/g;
  let boldParts = text.split(boldRegex);
  let currentText = "";

  for (let i = 0; i < boldParts.length; i++) {
    if (i % 3 === 0) {
      // This is regular text or text after a bold section
      currentText += boldParts[i];
    } else if (i % 3 === 1) {
      // This is the bold marker (** or __), skip it
      continue;
    } else {
      // This is the bold content
      if (currentText) {
        // Process italic in the accumulated text before the bold
        result.push(
          ...processItalicInText(currentText, `${keyPrefix}-regular-${i}`)
        );
        currentText = "";
      }
      // Add the bold text
      result.push(
        <strong key={`${keyPrefix}-bold-${i}`}>
          {processItalicInText(boldParts[i], `${keyPrefix}-bold-italic-${i}`)}
        </strong>
      );
    }
  }

  // Process any remaining text
  if (currentText) {
    result.push(...processItalicInText(currentText, `${keyPrefix}-remaining`));
  }

  return result;
};

// Process italic formatting within text
const processItalicInText = (text: string, keyPrefix: string) => {
  if (!text) return [text];

  const result: React.ReactNode[] = [];
  // Process italic with * or _
  const italicRegex = /(\*|_)(.*?)\1/g;
  let italicParts = text.split(italicRegex);

  let currentText = "";
  for (let i = 0; i < italicParts.length; i++) {
    if (i % 3 === 0) {
      // Regular text
      currentText += italicParts[i];
    } else if (i % 3 === 1) {
      // Italic marker (* or _), skip it
      continue;
    } else {
      // Italic content
      if (currentText) {
        result.push(currentText);
        currentText = "";
      }
      result.push(<em key={`${keyPrefix}-italic-${i}`}>{italicParts[i]}</em>);
    }
  }

  // Add any remaining text
  if (currentText) {
    result.push(currentText);
  }

  return result;
};

export default function ChatMessages() {
  const { messages, error, isLoading } = useChatStore();
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToLatest = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  // Scroll to bottom whenever messages change or when loading state changes
  useEffect(() => {
    scrollToLatest();
  }, [messages, isLoading]);

  // Add event listener for immediate scrolling when a message is sent
  useEffect(() => {
    const handleMessageSent = () => {
      // Use setTimeout to ensure the DOM has updated
      setTimeout(scrollToLatest, 0);
    };

    window.addEventListener("chatMessageSent", handleMessageSent);

    return () => {
      window.removeEventListener("chatMessageSent", handleMessageSent);
    };
  }, []);

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
            <div className="text-sm leading-relaxed">
              {message.role === "assistant"
                ? renderFormattedText(message.content)
                : message.content}
            </div>
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

      {isLoading && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-start space-x-3"
        >
          <div className="w-8 h-8 rounded-full flex items-center justify-center bg-gradient-to-r from-slate-700 to-slate-800 text-indigo-300 border border-slate-600">
            <RiRobot2Fill className="w-4.5 h-4.5" />
          </div>
          <div className="max-w-[80%] rounded-2xl p-3 bg-slate-800/70 text-slate-200 border border-slate-700">
            <div className="flex space-x-2">
              <motion.div
                animate={{ opacity: [0.4, 1, 0.4] }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="w-2 h-2 rounded-full bg-indigo-400"
              />
              <motion.div
                animate={{ opacity: [0.4, 1, 0.4] }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.2,
                }}
                className="w-2 h-2 rounded-full bg-indigo-400"
              />
              <motion.div
                animate={{ opacity: [0.4, 1, 0.4] }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.4,
                }}
                className="w-2 h-2 rounded-full bg-indigo-400"
              />
            </div>
          </div>
        </motion.div>
      )}

      {/* Add a div at the end that we can scroll to */}
      <div ref={messagesEndRef} />
    </div>
  );
}
