import React, { useState, useRef, useEffect } from 'react';
import { useGetPosts } from '../../hooks/PostHooks/useGetPosts';
import MyAppBar from '../../components/layout/AppBar';
import SideBar from '../../components/layout/SideBar';
import CreatePostCard from '../../components/cards/CreatePostCard';
import Calendar from '../../components/cards/Calendar';
import Posts from '../../components/posts/Posts';

const HomePageAfterLogin = () => {
  const { posts, loading, error } = useGetPosts();
  const [page, setPage] = useState(1);
  const [hasMorePosts, setHasMorePosts] = useState(true);
  const loaderRef = useRef<HTMLDivElement>(null);

  // Infinite scroll handler for post
  useEffect(() => {
    const handleScroll = () => {
      if (
        loaderRef.current &&
        loaderRef.current.getBoundingClientRect().top <= window.innerHeight &&
        hasMorePosts &&
        !loading
      ) {
        setPage((prevPage) => prevPage + 1);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [hasMorePosts, loading]);

  // get posts when `page` changes
  useEffect(() => {
    const loadPosts = async () => {
      const morePostsAvailable = await useGetPosts();
    };

    loadPosts();
  });


  return (
    <div className="main-page flex flex-col">
      {/* Top AppBar Section */}
      <section className="z-50 w-full fixed top-0 left-0 right-0">
        <MyAppBar />
      </section>
      <div className="flex w-screen h-full pt-[56px]">
        {/* Left - Side Bar Section */}
        <div className="flex sticky top-[56px] left-0 h-[calc(100vh-56px)]">
          <SideBar />
        </div>
        {/* Center - Posts Section */}
        <div className="flex-grow flex flex-col items-center">
          {/* Upload Post Card Section */}
          <section className="mb-4">
            <div className="w-[624px]">
              <CreatePostCard token={'debug'} />
            </div>
          </section>

          {/* Posts Section */}
          <section className="w-[624px] mx-auto">
            <Posts />
          </section>
        </div>

        {/* Right - Calendar */}
        <div className="absolute right-10 flex-col items-center  mt-8 w-[300px]">
            <Calendar />
        </div>
      </div>
    </div>
  );
}

export default HomePageAfterLogin;
