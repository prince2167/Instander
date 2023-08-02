import { createContext, useContext, useState } from "react";
import { loginService, signupService } from "../services/authServices";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";


const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const navigate = useNavigate();

  const localStorageToken = JSON.parse(localStorage.getItem("loginDetails"));

  const [token, setToken] = useState(localStorageToken?.token || "");
  const [currentUser, setCurrentUser] = useState(
    localStorageToken?.user || null
  );
  const [isloading, setIsLoading] = useState(false);

  const loginAsGuestHandler = async () => {
    const userData = {
      username: "me_princesingh",
      password: "prince@2167",
    };
    const response = await loginService(userData);
    const {
      status,
      data: { encodedToken, foundUser },
    } = response;
    if (status === 200 || status === 201) {
      localStorage.setItem(
        "loginDetails",
        JSON.stringify({ token: encodedToken, user: foundUser })
      );
      setToken(encodedToken);
      setCurrentUser(foundUser);
      navigate("/");
    }
  };

  const loginHandler = async (formData) => {
    setIsLoading(true);
    try {
      const response = await loginService(formData);
      const {
        status,
        data: { encodedToken, foundUser },
      } = response;
      if (status === 200 || status === 201) {
        localStorage.setItem(
          "loginDetails",
          JSON.stringify({ token: encodedToken, user: foundUser })
        );
        setToken(encodedToken);
        setCurrentUser(foundUser);
        toast.success(`Welcome back, ${foundUser.firstName}!👋`);
        navigate("/");
        setIsLoading(false);
      }
    } catch (error) {
      toast.error("Invalid username and password");
      setIsLoading(false);
    }
  };

  const signupHandler = async (formData) => {
    setIsLoading(true);

    try {
      const response = await signupService(formData);
      const {
        status,
        data: { encodedToken, createdUser },
      } = response;

      if (status === 200 || status === 201) {
        localStorage.setItem(
          "loginDetails",
          JSON.stringify({ user: createdUser, token: encodedToken })
        );
        setToken(encodedToken);
        setCurrentUser(createdUser);

        toast.success(`Hey! ${createdUser.firstName} 👋`);
        navigate("/");
        setIsLoading(false);
      }
    } catch (error) {
      toast.error("There was an error signing you up");
      setIsLoading(false);
    }
  };

  const logoutHandler = () => {
    localStorage.removeItem("loginDetails");
    setToken(null);
    setCurrentUser(null);
    toast.success("Logged out successfully!");
    navigate("/login");
  };
  return (
    <AuthContext.Provider
      value={{
        token,
        currentUser,
        setCurrentUser,
        isloading,
        signupHandler,
        loginHandler,
        loginAsGuestHandler,
        logoutHandler,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => useContext(AuthContext);

export { AuthProvider, useAuth };
