import MyAppBar from "../../components/layout/AppBar";
import ChatIcon from '../../assets/ChatIcon.png';
import { BiSearchAlt } from "react-icons/bi";
import MessageList from "../../components/Messenger/MessageList";
import SideBar from "../../components/layout/SideBar";
import getUser from "../../components/Messenger/getUser";
import GroupChatButton from "../../components/Messenger/GroupChatButton";
import MessageBody from "../../components/Messenger/MessageBody";
import MessageForm from "../../components/Messenger/MessageForm";
import { useEffect, useState } from "react";


function MessageHome() {

    const users = getUser();
    const [messages, setMessages] = useState<string[]>([]);

    // Function to handle sending a new message
    const handleSendMessage = (newMessage: string) => {
        setMessages((prevMessages) => [...prevMessages, newMessage]);
    };

    return (
        <div className="w-screen h-screen overflow-hidden bg-white">
            <div className="w-full">
                <MyAppBar />
            </div>
            <main className="flex w-screen h-full">
                <SideBar />
                {/* Recent Chats */}
                <div className="bg-gray-100 w-[256px] h-full rounded-lg justify-center p-[16px] pt-[16px] space-y-1 relative">
                    <div className="flex items-center pb-1">
                        <img
                            src={ChatIcon}
                            className="w-10 h-10 mr-2"
                        />
                        <h1 className="text-[#171a1f] text-2xl font-semibold"> Recent Chats</h1>
                    </div>
                    {/* Searchbar */}
                    <div className="relative h-[35px]">
                        <input
                            type="text"
                            placeholder="Search ..."
                            className="h-[35px] w-[223px] pl-8 pr-4 py-1 text-sm rounded-lg border border-gray-300 focus:outline-none focus:border-gray-400 text-[#bcc1ca] font-light"
                        />
                        <BiSearchAlt className="absolute left-3 top-1/2 transform -translate-y-1/2 text-black" />
                    </div>
                    {/* MessageList */}
                    <div className="space-y-0 pt-4">
                        {users.map((item, index) => (
                            <MessageList
                                key={index}
                                title={item.title}
                                numUnread={item.numUnread}
                                icon={item.icon}
                                numUsers={item.numUsers}
                            />
                        ))}
                    </div>
                    <div className="absolute right-4 bottom-[80px]">
                        <GroupChatButton />
                    </div>
                </div>
                <div className="relative w-full mb-[50px] justify-center items-center">
                    <div className="h-full">
                        <MessageBody />
                    </div>
                    <div className="w-full absolute items-center justify-center bottom-5 flex px-[38px]">
                        <MessageForm onSend={handleSendMessage} />
                    </div>
                </div>
            </main >
        </div >
    );
}

export default MessageHome;
