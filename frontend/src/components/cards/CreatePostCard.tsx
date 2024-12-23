import React, { useEffect, useState } from "react";
import axios from "axios";
import CreatePost from "./UploadPostCard"; // Import your CreatePost component
import mediaPlayer from "../../assets/MediaPlayer.png";
import calendarEvent from "../../assets/CalendarEvent.png";
import linkIcon from "../../assets/Link.png";
import rectangle from "../../assets/DemoProfileImage.png";

type UserType = {
  _id: string;
  username: string;
  profileImage?: string;
};

type CreatePostCardProps = {
  token: string;
};

const CreatePostCard: React.FC<CreatePostCardProps> = ({ token }) => {
  const [isPostModalOpen, setIsPostModalOpen] = useState(false);
  const [user, setUser] = useState<UserType | null>(null);

  // Fetch user data from /api/auth/me
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get<UserType>("http://localhost:3000/api/auth/me", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        console.log("User fetched from /api/auth/me:", response.data);
        setUser(response.data);
      } catch (error) {
        console.error("Error fetching user:", error);
      }
    };

    if (token) {
      fetchUser();
    }
  }, [token]);

  const togglePostModal = () => {
    setIsPostModalOpen((prev) => !prev);
  };

  const handlePostSuccess = () => {
    // Close the modal after a successful post
    setIsPostModalOpen(false);
  };

  const handlePostClose = () => {
    // Ensure the modal is closed when the user cancels or the post is completed
    setIsPostModalOpen(false);
  };

  if (!user) {
    return <div>Loading user data...</div>;
  }

  console.log("User data in CreatePostCard:", user); 
  // Check the console to verify if user.profileImage is empty or has a URL

  return (
    <div className="relative">
      {/* Create Post Card */}
      <div className="w-[624px] h-[184px] bg-white">
        <div className="relative w-[598px] h-[149px] mt-2 mx-auto bg-white rounded-lg shadow-lg">
          {/* Avatar Section */}
          <div className="absolute w-[58px] h-[58px] top-6 left-6 bg-gray-100 rounded-full overflow-hidden">
            <img
              className="w-full h-full object-cover"
              alt="Avatar"
              src={user.profileImage && user.profileImage.trim() !== "" ? user.profileImage : rectangle}
            />
          </div>

          {/* Post Button */}
          <button
            onClick={togglePostModal}
            className="absolute top-6 left-24 w-[473px] h-12 rounded-xl border border-gray-200 bg-white hover:shadow-md transition-shadow text-left px-3 py-2 text-sm text-gray-700"
          >
            What's on your mind, {user.username}?
          </button>

          {/* Media Button */}
          <button className="absolute top-[87px] left-24 w-[136px] h-[45px] flex items-center bg-white rounded-md border border-gray-200 cursor-pointer hover:bg-gray-100 hover:shadow-md transition-all">
            <img className="w-5 h-5 ml-4" alt="Media player" src={mediaPlayer} />
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
            <img className="w-5 h-5 ml-4" alt="Link" src={linkIcon} />
            <span className="ml-3 text-base text-gray-900">Link</span>
          </button>
        </div>
      </div>

      {/* Create Post Modal */}
      {isPostModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="relative bg-white rounded-lg shadow-lg p-6">
            <CreatePost
              user={user}
              token={token}
              onPostSuccess={handlePostSuccess}
              onClose={handlePostClose}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default CreatePostCard;
