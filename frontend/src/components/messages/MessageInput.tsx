import { useState } from "react";
import { Send } from "lucide-react";
import useSendMessage from "../../hooks/MessageHooks/useSendMessage";

const MessageInput = () => {
	const [message, setMessage] = useState("");
	const { loading, sendMessage } = useSendMessage();

	const handleSubmit = async (e : React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		if (!message) return;
		await sendMessage(message);
		setMessage("");
	};

	return (
		<form className='px-4' onSubmit={handleSubmit}>
			<div className='w-full relative'>
				<input
					type='text'
					className="w-full py-[6px] pl-4 pr-12 mx-1 border border-gray-200 rounded-full focus:outline-none bg-gray-100 text-sm placeholder:text-[#bcc1ca]"
					placeholder='Type a message'
					value={message}
					onChange={(e) => setMessage(e.target.value)}
				/>
				<button type='submit' className='absolute inset-y-0 end-0 flex items-center pe-3'>
					{loading ? <div className='loading loading-spinner'></div> : <Send />}
				</button>
			</div>
		</form>
	);
};
export default MessageInput;