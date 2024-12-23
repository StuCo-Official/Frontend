import Chats from "./Chats";
import SearchInput from "./SearchInput";

const ChatBar = () => {
	return (
		<div className='border-r border-slate-500 p-2 flex flex-col h-full'>
			<SearchInput />
			<div className='divider'></div>
			<div className="flex-grow overflow-y-auto">
				<Chats />
			</div>
		</div>
	);
};

export default ChatBar;