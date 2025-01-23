import { useEffect, useState } from 'react';
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

export const useGetPosts = () => {
  const [posts, setPosts] = useState();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const getPosts = async () => {
      if (loading) return false;
      setLoading(true);
      setError(null);

      try {
        const response = await axiosInstance.get(`/posts/all`);
        setPosts(response.data);

        return posts;
      } catch (error) {
        console.error('Error geting posts:', error);
        setError('Failed to get posts. Please try again later.');
        return;
      } finally {
        setLoading(false);
      }
    };
    getPosts();
  }, [])

  return { posts, loading, error };
};