import React from 'react';
import { useNavigate } from 'react-router-dom';
import image31 from "../../assets/Image_31.png";

export const WelcomeCard: React.FC = () => {
  const navigate = useNavigate();

  const handleGetStartedClick = () => {
    console.log('Get Started button clicked'); // Ensure this log appears
    navigate('/login'); // Navigate to the MainPageAfterLogin
  };

  return (
    <div className="relative w-full max-w-6xl mx-auto aspect-[1440/704] bg-white border-none flex flex-col md:flex-row items-center justify-center p-6">
      <div className="relative w-full md:w-1/2 h-auto md:pl-8 flex flex-col justify-center items-start">
        <p className="font-inter text-[#171a1f] text-3xl md:text-5xl font-normal leading-tight md:leading-[68px]">
          Welcome to Your College Admissions Hub!
        </p>

        <p className="font-inter text-[#9095a0] text-lg md:text-xl font-normal mt-4 md:mt-6 leading-relaxed md:leading-[30px]">
          Connect with experienced students, access smart tools, and explore
          resources to confidently guide your way to college acceptance.
        </p>

        <button
          onClick={handleGetStartedClick}
          className="mt-8 py-3 px-6 bg-[#4a9b74] text-white text-lg rounded-md transition duration-300 ease-in-out transform hover:bg-[#3d8360] hover:scale-105"
        >
          Get Started
        </button>
      </div>

      <div className="relative w-full md:w-1/2 h-auto flex justify-center mt-8 md:mt-0">
        <img
          className="w-[80%] md:w-[90%] object-contain"
          alt="Image"
          src={image31}
        />
      </div>
    </div>
  );
};

export default WelcomeCard;
