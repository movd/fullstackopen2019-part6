import anecdoteService from "../services/anecdotes";

const anecdoteReducer = (state = [], action) => {
  switch (action.type) {
    case "VOTE":
      const id = action.data.id;
      // Return array of anecdotes where at the index of anecdoteToChange the new one is inserted
      return state.map(a => (a.id !== id ? a : action.data));
    case "NEW_ANECDOTE":
      console.log(action.data);
      return [...state, action.data];
    case "INIT_ANECDOTES":
      return action.data;
    default:
      return state;
  }
};

export default anecdoteReducer;

export const vote = anecdoteObject => {
  return async dispatch => {
    const updatedAnecdoteObject = await anecdoteService.update({
      ...anecdoteObject,
      votes: anecdoteObject.votes + 1
    });
    console.log(updatedAnecdoteObject);
    dispatch({ type: "VOTE", data: updatedAnecdoteObject });
  };
};

export const createAnecdote = content => {
  return async dispatch => {
    const newAnecdoteObject = await anecdoteService.createNew(content);
    dispatch({
      type: "NEW_ANECDOTE",
      data: newAnecdoteObject
    });
  };
};

export const initializeAnecdotes = () => {
  return async dispatch => {
    const anecdotes = await anecdoteService.getAll();
    dispatch({ type: "INIT_ANECDOTES", data: anecdotes });
  };
};
