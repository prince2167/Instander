import axios from "axios";

const getAllUsers = () => axios.get("/api/users");

const getUserByUsername = (username) => axios.get(`/api/users/${username}`);

const editUserData = (userData, token) =>
  axios.post(
    `/api/users/edit`,
    { userData },
    {
      headers: { authorization: token },
    }
  );

const getBookmarks = (token) =>
  axios.get(`/api/users/bookmark`, {
    headers: { authorization: token },
  });

const bookmarkPost = (postId, token) =>
  axios.post(
    `/api/users/bookmark/${postId}`,
    {},
    {
      headers: { authorization: token },
    }
  );

const unBookmarkPost = (postId, token) =>
  axios.post(
    `/api/users/remove-bookmark/${postId}`,
    {},
    {
      headers: { authorization: token },
    }
  );

const followUserServices = (followUserId, token) =>
  axios.post(
    `/api/users/follow/${followUserId}`,
    {},
    {
      headers: { authorization: token },
    }
  );

const unFollowUserServices = (followUserId, token) =>
  axios.post(
    `/api/users/unfollow/${followUserId}`,
    {},
    {
      headers: { authorization: token },
    }
  );

export {
  getAllUsers,
  getUserByUsername,
  editUserData,
  getBookmarks,
  bookmarkPost,
  unBookmarkPost,
  followUserServices,
  unFollowUserServices,
};
