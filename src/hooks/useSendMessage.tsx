import { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { Message } from "../models/Message"; // Import the Message interface

const useSendMessage = (conversationId: string | null) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [messages, setMessages] = useState<Message[]>([]);

  const sendMessage = async (message: string): Promise<void> => {
    if (!conversationId) {
      toast.error("No conversation selected.");
      return;
    }

    setLoading(true);
    try {
      const { data: newMessage } = await axios.post<Message>(
        `/api/messages/send/${conversationId}`,
        { message }
      );

      setMessages((prevMessages) => [...prevMessages, newMessage]);
    } catch (error: any) {
      const errorMessage =
        error.response?.data?.error || error.message || "An error occurred while sending the message.";
      toast.error(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  return { sendMessage, loading, messages, setMessages };
};

export default useSendMessage;
