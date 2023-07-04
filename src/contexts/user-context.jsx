import {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";
import { initialUserState, userReducer } from "../reducer/userReducer";
import { useAuth } from "./auth-context";
import { getAllUsers } from "../services/userServices";
import { toast } from "react-hot-toast";

const UserContext = createContext();

const UserProvider = ({ children }) => {
  const { currentUser, token } = useAuth();
  const [userState, userDispatch] = useReducer(userReducer, initialUserState);
  const [isLoading, setIsLoading] = useState(false);

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
    <UserContext.Provider value={{ userState, userDispatch }}>
      {children}
    </UserContext.Provider>
  );
};

const useUser = () => useContext(UserContext);

export { UserProvider, useUser };
