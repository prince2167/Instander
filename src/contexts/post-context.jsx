import { initialState, postReducer } from "../reducer/PostReducer";
import axios from "axios";
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
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const getPosts = async () => {
    try {
      setIsLoading(true);
      const response = await axios.get("api/posts");
      setPosts(response.data);
      setIsLoading(false);
    } catch (error) {
      setError(error.message);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getPosts();
  }, []);
  return (
    <PostContext.Provider value={{ state, dispatch, posts, isLoading, error }}>
      {children}
    </PostContext.Provider>
  );
};

const usePosts = () => useContext(PostContext);

export { PostProvider, usePosts };
