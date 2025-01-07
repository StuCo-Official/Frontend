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
import { useRef } from "react";
import PostSkeleton from "../../skeletons/PostSkeleton";
import { Post } from "./Post";
import { useQuery } from "@tanstack/react-query";
import axiosInstance from "../../services/ApiService";

const Posts = () => {
	const lastPostRef = useRef<HTMLDivElement | null>(null);

	const { data: posts, isLoading } = useQuery({
		queryKey: ["posts"],
		queryFn: async () => {
			try {
				const res = await axiosInstance.get("posts/all");
				return res.data;
			} catch (error) {
				throw error;
			}
		}
	})

	return (
		<div className='px-4 flex-1 overflow-auto'>
			{isLoading && [...Array(3)].map((_, idx) =>
				<div className='flex flex-col justify-center'>
					<PostSkeleton key={idx} />
				</div>
			)}
			{!isLoading &&
				posts &&
				posts.map((post: any) => (
					<div key={post._id} ref={lastPostRef}>
						<Post post={post} />
					</div>
				))}
			{!isLoading && posts.length === 0 && (
				<p className='text-center my-4'>Upload to start the feed</p>
			)}
		</div>
	);
};
export default Posts;