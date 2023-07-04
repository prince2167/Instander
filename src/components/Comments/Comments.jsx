import React from "react";
import { useAuth } from "../../contexts/auth-context";
import { MdSend } from "../../asset/icons";
import { CommentItem } from "../index";

const Comments = ({ post }) => {
  const { currentUser } = useAuth();
  return (
    <div className="">
      <div className="flex items-center my-4">
        {currentUser.avatarURL ? (
          <img
            src={currentUser?.avatarURL}
            alt=""
            className="w-10 h-10 rounded-full"
          />
        ) : (
          <img
            src="https://api-private.atlassian.com/users/6b5c1609134a5887d7f3ab1b73557664/avatar"
            alt=""
          />
        )}
        <div className=" w-full relative">
          <input
            placeholder="Add a new comment"
            className=" w-full border  ml-2 rounded-md p-2 border-black
            outline-orange"
          />

          <button className="absolute right-0 top-3">
            <MdSend size={20} />
          </button>
        </div>
      </div>
      {post?.comments.length > 0 ? (
        post?.comments.map((comment) => (
          <CommentItem comment={comment} key={comment._id} />
        ))
      ) : (
        <span>No comments yet</span>
      )}
    </div>
  );
};

export default Comments;
