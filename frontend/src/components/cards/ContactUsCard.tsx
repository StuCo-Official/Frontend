import React from 'react';

const ContactUsCard: React.FC = () => {
  return (
    <div className="w-full max-w-6xl mx-auto h-auto p-10 bg-[#4a9b74] rounded-md relative overflow-hidden flex flex-col items-center">
      {/* Decorative Circle */}
      <div className="absolute -left-20 top-20 w-72 h-72 bg-[#6eb995] rounded-full"></div>

      {/* Title */}
      <div className="text-center text-white text-3xl md:text-5xl font-bold font-['Inter'] leading-tight md:leading-[68px] mb-6">
        Connect and broaden your future!
      </div>

      {/* Description */}
      <div className="text-center text-white text-base md:text-lg font-normal font-['Inter'] leading-relaxed max-w-xl mb-8">
        Unlock your potential with personalized coaching tailored to your goals. Start your journey today!
      </div>

      {/* Contact Us Button */}
      <button className="py-3 px-6 bg-white text-[#171a1f] text-lg font-normal font-['Inter'] rounded-md transition duration-300 ease-in-out transform hover:scale-105">
        Contact Us
      </button>
    </div>
  );
};

export default ContactUsCard;
