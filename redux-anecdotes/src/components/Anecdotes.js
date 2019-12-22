import React from "react";
import { vote } from "../reducers/anecdoteReducer";
import Anecdote from "./Anecdote";

const Anecdotes = ({ store }) => {
  const anecdotes = store.getState().sort((a, b) => b.votes - a.votes);
  return (
    <div className="Anecdotes">
      <h2>Anecdotes</h2>
      {anecdotes.map(a => (
        <Anecdote
          {...a}
          key={a.id}
          content={a.content}
          votes={a.votes}
          handleClick={() => store.dispatch(vote(a.id))}
        />
      ))}
    </div>
  );
};

export default Anecdotes;
