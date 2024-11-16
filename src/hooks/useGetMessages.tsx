import { useEffect, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { Message } from "../models/Message"; // Import your Message interface

interface SelectedConversation {
  _id: string; //id should belong to chat
  name?: string; // Optional, add other fields as needed
}

const useGetMessages = (selectedConversation: SelectedConversation | null) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [messages, setMessages] = useState<Message[]>([]);

  useEffect(() => {
    const getMessages = async () => {
      if (!selectedConversation?._id) return; // Exit if no conversation is selected

      setLoading(true);
      try {
        const res = await axios.get<Message[]>(`/api/messages/${selectedConversation._id}`);
        setMessages(res.data); // Update state with fetched messages
      } catch (error: any) {
        const errorMessage =
          error.response?.data?.error || error.message || "An error occurred while fetching messages.";
        toast.error(errorMessage);
      } finally {
        setLoading(false); // Ensure loading is reset
      }
    };

    getMessages();
  }, [selectedConversation?._id]);

  return { messages, loading };
};

export default useGetMessages;
