import { useNavigate } from "react-router-dom";
import { ShimerUserCard } from "../../ShimmerCard/ShimerUserCard";
import { useAuth } from "../../contexts/auth-context";
import { useUser } from "../../contexts/user-context";
import { Searchbar } from "../index";

const SuggestionAccountsBar = () => {
  const { userState, followUserHandler, isLoading } = useUser();
  const { users } = userState;
  const { currentUser } = useAuth();
  const navigate = useNavigate();
  const suggestionAccounts = users
    ?.filter((user) => user.username !== currentUser?.username)
    ?.filter(
      (user) =>
        !currentUser?.following.find(
          (account) => account.username === user.username
        )
    );

  if (isLoading) return <ShimerUserCard />;
  return (
    <div className="  hidden xl:flex xl:flex-col w-1/3 sticky top-24">
      <Searchbar />
      <div className=" mx-10 my-5 flex flex-col gap-4 border border-gray-300 shadow-lg py-2 rounded-md  ">
        <h1 className="text-md ml-2  font-semibold">Who to follow?</h1>
        {suggestionAccounts?.map((user) => (
          <div
            onClick={() => navigate(`/profile/${user?.username}`)}
            key={user._id}
            className="flex justify-between items-center flex-wrap px-2 py-2 cursor-pointer"
          >
            <div className="flex gap-2 items-center">
              <img
                src={user?.avatarURL}
                alt=""
                className="h-12 w-12 rounded-full"
              />
              <div>
                <span className="font-semibold">
                  {user?.firstName} {user?.lastName}
                </span>
                <p>{user?.username}</p>
              </div>
            </div>
            <button
              className="bg-orange text-white px-4 py-1 rounded-lg cursor-pointer"
              onClick={(event) => {
                event.stopPropagation();
                followUserHandler(user?._id);
              }}
            >
              Follow
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SuggestionAccountsBar;
