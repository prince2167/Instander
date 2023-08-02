import { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../contexts/auth-context";
import { toast } from "react-hot-toast";
const LoginForm = () => {
  const [userLoginDetails, setUserLoginDetails] = useState({
    username: "",
    password: "",
  });
  const { loginHandler, loginAsGuestHandler } = useAuth();

  const guestLoginHandler = () => {
    const guestUserDetails = {
      username: "me_princesingh",
      password: "prince@2167",
    };
    setUserLoginDetails(guestUserDetails);
    loginAsGuestHandler(guestLoginHandler);
  };
  const loginFormHandler = (event) => {
    event.preventDefault();
    if (userLoginDetails.username === "" && userLoginDetails.password === "") {
      toast.error("Please fill all inputfields");
    } else {
      loginHandler(userLoginDetails);
    }
  };
  return (
    <div className="max-w-md w-full  p-6 shadow-xl hover:shadow-2xl mx-2 border-2  sm:0 ">
      <div className="flex items-center justify-center gap-4 mb-4">
        <img
          src="https://res.cloudinary.com/drre76xpz/image/upload/v1687520238/1005491_qrzn8x.png"
          alt=""
          className="w-14"
        />
        <h1 className="font-bold text-transparent text-3xl bg-clip-text bg-gradient-to-r from-lightBlue to-orange">
          Instander
        </h1>
      </div>

      <form className="flex flex-col gap-3" onSubmit={loginFormHandler}>
        <div className="flex  flex-col gap-1">
          <label htmlFor="username">Username</label>
          <input
            required
            type="text"
            id="username"
            value={userLoginDetails.username}
            onChange={(event) =>
              setUserLoginDetails({
                ...userLoginDetails,
                username: event.target.value,
              })
            }
            className="block w-full p-2 sm:text-sm border border-black
             outline-orange rounded-md"
          />
        </div>

        <div className="flex  flex-col gap-1">
          <label htmlFor="password">Password</label>
          <input
            required
            type="password"
            id="password"
            value={userLoginDetails.password}
            onChange={(event) =>
              setUserLoginDetails({
                ...userLoginDetails,
                password: event.target.value,
              })
            }
            className="block w-full p-2 sm:text-sm border border-black
             outline-orange rounded-md"
          />
        </div>

        <div className="flex flex-col gap-3 my-6">
          <button
            type="submit"
            className=" bg-orange text-lg text-white py-2 rounded-md"
          >
            Login
          </button>
          <button
            onClick={guestLoginHandler}
            className=" py-2 text-lg  text-md border border-orange rounded-md"
          >
            Login as guest
          </button>
        </div>

        <span className="text-center">
          Don't have an account?{" "}
          <Link to="/signup" className="text-orange">
            Create one
          </Link>
        </span>
      </form>
    </div>
  );
};

export default LoginForm;
