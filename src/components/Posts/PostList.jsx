import { PostCard } from "../index";

const PostList = ({ posts }) => {
  return (
    <div>{posts.length && posts.map((post) => <PostCard post={post} />)}</div>
  );
};

export default PostList;
