import { useState } from "react";
import { BiImageAdd } from "react-icons/bi";
import { useUser } from "../../contexts/user-context";

const EditUserDetails = ({ setShowModal, user }) => {
  const { editUserDataHandler } = useUser();
  const { firstName, lastName, bio, avatarURL } = user;
  const [formData, setFormData] = useState({
    firstName,
    lastName,
    bio,
    avatarURL,
    selectedImage: "",
  });

  const formDataInputHandler = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleImageSelect = () => {
    const input = document.createElement("input");
    input.type = "file";
    input.accept = "image/*";
    input.onchange = (event) => {
      const file = event.target.files[0];
      const imageUrl = URL.createObjectURL(file);
      setFormData({ ...formData, selectedImage: imageUrl });
    };
    input.click();
  };

  const dataUpdateHandler = (event) => {
    event.preventDefault();
    const updatedUserData = {
      ...formData,
      _id: user?._id,
      username: user?.username,
      avatarURL: formData.selectedImage || user?.avatarURL,
    };
    editUserDataHandler(updatedUserData);
    setShowModal(false);
  };

  return (
    <div className="w-[24rem]  py-2 px-4 border rounded-lg">
      <h1 className="text-2xl font-semibold text-center mb-6">Edit Profile</h1>
      <form
        className="flex flex-wrap justify-center items-center gap-2"
        onSubmit={dataUpdateHandler}
      >
        <div className="relative">
          {formData?.selectedImage ? (
            <img
              src={formData.selectedImage}
              alt=""
              className="h-16 w-16 rounded-full text-center"
            />
          ) : (
            <img
              src={formData.avatarURL}
              alt=""
              className="h-16 w-16 rounded-full text-center"
            />
          )}
          <label
            className="absolute top-9 right-0  rounded-full p-1 cursor-pointer"
            onClick={handleImageSelect}
          >
            <BiImageAdd size="30" className="bg-white rounded-full p-1" />
          </label>
        </div>
        <div className="flex justify-between flex-wrap w-full mt-2">
          <div htmlFor="first-name" className="flex  flex-col gap-1">
            <label className="font-semibold">First Name:</label>
            <input
              required
              type="text"
              id="first-name"
              name="firstName"
              value={formData.firstName}
              className="block w-full p-1  sm:text-sm border border-black
             outline-orange rounded-md"
              onChange={formDataInputHandler}
            />
          </div>

          <div htmlFor="last-name" className="flex  flex-col gap-1">
            <label className="font-semibold">Last Name:</label>
            <input
              required
              type="text"
              id="last-name"
              name="lastName"
              value={formData.lastName}
              className="block w-full p-1 sm:text-sm border border-black
             outline-orange rounded-md"
              onChange={formDataInputHandler}
            />
          </div>
        </div>

        <div htmlFor="bio" className="flex flex-col gap-1 w-full">
          <label className="font-semibold">Bio</label>
          <textarea
            id="bio"
            name="bio"
            value={formData.bio}
            className="border border-black w-full h-20 rounded-md focus:outline-orange"
            onChange={formDataInputHandler}
          ></textarea>
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
            Update
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditUserDetails;
