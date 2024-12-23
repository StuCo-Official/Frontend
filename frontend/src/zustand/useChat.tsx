import { create } from 'zustand';
import { Chat } from '../models/Chat';
import { Message } from '../models/Message';

interface ChatState {
    selectedChat: Chat | null;
    setSelectedChat: (selectedChat: Chat | null) => void;
    messages: Message[];
    setMessages: (messages: Message[]) => void;
}

const useChat = create<ChatState>((set) => ({
    selectedChat: null,
    setSelectedChat: (selectedChat) => set({ selectedChat }),
    messages: [],
    setMessages: (messages) => set({ messages }),
}));

export default useChat;