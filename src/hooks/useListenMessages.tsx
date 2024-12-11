import { useEffect, useState } from "react";
import { useSocketContext } from "../context/SocketContext";
import { Message } from "../models/Message"; // Import the existing Message interface

const useListenMessages = () => {
  const { socket } = useSocketContext();
  const [messages, setMessages] = useState<Message[]>([]);

  useEffect(() => {
    const handleNewMessage = (newMessage: Message) => {
      // Update messages state
      setMessages((prevMessages) => [...prevMessages, newMessage]);
    };

    // Listen for new messages
    socket?.on("newMessage", handleNewMessage);

    // Cleanup: Remove the event listener
    return () => {
      socket?.off("newMessage", handleNewMessage);
    };
  }, [socket]);

  return { messages, setMessages };
};

export default useListenMessages;
