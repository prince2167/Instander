import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";

/**
 * Posts can be added here.
 * You can add default posts of your wish with different attributes
 * */

export const posts = [
  {
    _id: uuid(),
    content: "The climate we expected, the weather is what we got",
    mediaURL:
      "https://res.cloudinary.com/drre76xpz/image/upload/v1687243803/photo-1516406742981-2b7d67ec4ae8_rnlr3q.jpg",
    likes: {
      likeCount: 10,
      likedBy: [],
      dislikedBy: [],
    },
    comments: [
      {
        _id: uuid(),
        username: "Aarohi",
        avatarURL:
          "https://res.cloudinary.com/drre76xpz/image/upload/v1687246802/photo-1494790108377-be9c29b29330_tqxd5y_hkfljz_l1sks8.jpg",
        text: "I love the rain. It's my favorite weather.",
      },
      {
        _id: uuid(),
        username: "John Doe",
        avatarURL:
          "https://res.cloudinary.com/drre76xpz/image/upload/v1687247119/photo-1615109398623-88346a601842_uo9khv_ha61mb.jpg",
        text: "There is no better smell than earth after a heavy rain.",
      },
    ],
    username: "me_princesingh", 
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },

  {
    _id: uuid(),
    content: "Wanderlust + highway dust",
    mediaURL:
      "https://res.cloudinary.com/drre76xpz/image/upload/v1687244509/photo-1468818438311-4bab781ab9b8_vklspv.jpg",
    likes: {
      likeCount: 12,
      likedBy: [],
      dislikedBy: [],
    },
    comments: [
      {
        _id: uuid(),
        username: "me_princesingh",
        avatarURL:
          "https://res.cloudinary.com/drre76xpz/image/upload/v1687251189/GettyImages-1408550650-766cd614126049f38f5bd460f823587f_ifc2t3_bgv8v9.webp",
        text: "Happy journey",
      },
    ],
    username: "aarohi",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },

  {
    _id: uuid(),
    content:
      "Don't complicate things. Sit back and enjoy every moment of life with your friends.",
    mediaURL:
      "https://res.cloudinary.com/drre76xpz/image/upload/v1687245521/photo-1511988617509-a57c8a288659_qxnjz3.jpg",
    likes: {
      likeCount: 10,
      likedBy: [],
      dislikedBy: [],
    },
    comments: [
      {
        _id: uuid(),
        username: "me_princesingh",
        avatarURL:
          "https://res.cloudinary.com/drre76xpz/image/upload/v1687251189/GettyImages-1408550650-766cd614126049f38f5bd460f823587f_ifc2t3_bgv8v9.webp",
        text: "The secret of life is enjoying with your friends..",
      },
    ],
    username: "",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },

  {
    _id: uuid(),
    content:
      "By choosing healthy over junk food, you are choosing self-love over self-judgment.",
    mediaURL:
      "https://res.cloudinary.com/drre76xpz/image/upload/v1687244561/cld-sample-4_pathn7.jpg",
    likes: {
      likeCount: 6,
      likedBy: [],
      dislikedBy: [],
    },
    comments: [
      {
        _id: uuid(),
        username: "jenny_anderson",
        avatarURL:
          "https://res.cloudinary.com/drre76xpz/image/upload/v1687246398/photo-1603632731968-e057fb16c76a_vwngww_noq58w.jpg",
        text: "Eating healthy food is good for our health.",
      },
    ],
    username: "will_smith",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },

  {
    _id: uuid(),
    content: "Caffeine- it maintains my sunny personality.",
    mediaURL:
      "https://res.cloudinary.com/drre76xpz/image/upload/v1687243056/photo-1453614512568-c4024d13c247_e0da55.jpg",
    likes: {
      likeCount: 15,
      likedBy: [],
      dislikedBy: [],
    },
    comments: [
      {
        _id: uuid(),
        username: "aarohii",
        avatarURL:
          "https://res.cloudinary.com/drre76xpz/image/upload/v1687246802/photo-1494790108377-be9c29b29330_tqxd5y_hkfljz_l1sks8.jpg",
        text: "Too much caffeine is not good for health",
      },
    ],
    username: "me_princesingh",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },

  {
    _id: uuid(),
    content: "Drinking is fun! It makes me feel horrible and sexy!",
    mediaURL:
      "https://res.cloudinary.com/drre76xpz/image/upload/v1687245737/photo-1566417713940-fe7c737a9ef2_j5udw7_wbunmd.jpg",
    likes: {
      likeCount: 10,
      likedBy: [],
      dislikedBy: [],
    },
    comments: [
      {
        _id: uuid(),
        username: "will_smith",
        avatarURL:
          "https://res.cloudinary.com/drre76xpz/image/upload/v1687247119/photo-1615109398623-88346a601842_uo9khv_ha61mb.jpg",
        text: "Candy is dandy, but liquor is quicker.",
      },
    ],
    username: "me_princesingh",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },

  {
    _id: uuid(),
    content:
      "Just attended an inspiring conference. Learned so much from the speakers! 🎓📚",
    mediaURL:
      "https://res.cloudinary.com/drre76xpz/image/upload/v1687245188/photo-1568992688065-536aad8a12f6_nanvre_pa2osb.jpg",
    likes: {
      likeCount: 6,
      likedBy: [],
      dislikedBy: [],
    },
    comments: [
      {
        _id: uuid(),
        username: "aarohii",
        avatarURL:
          "https://res.cloudinary.com/drre76xpz/image/upload/v1687247119/photo-1615109398623-88346a601842_uo9khv_ha61mb.jpg",
        text: "Conferences are a great way to gain new insights. Which conference was it?",
      },
    ],
    username: "will_smith",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },

  {
    _id: uuid(),
    content:
      "Pets is the only thing on earth that loves you more than you love yourself.",
    mediaURL:
      "https://res.cloudinary.com/drre76xpz/image/upload/v1687245260/photo-1623387641168-d9803ddd3f35_nrxz9z.jpg",
    likes: {
      likeCount: 11,
      likedBy: [],
      dislikedBy: [],
    },
    comments: [
      {
        _id: uuid(),
        username: "will_smith",
        avatarURL:
          "https://res.cloudinary.com/drre76xpz/image/upload/v1687247119/photo-1615109398623-88346a601842_uo9khv_ha61mb.jpg",
        text: "Everyone should have a pet.",
      },
    ],
    username: "jenny_anderson",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
];
