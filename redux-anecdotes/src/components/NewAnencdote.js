import React from "react";
import { createAnecdote } from "../reducers/anecdoteReducer";
const NewAnecdote = ({ store }) => {
  const addAnecdote = event => {
    event.preventDefault();
    const content = event.target.anecdote.value;
    event.target.anecdote.value = "";
    store.dispatch(createAnecdote(content));
    createAnecdote();
  };
  return (
    <div className="NewAnecdote">
      <h2>create new</h2>
      <form onSubmit={addAnecdote}>
        <div>
          <input name="anecdote" />
        </div>
        <button>create</button>
      </form>
    </div>
  );
};

export default NewAnecdote;
