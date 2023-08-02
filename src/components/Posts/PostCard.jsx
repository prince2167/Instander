import { useRef, useState } from "react";
import { useAuth } from "../../contexts/auth-context";
import { useUser } from "../../contexts/user-context";
import { Comments, EditPostForm, Modal } from "../index";
import {
  SlOptionsVertical,
  AiOutlineLike,
  AiFillLike,
  GoComment,
  BsBookmark,
  BsFillBookmarkFill,
} from "../../asset/icons";
import { usePosts } from "../../contexts/post-context";
import { useClickOutside } from "../../hooks/useClickOutside";
import { useNavigate } from "react-router-dom";
const PostCard = ({ post }) => {
  const { _id, content, mediaURL, likes } = post;
  const { likePostHandler, dislikePostHandler, deleteUserPost } = usePosts();
  const { userState, addBookmarkHandler, unBookmarkHandler } = useUser();
  const { users, bookmarks } = userState;
  const { currentUser } = useAuth();
  const [showOption, setShowOption] = useState(false);
  const [showComments, setShowComments] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);

  const postUser = users?.find((user) => user.username === post.username);
  const isOwnedByUser = post?.username === currentUser?.username;
  const isLiked = post?.likes?.likedBy?.some(
    (likedUser) => likedUser?.username === currentUser?.username
  );

  const isBookmarked = bookmarks?.some((bookmark) => bookmark._id === _id);

  const navigate = useNavigate();
  const clickRef = useRef();
  useClickOutside(clickRef, () => {
    setShowOption(false);
  });
  return (
    <>
      <div className="w-full border border-gray-300 bg-white px-6 py-4 rounded-lg shadow-lg flex flex-col gap-2 ">
        <div
          className="flex items-center cursor-pointer"
          onClick={() => navigate(`/profile/${post?.username}`)}
        >
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
                  <p className="font-semibold ">
                    {postUser?.firstName} {postUser?.lastName}
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
            <div className="relative" ref={clickRef}>
              {isOwnedByUser && (
                <SlOptionsVertical
                  className="cursor-pointer"
                  onClick={(event) => {
                    event.stopPropagation();
                    setShowOption(!showOption);
                  }}
                />
              )}
              {showOption && (
                <div className=" absolute right-4  mt-2 flex flex-col items-center bg-white font-semibold border shadow rounded-lg p-2">
                  <div
                    className="cursor-pointer  py-1 px-4 rounded-lg hover:bg-isactiveColor "
                    onClick={(event) => {
                      event.stopPropagation();
                      setShowEditModal(true);
                    }}
                  >
                    Edit
                  </div>
                  <div
                    className="cursor-pointer  py-1 px-4 rounded-lg hover:bg-isactiveColor "
                    onClick={(event) => {
                      event.stopPropagation();
                      deleteUserPost(_id);
                    }}
                  >
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
              {isLiked ? (
                <button onClick={() => dislikePostHandler(_id)}>
                  <AiFillLike size={28} className="text-orange" />
                </button>
              ) : (
                <button onClick={() => likePostHandler(_id)}>
                  <AiOutlineLike size={28} />
                </button>
              )}
              <span className=" text-lg">{likes.likeCount}</span>
            </div>
            <GoComment
              size={26}
              className="mt-3 cursor-pointer"
              onClick={() => setShowComments(!showComments)}
            />
          </div>
          {isBookmarked ? (
            <button onClick={() => unBookmarkHandler(_id)}>
              <BsFillBookmarkFill size={25} className="mt-3 text-orange" />
            </button>
          ) : (
            <button onClick={() => addBookmarkHandler(_id)}>
              <BsBookmark size={25} className="mt-3 " />
            </button>
          )}
        </div>

        {showComments && <Comments post={post} />}
      </div>
      <Modal showModal={showEditModal} setShowModal={setShowEditModal}>
        {<EditPostForm post={post} setShowModal={setShowEditModal} />}
      </Modal>
    </>
  );
};

export default PostCard;
