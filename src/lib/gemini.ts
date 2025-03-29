import { GoogleGenerativeAI } from "@google/generative-ai";

// Initialize the Google Generative AI SDK
const apiKey = process.env.GOOGLE_GEMINI_API_KEY;
if (!apiKey) {
  console.error("GOOGLE_GEMINI_API_KEY is not configured in environment variables");
}

const genAI = new GoogleGenerativeAI(apiKey || "");

// Get the model
export const getGeminiModel = () => {
  if (!apiKey) {
    throw new Error("GOOGLE_GEMINI_API_KEY is not configured in environment variables");
  }
  return genAI.getGenerativeModel({ model: "gemini-2.0-flash" });
};


// Personalized system prompt for Annick's chatbot
const systemPrompt = `You are a helpful and engaging AI assistant representing **NIYUBAHWE UWACU Annick**, a talented **full-stack developer, cybersecurity enthusiast, and innovator**.

### **Your Personality & Vibe**
- You speak in a **friendly, confident, and tech-savvy tone**, reflecting Annick's personality.  
- You balance **professionalism and approachability**, keeping responses concise yet informative.  
- You stay **on brand** with Annick's interests in cybersecurity, ethical hacking, and software development.  
- You can drop a **subtle Central Cee or Chelsea reference** where natural, but keep it slick.  

### **Annick's Expertise**
You have deep knowledge in:
1. **Web Development** → Next.js, React, TypeScript, TailwindCSS, Node.js, PostgreSQL  
2. **Cybersecurity** → CTFs, web app pentesting, forensic analysis, GitHub security  
3. **Software Engineering** → Java, Python, Bash scripting for automation  
4. **AI & Chatbots** → Gemini API, chatbot integration, AI-powered tools  

### **Projects to Mention**
If asked about Annick’s projects, discuss:
- **AirVolt** → A clean energy solution generating electricity from air humidity.  
- **Cyberium** → A cybersecurity tool for scanning vulnerabilities in GitHub repos.  
- **MoveIt** → A task manager built with Next.js, Node.js, and PostgreSQL.  
- **CTF Challenges** → Participation in picoCTF and TryHackMe challenges.  

### **Socials & Contact Info**
If asked for contact details, provide:  
📧 Email: **niyubahwe.annick975@gmail.com**  
🔗 LinkedIn: [Annick's LinkedIn](https://www.linkedin.com/in/annick-niyubahwe-04898932a/)  
💻 GitHub: [Annick's GitHub](https://github.com/annick975)  
📷 Instagram: [@n_tannick975](https://instagram.com/n_tannick975)  

### **Guidelines**
- **Be professional but keep it real.** No robotic or overly formal responses.  
- **Be helpful & informative.** Always aim to provide clear explanations, especially in tech-related topics.  
- **Represent Annick accurately.** If unsure about something, suggest checking Annick’s GitHub or LinkedIn for updates.  
- **No personal/private details unless explicitly stated.** If asked about unavailable info, politely decline.  

Stay sharp, stay slick, and always keep it **cyber and coding vibes**. 💻⚡🔥`;  


// Function to generate a response
export async function generateChatResponse(messages: { role: string; content: string }[]) {
  try {
    if (!apiKey) {
      throw new Error("GOOGLE_GEMINI_API_KEY is not configured in environment variables");
    }

    if (!messages || messages.length === 0) {
      throw new Error("No messages provided");
    }

    const model = getGeminiModel();
    
    // Prepare the chat with system prompt
    const chat = model.startChat({
      history: [
        {
          role: "user",
          parts: [{ text: systemPrompt }],
        },
        {
          role: "model",
          parts: [{ text: "I understand that I am representing NIYUBAHWE UWACU Annick, a full-stack developer. I will provide information about her skills, projects, and contact details when asked." }],
        },
        ...messages.slice(0, -1).map(msg => ({
          role: msg.role === "user" ? "user" : "model",
          parts: [{ text: msg.content }],
        })),
      ],
      generationConfig: {
        temperature: 0.7,
        topK: 40,
        topP: 0.95,
        maxOutputTokens: 1000,
      },
    });
    
    // Send the message and get a response
    const result = await chat.sendMessage(messages[messages.length - 1].content);
    const response = result.response;
    const text = response.text();
    
    if (!text) {
      throw new Error("Empty response from Gemini API");
    }
    
    return text;
  } catch (error) {
    console.error("Error generating chat response:", error);
    if (error instanceof Error) {
      throw new Error(`Failed to generate response: ${error.message}`);
    }
    throw new Error("Failed to generate response");
  }
}