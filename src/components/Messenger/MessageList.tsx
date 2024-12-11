import { CiUser } from 'react-icons/ci';
import { PiUsersThree } from "react-icons/pi";


interface MessageListProps {
    title: string;
    numUnread: number;
    icon?: string;
    numUsers: number;
}

const MessageList: React.FC<MessageListProps> = ({ title, numUnread, icon, numUsers }) => {
    return (
        <div className="w-[224px] h-[48px] flex items-center px-3 rounded-sm bg-transparent hover:bg-[#e6f1eb] hover:text-[#7eb698] hover:font-bold">
            {numUsers > 2
                ? (<div className="w-9 min-w-9 h-9 mr-2 rounded-full bg-white items-center justify-center flex text-black"><PiUsersThree className='scale-110' /></div>)
                : (icon
                    ? (<div className="w-[36px] h-[36px] mr-2 rounded-full bg-white items-center justify-center flex text-black overflow-hidden"><img src={icon}/></div>)
                    : (<div className="w-[36px] h-[36px] mr-2 rounded-full items-center justify-center text-base font-normal flex bg-[#7eb698] text-white" ><CiUser /></div>)
                )}
            <h2 className="truncate overflow-hidden whitespace-nowrap flex-grow">{title}</h2>

            {numUnread > 0
                ?
                (<div className="bg-[#de3b41] rounded-full w-7 min-w-7 h-7 ml-auto flex items-center justify-center text-sm text-white">
                    {numUnread}
                </div>)
                : <div></div>
            }
        </div >
    );
};

export default MessageList;
