import { create } from "zustand";
import { StoreProps } from "../types";

export const useConversation = create<StoreProps>((set) => ({
  selectedConversation: null,
  setSelectedConversation: (selectedConversation) =>
    set({ selectedConversation }),
  messages: [],
  setMessages: (messages) => set({ messages }),
}));
