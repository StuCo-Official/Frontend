import { useEffect, useState } from "react";
import axios, { AxiosError } from "axios";
import toast from "react-hot-toast";
import { Message } from "../../models/Message";
import useChat from "../../zustand/useChat";
import { useUserContext } from "../../context/UserContext";
import { findParticipantId } from "../../utils/findParticipantId";

const useGetMessages = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const { messages, setMessages, selectedChat } = useChat();
  const { user } = useUserContext();

  useEffect(() => {
		const getMessages = async () => {
			setLoading(true);
			try {
        const participantId = findParticipantId(selectedChat, user?._id); 

        if (!participantId) {
          toast.error("No valid participant found.");
          return;
        }
        
				const { data } = await axios.get<Message[]>(`/api/messages/${participantId}`);
				setMessages(data);
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

		if (selectedChat?._id) getMessages();
	}, [selectedChat?._id, setMessages]);

	return { messages, loading };
};

export default useGetMessages;
