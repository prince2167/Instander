import React, { useState } from "react";
import { MdSend } from "../../asset/icons";
import { CommentItem } from "../index";
import { useAuth } from "../../contexts/auth-context";
import { usePosts } from "../../contexts/post-context";

const Comments = ({ post }) => {
  const { currentUser } = useAuth();
  const { addPostCommentHandler, editUserComment, deleteUserComment } =
    usePosts();
  const [commentInput, setCommentInput] = useState("");
  const [editingComment, setEditingComment] = useState(null);

  const submitCommentHandler = (event) => {
    event.preventDefault();
    if (commentInput.length > 0) {
      addPostCommentHandler({
        postId: post?._id,
        commentData: { text: commentInput },
      });
      setCommentInput("");
    }
  };
  const handleEditComment = (comment) => {
    setEditingComment(comment);
    setCommentInput(comment.text);
  };

  const commentUpdateHandler = () => {
    editUserComment({
      postId: post?._id,
      commentId: editingComment._id,
      commentData: {
        text: editingComment.text,
      },
    });
    setEditingComment(null);
    setCommentInput("");
  };
  const deleteUserCommentHandler = (comment) => {
    deleteUserComment({
      postId: post?._id,
      commentId: comment?._id,
    });
  };

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
        <form className=" w-full relative" onSubmit={submitCommentHandler}>
          <input
            autoFocus
            placeholder="Add a new comment"
            className=" w-full border  ml-2 rounded-md p-2 border-black
            outline-orange"
            value={editingComment ? editingComment.text : commentInput}
            onChange={(event) =>
              editingComment
                ? setEditingComment({
                    ...editingComment,
                    text: event.target.value,
                  })
                : setCommentInput(event.target.value)
            }
          />

          {editingComment ? (
            <button
              className="absolute right-0 top-2 text-orange font-semibold"
              onClick={commentUpdateHandler}
            >
              Update
            </button>
          ) : (
            <button className="absolute right-0 top-3" type="submit">
              <MdSend size={20} />
            </button>
          )}
        </form>
      </div>
      <div className="flex flex-col gap-2">
        {post?.comments.length > 0 ? (
          post?.comments.map((comment) => (
            <CommentItem
              comment={comment}
              key={comment._id}
              handleEditComment={handleEditComment}
              deleteUserCommentHandler={deleteUserCommentHandler}
            />
          ))
        ) : (
          <span className="text-center">No comments yet</span>
        )}
      </div>
    </div>
  );
};

export default Comments;
