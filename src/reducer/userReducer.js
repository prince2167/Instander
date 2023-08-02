export const initialUserState = {
  users: [],
  bookmarks: [],
  userDetails: {},
};

export const userReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case "GET_ALL_USERS": {
      return {
        ...state,
        users: payload,
      };
    }
    case "GET_USER_DETAILS": {
      return {
        ...state,
        userDetails: payload,
      };
    }
    case "GET_USER_DETAILS": {
      return {
        ...state,
        userDetails: payload,
      };
    }
    case "GET_ALL_BOOKMARKS": {
      return {
        ...state,
        bookmarks: payload,
      };
    }
    case "ADD_BOOKMARK": {
      return {
        ...state,
        bookmarks: payload,
      };
    }
    case "UNBOOKMARK_POST": {
      return {
        ...state,
        bookmarks: payload,
      };
    }
    case "UPDATE_FOLLOW_USER": {
      return {
        ...state,
        users: state.users.map((user) => {
          const updatedUser = payload?.find(({ _id }) => _id === user._id);
          return updatedUser ? updatedUser : user;
        }),
      };
    }
    default:
      return state;
  }
};
