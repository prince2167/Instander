import axios from "axios";

const getAllPostsService = async () => await axios.get("/api/posts");

const getPostsByUserName = (username) =>
  axios.get(`/api/posts/user/${username}`);

const addPost = (postData, token) => {
  return axios.post(
    "/api/posts",
    { postData },
    {
      headers: { authorization: token },
    }
  );
};

const deletePost = async (postId,token) => {
  try {
    const response = await axios.delete(`/api/posts/${postId}`, {
      headers: { authorization: token },
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};

const editPost = (postData,token) =>
  axios.post(
    `/api/posts/edit/${postData._id}`,
    { postData },
    {
      headers: { authorization: token},
    }
  );

const likePost = async (postId, token) =>
  await axios.post(
    `/api/posts/like/${postId}`,
    {},
    {
      headers: { authorization: token },
    }
  );

const dislikePost = (postId, token) =>
  axios.post(
    `/api/posts/dislike/${postId}`,
    {},
    {
      headers: { authorization: token },
    }
  );

export {
  getAllPostsService,
  getPostsByUserName,
  addPost,
  deletePost,
  editPost,
  likePost,
  dislikePost,
};
