const initialState = null;

const notificationReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_NOTIFICATION":
      const newState = action.data.content;
      return newState;
    default:
      return state;
  }
};

export default notificationReducer;

export const setNotification = content => {
  return {
    type: "SET_NOTIFICATION",
    data: { content }
  };
};

export const clearNotification = () => {
  return {
    type: "SET_NOTIFICATION",
    data: { content: null }
  };
};
