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

  console.log("ss", commentedUser?.avatarURL);
  return (
    <div>
      {isCurrentUserComment ? (
        <img src={currentUser.avatarURL} alt="" />
      ) : (
        <img src={commentedUser?.avatarURL} alt="" />
      )}
    </div>
  );
};

export default CommentItem;
