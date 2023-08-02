import axios from "axios";

const getComments = (postId) => axios.get(`/api/comments/${postId}`);

const addComment = async (postId, commentData, token) =>
  await axios.post(
    `/api/comments/add/${postId}`,
    { commentData },
    { headers: { authorization: token } }
  );
const editComment = (postId, commentId, commentData, token) =>
  axios.post(
    `/api/comments/edit/${postId}/${commentId}`,
    { commentData },
    {
      headers: { authorization: token },
    }
  );

const deleteComment = (postId, commentId, token) =>
  axios.delete(`/api/comments/delete/${postId}/${commentId}`, {
    headers: { authorization: token },
  });

export { getComments, addComment, editComment, deleteComment };
