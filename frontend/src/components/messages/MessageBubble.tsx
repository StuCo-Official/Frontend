import { useUserContext } from "../../context/UserContext";
import { extractTime } from "../../utils/extractTime";
import useChat from "../../zustand/useChat";
import { Message } from "../../models/Message";

interface MessageBubbleProps {
	message: Message;
}

const MessageBubble: React.FC<MessageBubbleProps> = ({ message }) => {
	const { user } = useUserContext();
	const { selectedChat } = useChat();
	const fromMe = message.senderId === user?._id;
	const formattedTime = extractTime(message.createdAt);
	const chatClassName = fromMe ? "chat-end" : "chat-start";

	const senderProfile = selectedChat?.participants.find(
		(participant) => participant._id === message.senderId
	);
	const profilePic = fromMe ? user?.profileImage : senderProfile?.profileImage;
	
	const bubbleBgColor = fromMe ? "bg-[#7fb598]" : "bg-gray-400";

	return (
		<div className={`chat ${chatClassName}`}>
			<div className='chat-image avatar'>
				<div className='w-10 rounded-full'>
					<img alt='Tailwind CSS chat bubble component' src={profilePic ? profilePic : 'src/assets/DemoProfileImage.png'} />
				</div>
			</div>
			<div className={`chat-bubble text-white ${bubbleBgColor} pb-2`}>{message.message}</div>
			<div className='chat-footer opacity-50 text-xs flex gap-1 items-center'>{formattedTime}</div>
		</div>
	);
};

export default MessageBubble;