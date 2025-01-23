import React, { ReactNode } from 'react';

interface PostActionProps {
  icon: ReactNode;  // Type for the icon, which could be any React component (e.g., SVG or Icon component)
  text: string;
  onClick: () => void;
}

const PostAction: React.FC<PostActionProps> = ({ icon, text, onClick }) => {
  return (
    <button className="flex items-center" onClick={onClick}>
      <span className="mr-1">{icon}</span>
      <span className="hidden sm:inline">{text}</span>
    </button>
  );
};

export default PostAction;