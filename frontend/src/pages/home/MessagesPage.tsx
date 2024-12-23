import MyAppBar from "../../components/layout/AppBar";
import ChatIcon from '../../assets/ChatIcon.png';
import MessageContainer from "../../components/messages/MessageContainer";
import SideBar from "../../components/layout/SideBar";
import ChatBar from "../../components/chats/ChatBar";

const MessagesPage = () => {
	return (
		<div className="w-screen h-screen overflow-hidden bg-white">
            <div className="w-full fixed top-0 left-0 z-50">
                <MyAppBar />
            </div>
            <main className="flex w-screen h-full pt-[56px]">
                <SideBar />
                <div className="bg-gray-100 w-[256px] h-full rounded-lg justify-center space-y-1 relative">
					<div className="flex items-center pb-1 p-[16px] pt-[16px]">
                        <img
                            src={ChatIcon}
                            className="w-10 h-10 mr-2"
                        />
                        <h1 className="text-[#171a1f] text-2xl font-semibold">Chats</h1>
                    </div>
					<div>
						<ChatBar />
					</div>
                </div>
                <div className="relative w-full mb-[50px] justify-center items-center">
					<MessageContainer />
                </div>
            </main >
        </div >
	);
};

export default MessagesPage;