import { useState } from "react";
import { MdOutlineCancel, BiImageAdd, BsEmojiSmile } from "../../asset/icons";
import EmojiPicker from "emoji-picker-react";
import { usePosts } from "../../contexts/post-context";

const CreatePost = ({ currentUser }) => {
  const [postContent, setPostContent] = useState("");
  const [selectedImage, setSelectedImage] = useState(null);
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  const { addUserPost } = usePosts();
  
 
  const handleImageSelect = () => {
    const input = document.createElement("input");
    input.type = "file";
    input.accept = "image/*";
    input.onchange = (event) => {
      const file = event.target.files[0];
      const imageUrl = URL.createObjectURL(file);
      setSelectedImage(imageUrl);
    };
    input.click();
  };

  const handleEmojiClick = (emojiObj) => {
    const emoji = emojiObj.emoji;
    const updatedContent = postContent + emoji;
    setPostContent(updatedContent);
    setShowEmojiPicker(false);
  };

  const postSubmitHandler = (event) => {
    event.preventDefault();
    const postData = {
      comments:[],
      content: postContent,
      mediaURL: selectedImage,
      userId: currentUser._id,
    };

    addUserPost(postData);

    setPostContent("");
    setSelectedImage(null);
    setShowEmojiPicker(false);
  };

  const isPostButtonDisabled = postContent.trim() === "";
  return (
    <form
      className="w-full  border-gray-300  mt-5 py-4 px-6 border rounded-lg shadow-lg h-full"
      onSubmit={postSubmitHandler}
    >
      <div className="flex gap-4">
        <img
          src="https://res.cloudinary.com/drre76xpz/image/upload/v1687251189/GettyImages-1408550650-766cd614126049f38f5bd460f823587f_ifc2t3_bgv8v9.webp"
          alt=""
          className="w-10 h-10 rounded-full"
        />
        <textarea
          placeholder="What's is in your mind?"
          className=" w-full h-28 border-none rounded-lg resize-none focus:outline-none"
          value={postContent}
          onChange={(event) => setPostContent(event.target.value)}
        ></textarea>
      </div>

      {selectedImage && (
        <div className="relative w-[12rem] mb-4">
          <img
            src={selectedImage}
            alt="Image"
            className="object-cover rounded-md h-full"
          />
          <button className="absolute top-1 right-1">
            <MdOutlineCancel size="25" onClick={() => setSelectedImage(null)} />
          </button>
        </div>
      )}

      <div className="flex justify-between">
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

        <button
          type="submit"
          className={`bg-orange text-white font-semibold py-1 px-8 text-xl rounded-full ${
            isPostButtonDisabled ? " opacity-60 cursor-not-allowed" : ""
          }`}
        >
          Post
        </button>
      </div>
    </form>
  );
};

export default CreatePost;
