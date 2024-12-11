import React, { useState } from 'react';
import { FaRegPaperPlane } from "react-icons/fa6";
import { FiPlus } from "react-icons/fi";
import { IoImageOutline } from "react-icons/io5";
import { BsPaperclip } from "react-icons/bs";
import { HiEmojiHappy } from "react-icons/hi";




// Define the interface for the props, if any are needed
interface MessageFormProps {
    onSend: (message: string) => void; // Function prop for handling the send action
}

const MessageForm: React.FC<MessageFormProps> = ({ onSend }) => {
    const [message, setMessage] = useState<string>("");

    const handleSend = () => {
        if (message.trim()) {
            onSend(message);
            setMessage(""); // Clear the input after sending
        }
    };

    return (
        <div className="flex w-full h-full items-center p-2 border border-gray-100">
            <button className='rounded-full hover:bg-gray-200 p-2 mx-1'
                onClick={() => { }}
            >
                <FiPlus className='text-[#7eb698] scale-125' />
            </button>
            <button className='rounded-full hover:bg-gray-200 p-2 mx-1'
                onClick={() => { }}
            >
                <IoImageOutline className='text-[#7eb698] scale-125' />
            </button>
            <button className='rounded-full hover:bg-gray-200 p-2 mx-1'
                onClick={() => { }}
            >
                <BsPaperclip className='text-[#7eb698] scale-125' />
            </button>
            <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Type a message"
                className="w-full py-[6px] pl-4 pr-12 mx-1 border border-gray-200 rounded-full focus:outline-none bg-gray-100 text-sm placeholder:text-[#bcc1ca]"
            />
            <button className='absolute right-[105px] scale-125 text-[#7eb698]'>
                <HiEmojiHappy />
            </button>
            <button
                className='rounded-full hover:bg-gray-200 p-2 mx-1'
                onClick={handleSend}
            >
                <FaRegPaperPlane className='text-[#7eb698]' />
            </button>
        </div>
    );
};

export default MessageForm;
