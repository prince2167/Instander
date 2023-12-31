import { ShimmerPostCard } from "../ShimmerCard/ShimmerPostCard";
import { CreatePost, PostList, Filter } from "../components/index";
import { useAuth } from "../contexts/auth-context";
import { usePosts } from "../contexts/post-context";
const Home = () => {
  const { isLoading, state } = usePosts();
  const { currentUser } = useAuth();
  const { posts } = state;
  const homePosts = posts.filter(
    (post) =>
      post.username === currentUser.username ||
      currentUser?.following.find(
        (followingUser) => followingUser.username === post.username
      )
  );

  if (isLoading) return <ShimmerPostCard />;
  return (
    <div className="xl:w-700  w-full px-4 py-2 relative mb-8 ">
      <CreatePost currentUser={currentUser} />
      <Filter />
      <PostList posts={homePosts} />
    </div>
  );
};

export default Home;
