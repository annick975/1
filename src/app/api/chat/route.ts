import { NextResponse } from "next/server";
import { generateChatResponse } from "@/lib/gemini";

export async function POST(request: Request) {
  try {
    const { messages } = await request.json();
    
    if (!messages || !Array.isArray(messages) || messages.length === 0) {
      return NextResponse.json(
        { error: "Invalid request: messages array is required" },
        { status: 400 }
      );
    }
    
    const response = await generateChatResponse(messages);
    
    return NextResponse.json({ response });
  } catch (error) {
    console.error("Error in chat API route:", error);
    
    // Check if it's an environment variable error
    if (error instanceof Error && error.message.includes("GOOGLE_GEMINI_API_KEY")) {
      return NextResponse.json(
        { error: "API key not configured. Please check your environment variables." },
        { status: 500 }
      );
    }
    
    // Return the actual error message if available
    return NextResponse.json(
      { error: error instanceof Error ? error.message : "An error occurred while processing your request" },
      { status: 500 }
    );
  }
}