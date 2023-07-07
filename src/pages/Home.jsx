import { ShimmerPostCard } from "../ShimmerCard/ShimmerPostCard";
import { CreatePost, PostList, Filter } from "../components/index";
import { useAuth } from "../contexts/auth-context";
import { usePosts } from "../contexts/post-context";
const Home = () => {
  const { isLoading, error, state } = usePosts();
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
    <div className="w-700">
      <CreatePost />
      <Filter />
      <PostList posts={homePosts} />
    </div>
  );
};

export default Home;
