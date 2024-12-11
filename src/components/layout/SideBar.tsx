import React from 'react';
import { IoPaperPlane } from "react-icons/io5";
import { BiSolidContact } from "react-icons/bi";
import { FaPeopleGroup } from "react-icons/fa6";
import DemoProfileImage from '../../assets/DemoProfileImage.png';
import { IoSettingsOutline } from "react-icons/io5";


const SideBar: React.FC = () => {
    const numUnreadMsg = 9

    return (
        <div className="bg-[#7fb598] w-[214px] h-full rounded-lg justify-center p-[12px] pt-[16px] space-y-1">
            <button
                className="w-[190px] h-[46px] flex items-center bg-transparent 
                        hover:bg-[#e4f3ec] hover:text-[#7eb698]
                        rounded-lg  text-base font-normal text-white"
            >
                <IoPaperPlane className=" w-[23px] h-[23px] ml-[15px] mr-[10px]" />
                Messages
                <div className="bg-[#de3b41] rounded-full w-[28px] h-[28px] ml-[20px] flex items-center justify-center text-sm text-white">
                    {numUnreadMsg}
                </div>
            </button>
            <button className="w-[190px] h-[46px] flex items-center bg-transparent hover:bg-[#e4f3ec] hover:text-[#7eb698] rounded-lg  text-base font-normal text-white">
                <BiSolidContact className=" w-[23px] h-[23px] ml-[15px] mr-[10px]" />
                Contact
            </button>
            <button className="w-[190px] h-[46px] flex items-center bg-transparent hover:bg-[#e4f3ec] hover:text-[#7eb698] rounded-lg  text-base font-normal text-white">
                <FaPeopleGroup className=" w-[23px] h-[23px] ml-[15px] mr-[10px]" />
                Community
            </button>
            <div className="flex absolute bottom-5 justify-center items-center">
                <div className='rounded-full overflow-hidden bg-white ml-2 w-[38px] h-[38px] mr-2'>
                    <img src={DemoProfileImage} />
                </div>
                <div className="flex-col">
                    <div className="font-light text-base">John</div>
                    <button className="text-white font-light text-sm hover:text-gray-500 transition duration-100">
                        View Profile
                    </button>
                </div>
                <button className="w-[20px] h-[20px] flex relative ml-[35px] items-center justify-center rounded-full">
                    <IoSettingsOutline className="text-white w-[20px] h-[20px] hover:text-gray-500 transition duration-100" />
                </button>
            </div>
        </div>
    )
}

export default SideBar