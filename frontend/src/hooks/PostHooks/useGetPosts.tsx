import { useState } from 'react';
import axiosInstance from '../../services/ApiService';

type User = {
    _id: string;
    username: string;
    profileImage?: string;
    educationLevel?: string; 
    academicYear?: string; 
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

export const useGetPosts = () => {
  const [posts, setPosts] = useState<PostType[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const getPosts = async (page: number, limit: number = 10) => {
    if (loading) return false;

    setLoading(true);
    setError(null);

    try {
      const response = await axiosInstance.get<PostType[]>(
        `/api/posts/recent?page=${page}&limit=${limit}`
      );

      setPosts((prevPosts) => [...prevPosts, ...response.data]);

      return response.data.length === limit;
    } catch (error) {
      console.error('Error geting posts:', error);
      setError('Failed to get posts. Please try again later.');
      return false;
    } finally {
      setLoading(false);
    }
  };

  return { posts, getPosts, loading, error };
};