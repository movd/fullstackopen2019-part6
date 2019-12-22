import React from "react";
import NewAnecdote from "./components/NewAnencdote";
import { vote } from "./reducers/anecdoteReducer";

const App = ({ store }) => {
  const anecdotes = store.getState();

  return (
    <div>
      <h2>Anecdotes</h2>
      {anecdotes.map(anecdote => (
        <div key={anecdote.id}>
          <div>{anecdote.content}</div>
          <div>
            has {anecdote.votes}
            <button onClick={() => store.dispatch(vote(anecdote.id))}>
              vote
            </button>
          </div>
        </div>
      ))}
      <NewAnecdote store={store} />
    </div>
  );
};

export default App;
