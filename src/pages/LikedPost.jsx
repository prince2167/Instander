import { useAuth } from "../contexts/auth-context";
import { usePosts } from "../contexts/post-context";
import { ShimmerPostCard } from "../ShimmerCard/ShimmerPostCard";
import { PostCard } from "../components/index";

const LikedPost = () => {
  const { state, isLoading } = usePosts();
  const { posts } = state;
  const { currentUser } = useAuth();

  const likedPosts = posts.filter((post) =>
    post.likes.likedBy.find((user) => user.username === currentUser.username)
  );

  if (isLoading) return <ShimmerPostCard />;
  return (
    <div className="w-700 mt-5">
      {likedPosts?.length > 0 ? (
        <div className="flex flex-wrap gap-4">
          {likedPosts.map((post) => (
            <PostCard key={post._id} post={post} />
          ))}
        </div>
      ) : (
        <p className="text-orange text-2xl text-center font-semibold">
          No Liked Posts Yet!
        </p>
      )}
    </div>
  );
};

export default LikedPost;
