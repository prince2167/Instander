import { ShimmerPostCard } from "../ShimmerCard/ShimmerPostCard";
import { PostCard, PostList } from "../components";
import { usePosts } from "../contexts/post-context";
import { useUser } from "../contexts/user-context";

const Bookmarks = () => {
  const { state } = usePosts();
  const { posts } = state;
  const { userState, bookmarkIsLoading } = useUser();
  const { bookmarks } = userState;

  const bookmarksPosts = [...posts]
    ?.reverse()
    ?.filter((post) =>
      bookmarks?.find((bookmark) => bookmark._id === post._id)
    );

  if (bookmarkIsLoading) return <ShimmerPostCard />;
  return (
    <div className="w-700 mt-5">
      {bookmarksPosts?.length > 0 ? (
        <div className="flex flex-wrap gap-4">
          {bookmarksPosts?.map((post) => (
            <PostCard key={post?._id} post={post} />
          ))}
        </div>
      ) : (
        <p className="text-orange text-2xl  text-center font-semibold">
          Bookmark posts to see them here!
        </p>
      )}
    </div>
  );
};

export default Bookmarks;
