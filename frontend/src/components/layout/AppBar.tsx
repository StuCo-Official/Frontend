import React from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../../assets/StuCoAppBarLogo.png';
import DemoProfileImage from '../../assets/DemoProfileImage.png';
import { FaRegCompass } from "react-icons/fa6";
import { VscTools } from "react-icons/vsc";
import { IoLibraryOutline } from "react-icons/io5";
import { PiPathDuotone } from "react-icons/pi";
import { BsHeartPulse } from "react-icons/bs";
import { BiSearchAlt } from "react-icons/bi";
import { useUserContext } from '../../context/UserContext';
import LogoutButton from './LogoutButton';

const MyAppBar: React.FC = () => {
  const navigate = useNavigate();
  const { user } = useUserContext();

  return (
    <div className="bg-[#e4f3ec] text-white shadow-md w-full h-[56px] fixed top-0 left-0 right-0 z-50">
      <div className="flex items-center justify-between h-full px-4">
        {/* Left section: Logo and Navigation */}
        <div className="flex items-center h-full">
          <div
            className="flex items-center cursor-pointer"
            onClick={() => navigate('/home')} // Navigate to /home on click
          >
            <img src={logo} alt="App Logo" className="w-[44px] h-[34px]" />
            <span className="text-2xl font-bold ml-2 font-poppins italic text-black">StuCo</span>
          </div>

          {/* Navigation Buttons */}
          <button className="flex h-full items-center font-light text-[#565e6c] text-sm bg-transparent hover:bg-gray-300 px-3 ml-[110px] rounded">
            <FaRegCompass style={{ strokeWidth: 0.2 }} className="w-[21px] h-[21px] mr-2" />
            Explore
          </button>
          <button className="flex h-full items-center font-light text-[#565e6c] text-sm bg-transparent hover:bg-gray-300 px-3 rounded">
            <BsHeartPulse style={{ strokeWidth: 0.4 }} className="w-[19px] h-[19px] mr-2" />
            Mentorship
          </button>
          <button className="flex h-full items-center font-light text-[#565e6c] text-sm bg-transparent hover:bg-gray-300 px-3 rounded">
            <VscTools style={{ strokeWidth: 0.2 }} className="w-[21px] h-[21px] mr-2" />
            Tools
          </button>
          <button className="flex h-full items-center font-light text-[#565e6c] text-sm bg-transparent hover:bg-gray-300 px-3 rounded">
            <IoLibraryOutline className="w-[21px] h-[21px] mr-2" />
            Library
          </button>
          <button className="flex h-full items-center font-light text-[#565e6c] text-sm bg-transparent hover:bg-gray-300 px-3 rounded">
            <PiPathDuotone className="w-[21px] h-[21px] mr-2" />
            College Journey
          </button>
        </div>

        {/* Right section: SearchBar & ProfilePic / Sign In Button */}
        {!!user ? (
          <div className="flex items-center h-full left-3">
            <div className="relative h-[35px]">
              <input
                type="text"
                placeholder="Search ..."
                className="h-full w-[255px] pl-8 pr-4 py-1 text-sm rounded-lg border border-gray-300 focus:outline-none focus:border-gray-400 text-[#bcc1ca] font-light"
              />
              <BiSearchAlt className="absolute left-3 top-1/2 transform -translate-y-1/2 text-black" />
            </div>
            <div 
              className='rounded-full overflow-hidden bg-white ml-2 cursor-pointer'
              onClick={() => navigate('/profile')}
            >
              <img 
                src={user.profileImage && user.profileImage.trim() !== "" ? user.profileImage : DemoProfileImage} 
                alt="Profile" 
                className="w-[38px] h-[38px] object-cover" 
              />
            </div>
            <div className="">
              <LogoutButton/>
            </div>
          </div>
        ) : (
          <div className="flex items-center h-full left-3">
            <button
              onClick={() => navigate('/login')}
              className="py-2 bg-white text-[#4a9b74] rounded-lg w-[84px] h-[36px] font-light text-sm mr-[11px] border border-[#4a9b74] hover:bg-gray-200 transition duration-150"
            >
              Sign in
            </button>
            <button
              onClick={() => navigate('/signup')}
              className="py-2 bg-[#4a9b74] text-white rounded-lg w-[84px] h-[36px] text-sm font-light mr-3 hover:bg-[#418765] transition duration-150"
            >
              Join now
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default MyAppBar;
