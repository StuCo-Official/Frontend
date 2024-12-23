import { useEffect } from "react";
import useChat from "../../zustand/useChat";
import MessageInput from "./MessageInput";
import Messages from "./Messages";
import { TiMessages } from "react-icons/ti";
import { useUserContext } from "../../context/UserContext";

const MessageContainer = () => {
    const { user } = useUserContext();
	const { selectedChat, setSelectedChat } = useChat();
    
    const participant = selectedChat?.participants.find(
        (p) => p._id !== user?._id
    );

    const fullName = participant
        ? `${participant.firstName} ${participant.lastName}`
        : "Unknown User";

	useEffect(() => {
		// cleanup function (unmounts)
		return () => setSelectedChat(null);
	}, [setSelectedChat]);

	return (
		<div className='md:min-w-[450px] flex flex-col h-full'>
			{!selectedChat ? (
				<NoChatSelected />
			) : (
				<>
					{/* Header */}
					<div className='px-4 py-2 mb-2'>
						<span className='font-bold label-text'>To:</span>{" "}
						<span className='text-[#7fb598] font-bold'>{fullName}</span>
					</div>
					<Messages />
					<MessageInput />
				</>
			)}
		</div>
	);
};

export default MessageContainer;

const NoChatSelected = () => {
	return (
		<div className='flex items-center justify-center w-full h-full'>
			<div className='px-4 text-center sm:text-lg md:text-xl text-black font-semibold flex flex-col items-center gap-2'>
				<p>Select a chat to start messaging</p>
				<TiMessages className='text-3xl md:text-6xl text-center' />
			</div>
		</div>
	);
};