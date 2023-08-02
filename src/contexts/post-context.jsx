import { initialState, postReducer } from "../reducer/PostReducer";
import { useAuth } from "./auth-context";
import { toast } from "react-hot-toast";
import {
  addComment,
  editComment,
  deleteComment,
} from "../services/commentServices";
import {
  addPost,
  getAllPostsService,
  likePost,
  dislikePost,
  editPost,
  deletePost,
} from "../services/postServices";

import {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";

const PostContext = createContext();

const PostProvider = ({ children }) => {
  const [state, dispatch] = useReducer(postReducer, initialState);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [sortBy, setSortBy] = useState("Latest");
  const { token } = useAuth();

  const addUserPost = async (postData) => {
    try {
      const {
        status,
        data: { posts },
      } = await addPost(postData, token);
      if (status === 200 || status === 201) {
        dispatch({ type: "CREATE_NEW_POST", payload: posts });
      }
      toast.success("New post created");
    } catch (error) {
      toast.error("Something went wrong, try again!");
    }
  };
  const editUserPost = async (postData) => {
    try {
      const {
        data: { posts },
      } = await editPost(postData, token);

      dispatch({ type: "EDITED_POSTS", payload: posts });
      toast.success("Post Edited");
    } catch (error) {
      toast.error("Smething went wrong, please try again.");
    }
  };
  const deleteUserPost = async (postId) => {
    try {
      const { posts } = await deletePost(postId, token);
      dispatch({ type: "DELETE_POST", payload: posts });
      toast.success("Post Deleted");
    } catch (error) {
      toast.error("Post can not be delete");
    }
  };
  const likePostHandler = async (postId) => {
    try {
      const {
        status,
        data: { posts },
      } = await likePost(postId, token);
      if (status === 201) {
        dispatch({ type: "LIKE_POST", payload: posts });
      }
    } catch (error) {
      const {
        response: { status },
      } = error;
      if (status === 400) {
        toast.error("Cannot like a post that is already liked.");
      } else {
        toast.error("Something went wrong");
      }
    }
  };

  const dislikePostHandler = async (postId) => {
    try {
      const {
        status,
        data: { posts },
      } = await dislikePost(postId, token);
      if (status === 201) {
        dispatch({ type: "DISLIKE_POST", payload: posts });
      }
    } catch (error) {
      const {
        response: { status },
      } = error;
      if (status === 400) {
        toast.error("Something went wrong.");
      } else {
        toast.error("Something went wrong");
      }
    }
  };

  const addPostCommentHandler = async ({ postId, commentData }) => {
    try {
      const {
        status,
        data: { posts },
      } = await addComment(postId, commentData, token);
      if (status === 201) {
        dispatch({ type: "ADD_NEW_COMMENT", payload: posts });
      }
    } catch (error) {
      console.error(error);
      toast.error("Something went wrong!");
    }
  };

  const editUserComment = async ({ postId, commentId, commentData }) => {
    try {
      const {
        status,
        data: { posts },
      } = await editComment(postId, commentId, commentData, token);
      if (status === 200 || status === 201) {
        dispatch({ type: "EDITED_COMMENT", payload: posts });
        toast.success("Post edited");
      }
    } catch (error) {
      toast.error("Something went wrong");
    }
  };

  const deleteUserComment = async ({ postId, commentId }) => {
    try {
      const {
        status,
        data: { posts },
      } = await deleteComment(postId, commentId, token);

      if (status === 200 || status === 201) {
        dispatch({ type: "DELETE_COMMENT", payload: posts });
        toast.success("Comment deleted");
      }
    } catch (error) {
      toast.error("Something went wrong");
    }
  };
  const getPosts = async () => {
    setIsLoading(true);
    try {
      const {
        status,
        data: { posts },
      } = await getAllPostsService();
      if (status === 200) {
        dispatch({ type: "GET_ALL_POSTS", payload: posts });
      }
      setIsLoading(false);
    } catch (error) {
      setError(error);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getPosts();
  }, []);
  return (
    <PostContext.Provider
      value={{
        state,
        dispatch,
        isLoading,
        error,
        likePostHandler,
        dislikePostHandler,
        addPostCommentHandler,
        editUserComment,
        deleteUserComment,
        sortBy,
        setSortBy,
        addUserPost,
        editUserPost,
        deleteUserPost,
      }}
    >
      {children}
    </PostContext.Provider>
  );
};

const usePosts = () => useContext(PostContext);

export { PostProvider, usePosts };
