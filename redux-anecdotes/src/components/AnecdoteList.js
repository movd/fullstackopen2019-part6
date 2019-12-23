import React from "react";
import { vote } from "../reducers/anecdoteReducer";
import Anecdote from "./Anecdote";
import { setNotification } from "../reducers/notificationReducer";

const AnecdoteList = ({ store }) => {
  const { anecdotes, filter } = store.getState();
  const sortedAnecdotes = anecdotes.sort((a, b) => b.votes - a.votes);

  const filteredAnecdotes = sortedAnecdotes.filter(a =>
    a.content.toLowerCase().includes(filter.toLowerCase())
  );

  const handleClick = anecdote => {
    console.log(anecdote);

    store.dispatch(vote(anecdote.id));
    store.dispatch(setNotification(`you voted '${anecdote.content}'`));
    setTimeout(() => {
      store.dispatch(setNotification(null));
    }, 5000);
  };

  return (
    <div className="AnecdoteList">
      {filteredAnecdotes.map(a => (
        <Anecdote
          {...a}
          key={a.id}
          content={a.content}
          votes={a.votes}
          handleClick={() => handleClick(a)}
        />
      ))}
    </div>
  );
};

export default AnecdoteList;
