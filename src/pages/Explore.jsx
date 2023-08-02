import { usePosts } from "../contexts/post-context";
import { ShimmerPostCard } from "../ShimmerCard/ShimmerPostCard";
import { useAuth } from "../contexts/auth-context";
import { PostCard } from "../components/index";

const Explore = () => {
  const { state, isLoading } = usePosts();
  const { posts } = state;
  const { currentUser } = useAuth();
  const explorePost = posts?.filter(
    (post) =>
      post.username !== currentUser?.username &&
      !currentUser?.following?.find(
        (followingUser) => followingUser?.username === post?.username
      )
  );

  if (isLoading) return <ShimmerPostCard />;
  return (
    <div className="xl:w-700  w-full px-4 py-2 relative mb-8 mt-5">
      {explorePost?.length > 0 ? (
        <div className="flex flex-wrap gap-4">
          {explorePost?.map((post) => (
            <PostCard key={post._id} post={post} />
          ))}
        </div>
      ) : (
        <p className="text-orange text-2xl text-center font-semibold">
          No more posts available to explore!
        </p>
      )}
    </div>
  );
};

export default Explore;
