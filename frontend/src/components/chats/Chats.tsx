import ChatButton from "./ChatButton";
import useGetChats from "../../hooks/MessageHooks/useGetChats";

const Chats = () => {
	const { loading, chats } = useGetChats();
	return (
		<div className='flex-grow overflow-y-auto py-1'>
			{chats.map((chat, idx) => (
				<ChatButton
					key={chat._id}
					chat={chat}
					lastIdx={idx === chats.length - 1}
				/>
			))}

			{loading ? <span className='loading loading-spinner mx-auto'></span> : null}
		</div>
	);
};
export default Chats;