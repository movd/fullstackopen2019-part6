import React from "react";
import { createAnecdote } from "../reducers/anecdoteReducer";
import { setNotification } from "../reducers/notificationReducer";
const AnecdoteForm = ({ store }) => {
  const addAnecdote = event => {
    event.preventDefault();
    const content = event.target.anecdote.value;
    event.target.anecdote.value = "";
    store.dispatch(createAnecdote(content));
    store.dispatch(setNotification(`you added '${content}'`));
    setTimeout(() => {
      store.dispatch(setNotification(null));
    }, 5000);
  };
  return (
    <div className="AnecdoteForm">
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

export default AnecdoteForm;
