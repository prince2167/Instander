import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";
/**
 * User Database can be added here.
 * You can add default users of your wish with different attributes
 * */

export const users = [
  {
    _id: uuid(),
    firstName: "Prince",
    lastName: "Singh",
    username: "me_princesingh",
    password: "prince@2167",
    bio: " Frontend Developer 💻, tech enthusiast",
    avatarURL:
      "https://res.cloudinary.com/drre76xpz/image/upload/v1687251189/GettyImages-1408550650-766cd614126049f38f5bd460f823587f_ifc2t3_bgv8v9.webp",
    createdAt: new Date(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    firstName: "Aarohi",
    lastName: "Sharma",
    username: "aarohii",
    password: "aarohi@7890",
    bio: "Web Designer 🎨🌈.Creating digital masterpieces with colors and imagination🎨✨",
    avatarURL:
      "https://res.cloudinary.com/drre76xpz/image/upload/v1687246802/photo-1494790108377-be9c29b29330_tqxd5y_hkfljz_l1sks8.jpg",
    createdAt: new Date(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    firstName: "Jenny",
    lastName: "Anderson",
    username: "jenny_anderson",
    password: "jenny@123",
    bio: "Actress",
    avatarURL:
      "https://res.cloudinary.com/drre76xpz/image/upload/v1687252602/photo-1603632731968-e057fb16c76a_vwngww_gtyqrj.jpg",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    firstName: "Will",
    lastName: "smith",
    username: "will_smith",
    password: "will@1234",
    bio: "Musician 🎵🎸. Composing music that touches hearts 🎶✨",
    avatarURL:
      "https://res.cloudinary.com/drre76xpz/image/upload/v1687247119/photo-1615109398623-88346a601842_uo9khv_ha61mb.jpg",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    firstName: "Miranda",
    lastName: "Cohen",
    username: "mirandacohen",
    password: "miranda@1235",
    bio: "Athlete, 5 times national champion 🏋‍♂️🏆",
    avatarURL:
      "https://res.cloudinary.com/drre76xpz/image/upload/v1687253546/314743852_114573721458926_3145459342703460988_n.jpg_pzqlrt_vkqow1.jpg",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
];
