import { useEffect, useState } from "react";
import { AxiosError } from "axios";
import toast from "react-hot-toast";
import { Chat } from "../../models/Chat";
import axiosInstance from "../../services/ApiService";

const useGetChats = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [chats, setChats] = useState<Chat[]>([]);

  useEffect(() => {
    const getChats = async () => {
      setLoading(true);
      try {
        const res = await axiosInstance.get<Chat[]>("/messages/get/all"); // gets all chats the user is a participant of
        setChats(res.data);
      } catch (error) {
        const errorMessage =
          error instanceof AxiosError
            ? error.response?.data?.error || "An unexpected error occurred"
            : "An unexpected error occurred";
        toast.error(errorMessage);
      } finally {
        setLoading(false);
      }
    };

    getChats();
  }, []);

  return { loading, chats };
};

export default useGetChats;
