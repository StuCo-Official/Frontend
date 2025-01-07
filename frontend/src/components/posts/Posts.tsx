/**
 * import { useEffect } from "react";
import useChat from "../../zustand/useChat";
import MessageInput from "./MessageInput";
import Messages from "./Messages";
import { TiMessages } from "react-icons/ti";
import { useUserContext } from "../../context/UserContext";

const Posts = () => {
<section className="posts-section">
{posts.length > 0 ? (
  posts.map((post) => (
    <div key={post._id} className="w-[624px] mx-auto">
      <PostCard post={post} currentUser={{ _id: 'debug', username: 'debug' }} token={'debug'} />
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

*/
import { useEffect, useRef } from "react";
import { useGetPosts } from "../../hooks/PostHooks/useGetPosts";
import PostSkeleton from "../../skeletons/PostSkeleton";
import { Post } from "./Post";

const Posts = () => {
	const { posts, getPosts, loading, error } = useGetPosts();
	const lastPostRef = useRef<HTMLDivElement | null>(null);

	getPosts(1, 10);

    setTimeout(() => {
        lastPostRef.current?.scrollIntoView({ behavior: "smooth" });
      }, 100);
      
	return (
		<div className='px-4 flex-1 overflow-auto'>
			{!loading &&
				posts.length > 0 &&
				posts.map((post) => (
					<div key={post._id} ref={lastPostRef}>
						<Post post={ post } />
					</div>
				))}

			{loading && [...Array(3)].map((_, idx) => <PostSkeleton key={idx} />)}
			{!loading && posts.length === 0 && (
				<p className='text-center'>Upload to start the feed</p>
			)}
		</div>
	);
};
export default Posts;