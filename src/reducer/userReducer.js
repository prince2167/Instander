export const initialUserState = {
  users: [],
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
    default:
      return state;
  }
};
