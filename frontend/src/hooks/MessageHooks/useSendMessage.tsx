import { useState } from "react";
import axios, { AxiosError } from "axios";
import toast from "react-hot-toast";
import { Message } from "../../models/Message";
import useChat from "../../zustand/useChat";
import { useUserContext } from "../../context/UserContext";
import { findParticipantId } from "../../utils/findParticipantId";

const useSendMessage = () => {
	const [loading, setLoading] = useState(false);
	const { messages, setMessages, selectedChat } = useChat();
  const { user } = useUserContext();

	const sendMessage = async (message : string) => {
		setLoading(true);
		try {
      const participantId = findParticipantId(selectedChat, user?._id); 

      if (!participantId) {
        toast.error("No valid participant found.");
        return;
      }

			const { data } = await axios.post<Message>(
        `/api/messages/send/${participantId}`,
        { message }
      );

			setMessages([...messages, data]);
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

	return { sendMessage, loading };
};

export default useSendMessage;
