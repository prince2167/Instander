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
    default: {
      return state;
    }
  }
};
