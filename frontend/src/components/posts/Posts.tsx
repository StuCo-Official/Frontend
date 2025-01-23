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
				<p className="text-center text-gray-600">
					No posts available.
					</p>
				)}
		</div>
	);
};
export default Posts;