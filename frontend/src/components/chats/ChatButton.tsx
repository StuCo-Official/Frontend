import { Chat } from "../../models/Chat";
import { useSocketContext } from "../../context/SocketContext";
import useChat from "../../zustand/useChat";
import { useUserContext } from "../../context/UserContext";

interface ChatButtonProps {
	chat: Chat;
	lastIdx: boolean;
}

const ChatButton: React.FC<ChatButtonProps> = ({ chat, lastIdx }) => {
	const { selectedChat, setSelectedChat } = useChat();
	const { user } = useUserContext();

	const participant = chat?.participants.find(
		(p) => p._id !== user?._id
    );

	const isSelected = selectedChat?._id === chat?._id;
	const { isUserOnline } = useSocketContext();
	
	const isOnline = participant?._id ? isUserOnline(participant._id) : false;
	
    const fullName = participant
        ? `${participant.firstName} ${participant.lastName}`
        : "Unknown User";

	return (
		<>
			<div
				className={`flex gap-2 items-center hover:bg-[#7fb598] rounded p-2 py-1 cursor-pointer
				${isSelected ? "bg-[#7fb598]" : ""}
			`}
				onClick={() => setSelectedChat(chat)}
			>
				<div className={`avatar ${isOnline ? "online" : ""}`}>
					<div className='w-12 rounded-full'>
						<img src={participant?.profileImage ? participant?.profileImage : 'src/assets/DemoProfileImage.png'} alt='user avatar' />
					</div>
				</div>

				<div className='flex flex-col flex-1'>
					<div className='flex gap-3 justify-between'>
						<p className='font-bold text-black'>{fullName}</p>
					</div>
				</div>
			</div>

			{!lastIdx && <div className='divider my-0 py-0 h-1' />}
		</>
	);
};

export default ChatButton;