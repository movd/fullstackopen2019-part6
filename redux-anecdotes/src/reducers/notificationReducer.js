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

export const setNotification = (content, timeoutSeconds) => {
  return async dispatch => {
    dispatch({
      type: "SET_NOTIFICATION",
      data: { content }
    });
    setTimeout(() => {
      dispatch({
        type: "SET_NOTIFICATION",
        data: { content: null }
      });
    }, timeoutSeconds * 1000);
  };
};
