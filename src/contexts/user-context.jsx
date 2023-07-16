import {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";
import { initialUserState, userReducer } from "../reducer/userReducer";
import { useAuth } from "./auth-context";
import {
  getAllUsers,
  getBookmarks,
  bookmarkPost,
  unBookmarkPost,
  followUserServices,
  unFollowUserServices,
  getUserByUsername,
  editUserData,
} from "../services/userServices";
import { toast } from "react-hot-toast";

const UserContext = createContext();

const UserProvider = ({ children }) => {
  const { setCurrentUser, token } = useAuth();
  const [userState, userDispatch] = useReducer(userReducer, initialUserState);
  const [isLoading, setIsLoading] = useState(false);
  const [userProfileLoading, setUserProfileLoading] = useState(false);
  const [bookmarkIsLoading, setbookmarkIsLoading] = useState(false);

  const fetchUserByUsername = async (username) => {
    setUserProfileLoading(true);
    try {
      const {
        status,
        data: { user },
      } = await getUserByUsername(username);
      if (status === 200 || status === 201) {
        userDispatch({ type: "GET_USER_DETAILS", payload: user });
      }
      setUserProfileLoading(false);
    } catch (error) {
      setUserProfileLoading(false);
    }
  };

  const editUserDataHandler = async (userData) => {
    try {
      const {
        status,
        data: { user },
      } = await editUserData(userData, token);
      if (status === 201 || status === 200) {
        setCurrentUser(user);
      }
      toast.success("Pofile edited");
    } catch (error) {
      toast.error("Something went wrong");
    }
    const data = await editUserData(userData, token);
    
  };

  const followUserHandler = async (followUserId) => {
    try {
      const {
        status,
        data: { user, followUser },
      } = await followUserServices(followUserId, token);

      if (status === 200 || status === 201) {
        setCurrentUser(user);
        toast.success(`Followed @${followUser.username}`);
      }
    } catch (error) {
      toast.error("Something went wrong");
    }
  };
  const unFollowUserHandler = async (followUserId) => {
    try {
      const {
        status,
        data: { user, followUser },
      } = await unFollowUserServices(followUserId, token);
      if (status === 200 || status === 201) {
        setCurrentUser(user);
        toast.success(`Unfollowed @${followUser.username}`);
      }
    } catch (error) {
      toast.error("Something went wrong");
    }
  };
  const getAllBookMarks = async () => {
    setbookmarkIsLoading(true);
    try {
      const {
        status,
        data: { bookmarks },
      } = await getBookmarks(token);

      if (status === 200 || status === 201) {
        userDispatch({ type: "GET_ALL_BOOKMARKS", payload: bookmarks });
      }
      setbookmarkIsLoading(false);
    } catch (error) {
      console.log(error);
      setbookmarkIsLoading(false);
    }
  };
  const addBookmarkHandler = async (postId) => {
    try {
      const {
        status,
        data: { bookmarks },
      } = await bookmarkPost(postId, token);

      if (status === 200 || status === 201) {
        userDispatch({ type: "ADD_BOOKMARK", payload: bookmarks });
      }
      toast.success("Added to bookmarks.");
    } catch (error) {
      const {
        response: { status },
      } = error;
      if (status === 400) {
        toast.error("Post is already bookmarked.");
      } else {
        console.error(error);
        toast.error("Something went wrong!");
      }
    }
  };

  const unBookmarkHandler = async (postId) => {
    try {
      const {
        status,
        data: { bookmarks },
      } = await unBookmarkPost(postId, token);
      if (status === 200 || status === 201) {
        userDispatch({ type: "UNBOOKMARK_POST", payload: bookmarks });
      }
    } catch (error) {
      const {
        response: { status },
      } = error;
      if (status === 400) {
        toast.error("Post not bookmarked yet");
      } else {
        console.error(error);
        toast.error("Something went wrong!");
      }
    }
  };

  useEffect(() => {
    getAllBookMarks();
  }, [token]);

  const getUsers = async () => {
    setIsLoading(true);
    try {
      const response = await getAllUsers();
      const {
        status,
        data: { users },
      } = response;
      if (status === 200 || status === 201) {
        userDispatch({ type: "GET_ALL_USERS", payload: users });
      }
      setIsLoading(false);
    } catch (error) {
      toast.error(error.message);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getUsers();
  }, []);
  return (
    <UserContext.Provider
      value={{
        userState,
        userDispatch,
        isLoading,
        addBookmarkHandler,
        unBookmarkHandler,
        bookmarkIsLoading,
        followUserHandler,
        unFollowUserHandler,
        fetchUserByUsername,
        userProfileLoading,
        editUserDataHandler,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

const useUser = () => useContext(UserContext);

export { UserProvider, useUser };
