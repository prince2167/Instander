import { NavLink } from "react-router-dom";
import {
  AiOutlineHome,
  RiRocketLine,
  BsBookmark,
  IoIosNotificationsOutline,
  CgProfile,
  CgAddR,
  BsThreeDots,
} from "../../asset/icons";
import { useAuth } from "../../contexts/auth-context";
const Sidebar = () => {
  const { currentUser } = useAuth();
  const isActiveClass = ({ isActive }) =>
    `sidebar flex items-center text-lg mt-1 py-1.5 rounded-full px-4 hover:bg-isactiveColor w-full  ${
      isActive && "bg-isactiveColor font-semibold text-orange"
    }`;

  return (
    <div className=" h-128  flex flex-col justify-between w-1/4">
      <div className=" flex flex-col gap-2  mx-8 my-4">
        <NavLink to="/" className={isActiveClass}>
          <AiOutlineHome size="25" className="mr-4" />
          Home
        </NavLink>

        <NavLink to="/explore" className={isActiveClass}>
          <RiRocketLine size="25" className="mr-4" />
          Explore
        </NavLink>

        <NavLink to="/bookmarks" className={isActiveClass}>
          <BsBookmark size="22" className="mr-4" />
          Bookmarks
        </NavLink>

        <NavLink to="/likedPost" className={isActiveClass}>
          <IoIosNotificationsOutline size="25" className="mr-4" />
          Liked Post
        </NavLink>

        <NavLink
          to={`/profile/${currentUser?.username}`}
          className={isActiveClass}
        >
          <CgProfile size="25" className="mr-4" />
          Profile
        </NavLink>

        <button className="flex align-center justify-center gap-4 mt-6 bg-orange text-white px-4 py-2 rounded-full">
          <CgAddR size={25} />
          <span className="text-lg">Create a new Post</span>
        </button>
      </div>

      <div className=" flex justify-between items-center	 mx-8 my-4">
        <div>
          <p>Prince Singh</p>
          <span className="text-gray-400 text-sm">@me_princesingh</span>
        </div>

        <BsThreeDots size="25" className="cursor-pointer" />
      </div>
    </div>
  );
};

export default Sidebar;
