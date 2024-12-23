import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PostCard from './PostCard';

type User = {
  _id: string;
  username: string;
  profilePicture?: string;
};

type CommentType = {
  _id: string;
  user: User;
  text: string;
  timestamp: string;
};

type PostType = {
  _id: string;
  user: User;
  text: string;
  img?: string;
  likes: string[];
  comments: CommentType[];
  createdAt: string;
};

const Feed: React.FC = () => {
  const [posts, setPosts] = useState<PostType[]>([]);
  const [currentUser, setCurrentUser] = useState<User>({
    _id: '',
    username: '',
  });
  const [token, setToken] = useState<string>('');

  useEffect(() => {
    // Fetch current user and token from local storage or context
    const fetchCurrentUser = () => {
      // Replace with your logic to get the current user and token
      const user = JSON.parse(localStorage.getItem('user') || '{}');
      const authToken = localStorage.getItem('token') || '';
      setCurrentUser(user);
      setToken(authToken);
    };
    fetchCurrentUser();
  }, []);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get<PostType[]>('http://localhost:5000/api/posts/all', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setPosts(response.data);
      } catch (error) {
        console.error('Error fetching posts:', error);
      }
    };
    if (token) {
      fetchPosts();
    }
  }, [token]);

  return (
    <div>
      {posts.map((post) => (
        <PostCard key={post._id} post={post} currentUser={currentUser} token={token} />
      ))}
    </div>
  );
};

export default Feed;
