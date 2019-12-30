import anecdoteService from "../services/anecdotes";

const anecdoteReducer = (state = [], action) => {
  switch (action.type) {
    case "VOTE":
      const id = action.data.id;
      const anecdoteToChange = state.find(a => a.id === id);
      console.log("vote for", anecdoteToChange);
      const changedAnecdote = {
        ...anecdoteToChange,
        votes: anecdoteToChange.votes + 1
      };
      // Return array of anecdotes where at the index of anecdoteToChange the new one is inserted
      return state.map(a => (a.id !== id ? a : changedAnecdote));
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

export const vote = id => {
  return { type: "VOTE", data: { id } };
};

export const generateId = () => Number((Math.random() * 1000000).toFixed(0));

export const createAnecdote = data => {
  return {
    type: "NEW_ANECDOTE",
    data
  };
};

export const initializeAnecdotes = anecdotes => {
  return async dispatch => {
    const anecdotes = await anecdoteService.getAll();
    dispatch({ type: "INIT_ANECDOTES", data: anecdotes });
  };
};
