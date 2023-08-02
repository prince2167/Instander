import { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../contexts/auth-context";
import { toast } from "react-hot-toast";
const SignupForm = () => {
  const { signupHandler } = useAuth();

  const [userDetails, setUserDetails] = useState({
    firstName: "",
    lastName: "",
    email: "",
    username: "",
    password: "",
    confirmPassword: "",
  });
  const signupSubmitHandler = (event) => {
    event.preventDefault();
    if (userDetails.password !== userDetails.confirmPassword) {
      toast.error("Your password and confirmation password do not match.");
    } else {
      signupHandler(userDetails);
    }
  };
  return (
    <div className="max-w-md w-full p-6 shadow-xl hover:shadow-2xl border-2 m-2 sm:0">
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

      <form
        className=" flex gap-3 flex-col items-center"
        onSubmit={signupSubmitHandler}
      >
        <div className="flex justify-between flex-wrap w-full">
          <div htmlFor="first-name" className="flex  flex-col gap-1">
            <label>First Name:</label>
            <input
              required
              type="text"
              id="first-name"
              value={userDetails.firstName}
              onChange={(event) =>
                setUserDetails({
                  ...userDetails,
                  firstName: event.target.value,
                })
              }
              className="block w-full  p-2 sm:text-sm border border-black
             outline-orange rounded-md"
            />
          </div>

          <div htmlFor="last-name" className="flex  flex-col gap-1">
            <label>Last Name:</label>
            <input
              required
              type="text"
              id="last-name"
              value={userDetails.lastName}
              onChange={(event) =>
                setUserDetails({ ...userDetails, lastName: event.target.value })
              }
              className="block w-full p-2 sm:text-sm border border-black
             outline-orange rounded-md"
            />
          </div>
        </div>

        <div className="flex  flex-col gap-1 w-full">
          <label htmlFor="email">Email:</label>
          <input
            required
            type="email"
            id="email"
            value={userDetails.email}
            onChange={(event) =>
              setUserDetails({ ...userDetails, email: event.target.value })
            }
            className="block w-full p-2 sm:text-sm border border-black
             outline-orange rounded-md"
          />
        </div>

        <div className="flex  flex-col gap-1 w-full">
          <label htmlFor="username">Username:</label>
          <input
            required
            type="text"
            id="username"
            value={userDetails.username}
            onChange={(event) =>
              setUserDetails({ ...userDetails, username: event.target.value })
            }
            className="block w-full p-2 sm:text-sm border border-black
             outline-orange rounded-md"
          />
        </div>

        <div className="flex justify-between flex-wrap w-full">
          <div className="flex  flex-col gap-1">
            <label htmlFor="password">Password:</label>
            <input
              required
              type="password"
              id="password"
              value={userDetails.password}
              onChange={(event) =>
                setUserDetails({ ...userDetails, password: event.target.value })
              }
              className="block w-full p-2 sm:text-sm border border-black
             outline-orange rounded-md"
            />
          </div>

          <div className="flex  flex-col gap-1">
            <label htmlFor="confirm-password">Confirm Password:</label>
            <input
              required
              type="password"
              id="confirm-password"
              value={userDetails.confirmPassword}
              onChange={(event) =>
                setUserDetails({
                  ...userDetails,
                  confirmPassword: event.target.value,
                })
              }
              className="block w-full p-2 sm:text-sm border border-black
             outline-orange rounded-md"
            />
          </div>
        </div>

        <button
          type="submit"
          className=" bg-orange text-lg text-white py-2 rounded-md my-6 w-full"
        >
          Signup
        </button>

        <span className="text-center w-full">
          Already have an account?{" "}
          <Link to="/login" className="text-orange">
            Log in
          </Link>
        </span>
      </form>
    </div>
  );
};

export default SignupForm;
