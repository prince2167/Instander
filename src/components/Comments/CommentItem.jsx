import React from "react";
import { useUser } from "../../contexts/user-context";
import { useAuth } from "../../contexts/auth-context";

const CommentItem = ({ comment }) => {
  const { currentUser } = useAuth();
  const { userState } = useUser();
  const { users } = userState;

  const isCurrentUserComment = comment?.username === currentUser?.username;
  const commentedUser = users.find(
    (user) => user.username === comment.username
  );

  console.log(commentedUser);
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
      <div className="bg-gray-200 px-2 py-1 w-full rounded-md">
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

        <>
          <p className="text-sm">{comment?.text}</p>
        </>
      </div>
    </div>
  );
};

export default CommentItem;
