import { useEffect, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { Chat } from "../models/Chat";

const useGetChats = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [chats, setChats] = useState<Chat[]>([]);

  useEffect(() => {
    const getChats = async () => {
      setLoading(true);
      try {
        // Fetch conversations from the API
        const res = await axios.get<Chat[]>("/api/all");
        setChats(res.data);
      } catch (error: any) {
        const message = error.response?.data?.error || error.message || "An error occurred while fetching chats";
        toast.error(message);
      } finally {
        setLoading(false);
      }
    };

    getChats();
  }, []);

  return { loading, chats };
};

export default useGetChats;
