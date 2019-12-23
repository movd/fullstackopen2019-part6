const initialState = null;

const notificationReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_NOTIFICATION":
      console.log(action.data);
      const newState = action.data.content;
      return newState;
    default:
      return state;
  }
};

export default notificationReducer;

export const setNotification = content => {
  console.log("ACTION CREATOR");
  return {
    type: "SET_NOTIFICATION",
    data: { content }
  };
};
