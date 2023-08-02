import { useState } from "react";
import { MdOutlineCancel, BiImageAdd, BsEmojiSmile } from "../../asset/icons";
import EmojiPicker from "emoji-picker-react";
import { usePosts } from "../../contexts/post-context";
import { useAuth } from "../../contexts/auth-context";

function CreatePostModal({ setShowModal }) {
  const [postContent, setPostContent] = useState("");
  const [selectedImage, setSelectedImage] = useState(null);
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  const { currentUser } = useAuth();
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
    setShowModal(false)
  };

  const isPostButtonDisabled = postContent.trim() === "";
  return (
    <div className="sm:w-[26rem] w-[18rem]  p-2 border rounded-lg ">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-semibold text-center">Create Post</h1>
        <button className="text-2xl font-semibold" onClick={()=>setShowModal(false)}>X</button>
      </div>
      <form className="flex flex-col gap-6 mt-6" onSubmit={postSubmitHandler}>
        <div className="flex gap-2">
          <img
            src="https://res.cloudinary.com/drre76xpz/image/upload/v1687251189/GettyImages-1408550650-766cd614126049f38f5bd460f823587f_ifc2t3_bgv8v9.webp"
            alt=""
            className="w-10 h-10 rounded-full"
          />
          <textarea
            placeholder="What's is in your mind?"
            className=" w-full h-28 border border-gray-400 p-2 rounded-lg resize-none focus:outline-orange"
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
              <MdOutlineCancel
                size="25"
                onClick={() => setSelectedImage(null)}
              />
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
    </div>
  );
}

export default CreatePostModal;
