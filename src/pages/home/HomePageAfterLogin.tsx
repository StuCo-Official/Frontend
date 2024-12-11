import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import MyAppBar from '../../components/layout/AppBar.tsx';
import PostCard from '../../components/posts/PostCard.tsx';
import CreatePostCard from '../../components/cards/CreatePostCard.tsx';


// Define types for user and posts
export type User = {
  _id: string;
  username: string;
  profilePicture?: string;
};

export type CommentType = {
  _id: string;
  user: User;
  text: string;
  timestamp: string;
};

export type PostType = {
  _id: string;
  user: User;
  text: string;
  img?: string;
  likes: string[];
  comments: CommentType[];
  createdAt: string;
};

const MainPageAfterLogin: React.FC = () => {
  console.log('MainPageAfterLogin component rendered'); 
  const [posts, setPosts] = useState<PostType[]>([]);
  const [currentUser, setCurrentUser] = useState<User>({
    _id: '',
    username: '',
  });
  const [token, setToken] = useState<string>('');
  const [page, setPage] = useState<number>(1);
  const [hasMorePosts, setHasMorePosts] = useState<boolean>(true);
  const loaderRef = useRef<HTMLDivElement>(null);

  // Fetch current user from localStorage
  useEffect(() => {
    const fetchCurrentUser = () => {
      const storedUser = localStorage.getItem('user');
      const authToken = localStorage.getItem('token');
      console.log('Stored User:', storedUser); // Should show the user JSON string
      console.log('Auth Token:', authToken);  // Should show the token string
  
      if (storedUser && authToken) {
        setCurrentUser(JSON.parse(storedUser));
        setToken(authToken);
        console.log('Token is set:', authToken); // Debug log
      }
    };
    fetchCurrentUser();
  }, []);
  

  // Fetch posts (with pagination)
  useEffect(() => {
    const fetchPosts = async () => {
      console.log('Fetching posts...'); 
      console.log('Token:', token); 
      console.log('Page:', page); 
      try {
        const response = await axios.get<PostType[]>(
          `http://localhost:3000/api/posts/recent?page=${page}&limit=10`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        console.log('API Response:', response.data); 
        setPosts((prevPosts) => [...prevPosts, ...response.data]);
        if (response.data.length < 10) {
          setHasMorePosts(false); // No more posts to load
        }
      } catch (error) {
        console.error('Error fetching posts:', error);
      }
    };

    if (token && hasMorePosts) {
      fetchPosts();
    }
  }, [page, token, hasMorePosts]);

  // Infinite Scroll Handler
  useEffect(() => {
    const handleScroll = () => {
      if (
        loaderRef.current &&
        loaderRef.current.getBoundingClientRect().top <= window.innerHeight &&
        hasMorePosts
      ) {
        setPage((prevPage) => prevPage + 1);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [hasMorePosts]);

  

  return (
    <div className="main-page">
      {/* Top AppBar */}
      <section className="z-50 w-full fixed top-0 left-0 right-0">
        <MyAppBar />
      </section>

      {/* Create Post Card */}
      <section className="mt-[64px] flex flex-col items-center">
        <div className="w-[624px]">
          <CreatePostCard  token={token} />
        </div>
        
      </section>

      {/* Search and Filter Bar */}
      {/* <section className="search-filter-bar mt-4 flex justify-center">
        <SearchFilterBar />
      </section> */}

      {/* Posts Section */}
      <section className="posts-section mt-6">
        {posts.length > 0 ? (
          posts.map((post) => (
            <div key={post._id} className="w-[624px]">
              <PostCard post={post} currentUser={currentUser} token={token} />
            </div>
          ))
        ) : (
          <p className="text-center text-gray-600">No posts available.</p>
        )}
        {hasMorePosts && (
          <div ref={loaderRef} className="text-center text-gray-500">
            Loading more posts...
          </div>
        )}
      </section>
    </div>
  );
};

export default MainPageAfterLogin;
