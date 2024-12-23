import React, { useState } from "react";
import axios from "axios";
import defaultProfile from "../../assets/DemoProfileImage.png";
import galleryIcon from "../../assets/Gallery.png"; // Import the Gallery icon

interface CreatePostProps {
  user: {
    username: string;
    profileImage?: string;
  };
  token: string;
  onPostSuccess: () => void; // Callback for successful post
  onClose: () => void; // Callback for closing the modal
}

interface PostPayload {
  text: string;
  img?: string; // Optional base64 string for the image
}

const CreatePost: React.FC<CreatePostProps> = ({ user, token, onPostSuccess, onClose }) => {
  const [text, setText] = useState<string>("");
  const [image, setImage] = useState<File | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const fileInputRef = React.useRef<HTMLInputElement | null>(null); // Reference to hidden input

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };

  const handleFileButtonClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click(); // Simulate click on hidden input
    }
  };

  const handlePost = async () => {
    if (!text && !image) {
      alert("Post must have text or an image.");
      return;
    }

    setLoading(true);

    try {
      const payload: PostPayload = { text };

      if (image) {
        const reader = new FileReader();
        reader.onloadend = async () => {
          payload.img = reader.result as string; // Base64 image data
          await postToBackend(payload);
        };
        reader.readAsDataURL(image);
      } else {
        await postToBackend(payload);
      }
    } catch (error) {
      console.error("Error creating post:", error);
      alert("Failed to create post.");
    } finally {
      setLoading(false);
    }
  };

  const postToBackend = async (payload: PostPayload) => {
    try {
      const response = await axios.post<{ message: string }>(
        "http://localhost:3000/api/posts/create",
        payload,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );

      // Handle success
      alert("Post created successfully!");
      console.log(response.data);

      // Notify parent to close the modal
      onPostSuccess();

      // Reset state
      setText("");
      setImage(null);
    } catch (error) {
      console.error("Error posting to backend:", error);
      alert("Failed to create post.");
    }
  };

  return (
    <div>
      <div className="w-[624px] bg-white rounded-lg shadow-md p-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <img
              src={user.profileImage || defaultProfile}
              alt="User"
              className="w-12 h-12 rounded-full object-cover"
            />
            <p className="text-sm font-semibold text-gray-800">{user.username}</p>
          </div>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-black"
          >
            ×
          </button>
        </div>

        <div className="mt-4">
          <textarea
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Ask anything to the community"
            className="w-full h-[100px] border rounded-lg p-4 text-sm text-gray-700 resize-none outline-none focus:ring-2 focus:ring-green-400"
          ></textarea>
        </div>

        <div className="mt-4 flex items-center space-x-4">
          {/* Attach File Button */}
          <button
            onClick={handleFileButtonClick}
            className="flex items-center px-3 py-2 rounded-lg bg-gray-100 hover:bg-gray-200"
          >
            <img src={galleryIcon} alt="Attach File" className="w-5 h-5" />
            <span className="ml-2 text-sm text-gray-700">Attach Image</span>
          </button>
          <input
            type="file"
            accept="image/*"
            ref={fileInputRef}
            onChange={handleFileUpload}
            style={{ display: "none" }} // Hide the input element
          />
          {image && (
            <span className="text-sm text-gray-600">
              {image.name}
            </span>
          )}
        </div>

        <div className="flex items-center justify-between mt-4">
          <button
            className="bg-[#7EB698] text-white px-4 py-2 rounded-lg font-semibold hover:bg-green-600"
            onClick={handlePost}
            disabled={loading}
          >
            {loading ? "Posting..." : "Post"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreatePost;
