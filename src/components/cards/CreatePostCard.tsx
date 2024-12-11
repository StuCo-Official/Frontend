import React from "react";
import mediaPlayer from "../../assets/MediaPlayer.png";
import calendarEvent from "../../assets/CalendarEvent.png";
import linkIcon from "../../assets/Link.png";
import rectangle from "../../assets/DemoProfileImage.png";

type CreatePostCardProps = {
  user: {
    _id: string;
    username: string;
    profilePicture?: string;
  };
  token: string;
};

const CreatePostCard: React.FC<CreatePostCardProps> = ({ user, token }) => {
  return (
    <div className="w-[624px] h-[184px] bg-white">
      <div className="relative w-[598px] h-[149px] mt-2 mx-auto bg-white rounded-lg shadow-lg">
        {/* Avatar Section */}
        <div className="absolute w-[58px] h-[58px] top-6 left-6 bg-gray-100 rounded-full overflow-hidden">
          <img
            className="w-full h-full object-cover"
            alt="Avatar"
            src={user.profilePicture || rectangle}
          />
        </div>

        {/* Post Input Field */}
        <div className="absolute top-6 left-24 w-[473px] h-12 rounded-xl border border-gray-200 bg-white hover:shadow-md transition-shadow">
          <input
            type="text"
            placeholder={`What's on your mind, ${user.username}?`}
            className="w-full h-full px-3 py-2 text-sm text-gray-700 bg-white outline-none rounded-xl"
          />
        </div>

        {/* Media Button */}
        <button className="absolute top-[87px] left-24 w-[136px] h-[45px] flex items-center bg-white rounded-md border border-gray-200 cursor-pointer hover:bg-gray-100 hover:shadow-md transition-all">
          <img
            className="w-5 h-5 ml-4"
            alt="Media player"
            src={mediaPlayer}
          />
          <span className="ml-3 text-base text-gray-900">Media</span>
        </button>

        {/* Event Button */}
        <button className="absolute top-[87px] left-[274px] w-[132px] h-[45px] flex items-center bg-white rounded-md border border-gray-200 cursor-pointer hover:bg-gray-100 hover:shadow-md transition-all">
          <img
            className="w-5 h-5 ml-4"
            alt="Calendar event"
            src={calendarEvent}
          />
          <span className="ml-3 text-base text-gray-900">Event</span>
        </button>

        {/* Link Button */}
        <button className="absolute top-[87px] left-[444px] w-[122px] h-[45px] flex items-center bg-white rounded-md border border-gray-200 cursor-pointer hover:bg-gray-100 hover:shadow-md transition-all">
          <img
            className="w-5 h-5 ml-4"
            alt="Link"
            src={linkIcon}
          />
          <span className="ml-3 text-base text-gray-900">Link</span>
        </button>
      </div>
    </div>
  );
};

export default CreatePostCard;
