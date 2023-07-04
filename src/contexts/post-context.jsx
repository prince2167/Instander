import { initialState, postReducer } from "../reducer/PostReducer";
import { getAllPostsService } from "../services/postServices";
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
    <PostContext.Provider value={{ state, dispatch, isLoading, error }}>
      {children}
    </PostContext.Provider>
  );
};

const usePosts = () => useContext(PostContext);

export { PostProvider, usePosts };
