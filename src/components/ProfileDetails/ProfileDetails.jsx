import { useState } from "react";
import { EditUserDetails, Modal } from "../index";
import { useAuth } from "../../contexts/auth-context";
import { useUser } from "../../contexts/user-context";

const ProfileDetails = ({ user, totalPost, isEdit }) => {
  const [showEditForm, setShowEditForm] = useState(false);
  const { followUserHandler, unFollowUserHandler } = useUser();
  const { currentUser } = useAuth();
  const userAlreadyFollowing = user?.followers?.some(
    (user) => user.username === currentUser?.username
  );

  return (
    <div className="bg-white px-6 py-4 gap-4 border rounded-lg shadow-lg flex   h-fit sm:gap-6 mb-2">
      {user.avatarURL ? (
        <img
          src={user.avatarURL}
          alt="https://api-private.atlassian.com/users/6b5c1609134a5887d7f3ab1b73557664/avatar"
          className="w-16 h-16 rounded-full"
        />
      ) : (
        <img
          src="https://api-private.atlassian.com/users/6b5c1609134a5887d7f3ab1b73557664/avatar"
          alt=""
          className="w-16 h-16 rounded-full"
        />
      )}
      <div className="flex flex-col w-full gap-2">
        <div className="flex justify-between items-center">
          <div>
            <span className="text-xl font-semibold">
              {user?.firstName} {user?.lastName}
            </span>
            <p className="text-gray-400 ">{user?.username}</p>
          </div>

          {isEdit ? (
            <button
              className="border border-black px-6 py-1 rounded-lg font-semibold cursor-pointer "
              onClick={() => setShowEditForm(true)}
            >
              Edit
            </button>
          ) : userAlreadyFollowing ? (
            <button
              className=" border  border-black px-4 py-1 rounded-lg font-semibold cursor-pointer "
              onClick={() => unFollowUserHandler(user?._id)}
            >
              Unfollow
            </button>
          ) : (
            <button
              className="bg-orange text-white px-4 py-1 rounded-lg cursor-pointer"
              onClick={() => followUserHandler(user?._id)}
            >
              Follow
            </button>
          )}
        </div>
        <p>{user?.bio}</p>

        <div className="flex gap-4 font-semibold">
          <span>{totalPost} Posts</span>
          <span>{user?.followers?.length} Followers</span>
          <span>{user?.following?.length} Following</span>
        </div>
      </div>
      <Modal showModal={showEditForm} setShowModal={setShowEditForm}>
        <EditUserDetails setShowModal={setShowEditForm} user={user} />
      </Modal>
    </div>
  );
};

export default ProfileDetails;
