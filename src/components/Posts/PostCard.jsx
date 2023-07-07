import { useAuth } from "../../contexts/auth-context";
import { useUser } from "../../contexts/user-context";
import { Comments } from "../index";
import {
  SlOptionsVertical,
  AiOutlineLike,
  AiFillLike,
  GoComment,
  BsBookmark,
  BsFillBookmarkFill,
} from "../../asset/icons";
import { useState } from "react";
const PostCard = ({ post }) => {
  const { _id, content, mediaURL, likes, comments, username } = post;
  const { userState, userDispatch } = useUser();
  const { users } = userState;
  const { currentUser } = useAuth();
  const [showOption, setShowOption] = useState(false);
  const [showComments, setShowComments] = useState(false);

  const postUser = users?.find((user) => user.username === post.username);
  const isOwnedByUser = post?.username === postUser?.username;

  return (
    <div className="w-full border border-gray-300 bg-white px-6 py-4 rounded-lg shadow-lg flex flex-col gap-2 ">
      <div className="flex items-center">
        <>
          {isOwnedByUser && currentUser?.avatarURL ? (
            <img
              src={currentUser?.avatarURL}
              alt=""
              className="w-10 h-10 rounded-full"
            />
          ) : postUser?.avatarURL ? (
            <img
              src={postUser?.avatarURL}
              alt=""
              className="w-10 h-10 rounded-full"
            />
          ) : (
            <img
              src="https://api-private.atlassian.com/users/6b5c1609134a5887d7f3ab1b73557664/avatar"
              alt=""
              className="w-10 h-10 rounded-full"
            />
          )}
        </>
        <div className="flex justify-between items-center w-full">
          <div className="flex flex-col mx-2">
            {isOwnedByUser ? (
              <p className="font-semibold ">
                {currentUser?.firstName} {currentUser?.lastName}
              </p>
            ) : (
              postUser && (
                <p>
                  {postUser?.firstName}
                  {postUser?.lastName}
                </p>
              )
            )}

            <div className="flex gap-2 text-sm text-gray-400">
              {isOwnedByUser ? (
                <span>{currentUser?.username}</span>
              ) : (
                <span>{postUser?.username}</span>
              )}
              <span>
                {new Date(post.createdAt).toLocaleDateString("en-US", {
                  day: "numeric",
                  month: "short",
                  year: "numeric",
                })}
              </span>
            </div>
          </div>
          <div className="relative">
            <SlOptionsVertical
              className="cursor-pointer"
              onClick={() => setShowOption(!showOption)}
            />
            {showOption && (
              <div className=" absolute right-4  mt-2 flex flex-col items-center bg-white font-semibold border shadow rounded-lg p-2">
                <div className="cursor-pointer  py-1 px-4 rounded-lg hover:bg-isactiveColor ">
                  Edit
                </div>
                <div className="cursor-pointer  py-1 px-4 rounded-lg hover:bg-isactiveColor ">
                  Delete
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      <p className="w-full">{content}</p>
      <img src={mediaURL} alt="" className="w-full rounded-md" />
      <div className=" w-full flex items-center justify-between">
        <div className="flex items-center gap-6">
          <div className="flex items-center  mt-2">
            <AiOutlineLike size={28} className="cursor-pointer" />
            <span className=" text-lg">{likes.likeCount}</span>
          </div>
          <GoComment
            size={26}
            className="mt-3 cursor-pointer"
            onClick={() => setShowComments(!showComments)}
          />
        </div>
        <BsBookmark size={25} className="mt-3 cursor-pointer" />
      </div>

      {showComments && <Comments post={post} />}
    </div>
  );
};

export default PostCard;
