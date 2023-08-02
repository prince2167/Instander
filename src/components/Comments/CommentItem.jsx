import { useRef, useState } from "react";
import { SlOptionsVertical } from "../../asset/icons";
import { useUser } from "../../contexts/user-context";
import { useAuth } from "../../contexts/auth-context";
import { useClickOutside } from "../../hooks/useClickOutside";

const CommentItem = ({
  comment,
  handleEditComment,
  deleteUserCommentHandler,
}) => {
  const [showCommentOptions, setShowCommentOptions] = useState(false);
  const { currentUser } = useAuth();
  const { userState } = useUser();
  const { users } = userState;

  const isCurrentUserComment = comment?.username === currentUser?.username;
  const commentedUser = users.find(
    (user) => user.username === comment.username
  );

  const clickRef = useRef();
  useClickOutside(clickRef, () => {
    setShowCommentOptions(false);
  });
  return (
    <div className="flex gap-3">
      <div className="ml-2">
        {isCurrentUserComment ? (
          currentUser.avatarURL ? (
            <img
              src={currentUser?.avatarURL}
              alt=""
              className="w-8 h-8 rounded-full"
            />
          ) : (
            <img
              src="https://api-private.atlassian.com/users/6b5c1609134a5887d7f3ab1b73557664/avatar"
              alt=""
              className="w-8 h-8 rounded-full"
            />
          )
        ) : commentedUser?.avatarURL ? (
          <img
            src={commentedUser?.avatarURL}
            alt=""
            className="w-8 h-8 rounded-full"
          />
        ) : (
          <img
            src="https://api-private.atlassian.com/users/6b5c1609134a5887d7f3ab1b73557664/avatar"
            alt=""
            className="w-8 h-8 rounded-full"
          />
        )}
      </div>

      <div className="bg-gray-200 px-2 py-2 w-full rounded-md">
        <div className="flex justify-between items-center">
          <div className=" font-semibold flex gap-2">
            {isCurrentUserComment ? (
              <span>
                {currentUser?.firstName} {currentUser?.lastName}
              </span>
            ) : commentedUser ? (
              <span>
                {commentedUser?.firstName} {commentedUser?.lastName}
              </span>
            ) : (
              <span>Unknown</span>
            )}
          </div>

          <div className="relative" ref={clickRef}>
            {isCurrentUserComment && (
              <button
                onClick={() => setShowCommentOptions(!showCommentOptions)}
              >
                <SlOptionsVertical className="cursor-pointer" />
              </button>
            )}
            {showCommentOptions && (
              <div className="absolute right-2   flex flex-col items-center bg-white font-semibold border shadow rounded-lg p-2">
                <div
                  className="cursor-pointer  py-1 px-4 rounded-lg hover:bg-isactiveColor "
                  onClick={() => {
                    setShowCommentOptions(false);
                    handleEditComment(comment);
                  }}
                >
                  Edit
                </div>
                <div
                  className="cursor-pointer  py-1 px-4 rounded-lg hover:bg-isactiveColor "
                  onClick={() => deleteUserCommentHandler(comment)}
                >
                  Delete
                </div>
              </div>
            )}
          </div>
        </div>

        <>
          <p className="text-sm">{comment?.text}</p>
        </>
      </div>
    </div>
  );
};

export default CommentItem;
