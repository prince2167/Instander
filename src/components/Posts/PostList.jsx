import { PostCard } from "../index";

const PostList = ({ posts }) => {
  
  return (
    <div className="flex flex-wrap gap-4">{posts.length && posts.map((post) => <PostCard post={post} key={post.id} />)}</div>
  );
};

export default PostList;
