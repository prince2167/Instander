import { useRef, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/auth-context";
import { Modal, CreatePostModal } from "../index";
import { useClickOutside } from "../../hooks/useClickOutside";
import {
  AiOutlineHome,
  RiRocketLine,
  BsBookmark,
  IoIosNotificationsOutline,
  CgProfile,
  CgAddR,
  BsThreeDots,
  FiLogOut,
} from "../../asset/icons";

const Sidebar = () => {
  const [showCreatePostModal, setShowCreatePostModal] = useState(false);
  const [logoutOption, setLogoutOption] = useState(false);
  const { currentUser, logoutHandler } = useAuth();

  const navigate = useNavigate();

  const clickRef = useRef();
  useClickOutside(clickRef, () => {
    setLogoutOption(false);
  });

  const isActiveClass = ({ isActive }) =>
    `sidebar flex items-center text-lg mt-1 py-1.5 rounded-full px-4 hover:bg-isactiveColor w-full  ${
      isActive && "bg-isactiveColor font-semibold text-orange"
    }`;

  return (
    <>
      <aside className="hidden  xl:h-128 xl:flex  flex-col justify-between w-1/4 sticky top-20">
        <div className=" flex flex-col gap-2  mx-8 my-2">
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

          <button
            className="flex align-center justify-center gap-4 mt-6 bg-orange text-white px-4 py-2 rounded-full"
            onClick={() => setShowCreatePostModal(true)}
          >
            <CgAddR size={25} />
            <span className="text-lg">Create a new Post</span>
          </button>
        </div>

        <div
          ref={clickRef}
          className=" flex  justify-between items-center	 mx-8 my-4"
        >
          <div
            className="flex gap-2 cursor-pointer"
            onClick={() => navigate(`/profile/${currentUser?.username}`)}
          >
            {currentUser?.avatarURL ? (
              <img
                src={currentUser?.avatarURL}
                alt=""
                className="w-12 h-12 rounded-full "
              />
            ) : (
              <img
                src="https://api-private.atlassian.com/users/6b5c1609134a5887d7f3ab1b73557664/avatar"
                alt=""
                className="w-12 h-12 rounded-full "
              />
            )}
            <div className="flex flex-col relative">
              <span>
                {currentUser?.firstName} {currentUser?.lastName}
              </span>
              <span className="text-gray-400 text-sm">
                @{currentUser?.username}
              </span>
            </div>
          </div>

          <BsThreeDots
            size="25"
            className="cursor-pointer"
            onClick={() => setLogoutOption(!logoutOption)}
          />
          {logoutOption && (
            <div
              className="absolute bg-white  bottom-20 left-40 font-bold text-lg shadow-xl border py-2 px-6 flex gap-2 items-center cursor-pointer"
              onClick={logoutHandler}
            >
              <FiLogOut size="25" />
              <span>Log out</span>
            </div>
          )}
        </div>
      </aside>

      {/* ------------------------------------Navigation for mobile------------------------------------------------- */}
      <div className=" xl:hidden fixed bottom-0 z-30 inset-x-0  border-t-2 bg-white text-customOrange flex justify-between px-4 py-3">
        <span onClick={() => navigate("/")}>
          <AiOutlineHome />
        </span>
        <span onClick={() => navigate("/explore ")}>
          <RiRocketLine />
        </span>
        <span onClick={() => navigate("/bookmarks ")}>
          <BsBookmark />
        </span>
        <span onClick={() => setShowCreatePostModal(true)}>
          <CgAddR />
        </span>
        <span onClick={() => navigate("/likedPost ")}>
          <IoIosNotificationsOutline />
        </span>
        <span onClick={() => navigate(`/profile/${currentUser?.username}`)}>
          <CgProfile />
        </span>
        <span onClick={logoutHandler}>
          <FiLogOut />
        </span>
      </div>

      <Modal
        showModal={showCreatePostModal}
        setShowModal={setShowCreatePostModal}
      >
        <CreatePostModal setShowModal={setShowCreatePostModal} />
      </Modal>
    </>
  );
};

export default Sidebar;
