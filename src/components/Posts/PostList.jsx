import { usePosts } from "../../contexts/post-context";
import { getSortedPosts } from "../../utils";
import { PostCard } from "../index";

const PostList = ({ posts }) => {
  const { sortBy } = usePosts();
  const sortedPosts = getSortedPosts(posts, sortBy);
  return (
    <div className="flex flex-wrap gap-4">
      {sortedPosts?.length &&
        sortedPosts?.map((post) => <PostCard post={post} key={post.id} />)}
    </div>
  );
};

export default PostList;
