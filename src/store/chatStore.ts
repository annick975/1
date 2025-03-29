import { create } from "zustand";
import { persist } from "zustand/middleware";

export type MessageRole = "user" | "assistant" | "system";

export interface ChatMessage {
  id: string;
  content: string;
  role: MessageRole;
  timestamp: number;
}

interface ChatState {
  messages: ChatMessage[];
  isLoading: boolean;
  error: string | null;
  addMessage: (content: string, role: MessageRole) => void;
  setLoading: (loading: boolean) => void;
  setError: (error: string | null) => void;
  clearMessages: () => void;
  getApiMessages: () => { role: MessageRole; content: string }[];
}

export const useChatStore = create<ChatState>()(
  persist(
    (set, get) => ({
      messages: [],
      isLoading: false,
      error: null,
      addMessage: (content, role) =>
        set((state) => ({
          messages: [
            ...state.messages,
            {
              id: Math.random().toString(36).substring(2, 9),
              content,
              role,
              timestamp: Date.now(),
            },
          ],
        })),
      setLoading: (loading) => set({ isLoading: loading }),
      setError: (error) => set({ error }),
      clearMessages: () => set({ messages: [] }),
      getApiMessages: () => {
        const state = get();
        return state.messages.map(({ role, content }) => ({ role, content }));
      },
    }),
    {
      name: "chat-storage",
    }
  )
);