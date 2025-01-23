import { useEffect } from "react";
import { useSocketContext } from "../../context/SocketContext";
import useChat from "../../zustand/useChat";

const useListenMessages = () => {
	const { socket } = useSocketContext();
	const { messages, setMessages } = useChat();

	useEffect(() => {
		socket?.on("newMessage", (newMessage) => {
			setMessages([...messages, newMessage]);
		});

		return () => {
      socket?.off("newMessage");
    }
	}, [socket, setMessages, messages]);
};

export default useListenMessages;