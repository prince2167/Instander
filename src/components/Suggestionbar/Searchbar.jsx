import { useState } from "react";
import { AiOutlineSearch } from "../../asset/icons";
import { useUser } from "../../contexts/user-context";
import { useNavigate } from "react-router-dom";

const Searchbar = () => {
  const { userState } = useUser();
  const { users } = userState;
  const [query, setQuery] = useState("");
  const navigate = useNavigate();
  const searchedByQuery = users.filter(
    (user) =>
      user.username.includes(query.toLowerCase()) ||
      user.firstName.includes(query.toLowerCase()) ||
      user.lastName.includes(query.toLowerCase())
  );
  return (
    <div className="mx-10 my-5 relative">
      <div className="p-4 flex items-center gap-3 bg-white rounded-t-md shadow-md border">
        <input
          className="w-full outline-none"
          type="text"
          placeholder="Search..."
          value={query}
          onChange={(event) => setQuery(event.target.value)}
        />
        <AiOutlineSearch size="22" />
      </div>
      {searchedByQuery.length > 0 && query.length > 0 ? (
        <div className="w-full absolute top-full bg-white z-40 shadow-md">
          {searchedByQuery?.map((user) => (
            <div
              onClick={() => navigate(`/profile/${user?.username}`)}
              key={user._id}
              className="p-2 flex gap-2 items-center cursor-pointer"
            >
              <img
                src={user.avatarURL}
                alt=""
                className="h-12 w-12 rounded-full"
              />
              <div>
                <span className="text-md font-semibold">
                  {user.firstName} {user.lastName}
                </span>
                <p className="text-gray-600">{user.username}</p>
              </div>
            </div>
          ))}
        </div>
      ) : (
        query.length > 0 && (
          <p className="text-center text-lg font-semibold w-full absolute top-full bg-white z-40 shadow-md py-2 ">
            User not found!
          </p>
        )
      )}
    </div>
  );
};

export default Searchbar;
