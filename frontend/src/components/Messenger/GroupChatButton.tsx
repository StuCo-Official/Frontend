import { IoMdAddCircleOutline } from 'react-icons/io';

const GroupChatButton = () => (
    <button className="w-[125px] h-[35px] pr-1 bg-[#4bb688] rounded-full border border-[#e4f4ed] flex justify-center items-center gap-1.5 text-white text-sm font-light">
        <IoMdAddCircleOutline className="scale-110" />
        Group Chat
    </button>
);

export default GroupChatButton;
