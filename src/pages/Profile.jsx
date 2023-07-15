import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { usePosts } from "../contexts/post-context";
import { useUser } from "../contexts/user-context";
import { PostCard, ProfileDetails } from "../components/index";
import { useAuth } from "../contexts/auth-context";
const Profile = () => {
  const { currentUser } = useAuth();
  const { fetchUserByUsername, userProfileLoading, userState } = useUser();
  const { userDetails } = userState;

  const {
    state: { posts },
  } = usePosts();

  const { username } = useParams();
  const userPosts = posts?.filter((post) => post.username === username);
  const isEdit = currentUser?.username === username;

  useEffect(() => {
    fetchUserByUsername(username);
    window.scroll({ top: 0, behavior: "smooth" });
  }, [username, currentUser]);

  if (userProfileLoading) return null;
  return (
    <div className="w-700 mt-5">
      <>
        {userDetails && (
          <ProfileDetails
            user={userDetails}
            totalPost={userPosts.length}
            isEdit={isEdit}
          />
        )}

        <h1 className="text-2xl font-semibold my-4">Posts</h1>
        {userPosts?.length > 0 ? (
          <div className="flex flex-wrap gap-4">
            {userPosts.map((post) => (
              <PostCard key={post.id} post={post} />
            ))}
          </div>
        ) : (
          <p className=" text-2xl font-semibold text-center">No post yet!</p>
        )}
      </>
    </div>
  );
};

export default Profile;
