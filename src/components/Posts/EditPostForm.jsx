import { useState } from "react";
import { MdOutlineCancel, BiImageAdd, BsEmojiSmile } from "../../asset/icons";
import EmojiPicker from "emoji-picker-react";
import { useAuth } from "../../contexts/auth-context";
import { usePosts } from "../../contexts/post-context";

const EditPostForm = ({ post, setShowModal }) => {
  const [updatedPostContent, setUpdatedPostContent] = useState(post.content);
  const [updatedSelectedImage, setUpdatedSelectedImage] = useState(
    post.mediaURL
  );
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  const { editUserPost } = usePosts();

  const handleImageSelect = () => {
    const input = document.createElement("input");
    input.type = "file";
    input.accept = "image/*";
    input.onchange = (event) => {
      const file = event.target.files[0];
      const imageUrl = URL.createObjectURL(file);
      setUpdatedSelectedImage(imageUrl);
    };
    input.click();
  };

  const handleEmojiClick = (emojiObj) => {
    const emoji = emojiObj.emoji;
    const updatedContent = updatedPostContent + emoji;
    setUpdatedPostContent(updatedContent);
    setShowEmojiPicker(false);
  };

  const editPostHandler = (event) => {
    event.preventDefault();
    const updatedPost = {
      ...post,
      content: updatedPostContent,
      mediaURL: updatedSelectedImage,
    };
    editUserPost(updatedPost);
    setShowModal(false);
  };

  return (
    <div className="w-[26rem]  p-2 border rounded-lg ">
      <p className="text-2xl font-semibold text-center mb-2">Edit Post </p>

      <form onSubmit={editPostHandler}>
        <textarea
          placeholder="What's is in your mind?"
          className=" w-full h-28   rounded-lg border border-gray-400  focus:outline-orange p-2"
          value={updatedPostContent}
          onChange={(event) => setUpdatedPostContent(event.target.value)}
        ></textarea>

        {updatedSelectedImage && (
          <div className="relative w-[10rem] my-4">
            <img
              src={updatedSelectedImage}
              alt="Image"
              className="object-cover rounded-md w-full"
            />
            <button className="absolute top-1 right-1">
              <MdOutlineCancel
                size="25"
                onClick={() => setUpdatedSelectedImage(null)}
              />
            </button>
          </div>
        )}

        <div className="mt-2">
          <div className="flex gap-6 items-center">
            <BiImageAdd
              size="32"
              className="cursor-pointer"
              onClick={handleImageSelect}
            />

            <div className="relative">
              <BsEmojiSmile
                size="26"
                className="cursor-pointer"
                onClick={() => setShowEmojiPicker(!showEmojiPicker)}
              />

              {showEmojiPicker && (
                <div className="z-10 mt-2 absolute">
                  <EmojiPicker onEmojiClick={handleEmojiClick} />
                </div>
              )}
            </div>
          </div>

          <div className="flex justify-end gap-2 mt-2">
            <button
              className="border border-gray-400  font-semibold py-1 px-6 text-lg rounded-full "
              onClick={() => setShowModal(false)}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-orange text-white font-semibold py-1 px-6 text-lg rounded-full "
            >
              Save
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default EditPostForm;
