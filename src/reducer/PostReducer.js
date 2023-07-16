export const initialState = {
  posts: [],
};

export const postReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case "GET_ALL_POSTS": {
      return {
        ...state,
        posts: payload,
      };
    }
    case "CREATE_NEW_POST": {
      return {
        ...state,
        posts: payload,
      };
    }
    case "EDITED_POSTS": {
      return {
        ...state,
        posts: payload,
      };
    }
    case "DELETE_POST": {
      return {
        ...state,
        posts: payload,
      };
    }
    case "LIKE_POST": {
      return {
        ...state,
        posts: payload,
      };
    }
    case "DISLIKE_POST": {
      return {
        ...state,
        posts: payload,
      };
    }
    default: {
      return state;
    }
  }
};
