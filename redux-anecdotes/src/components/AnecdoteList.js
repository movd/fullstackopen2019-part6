import React from "react";
import { connect } from "react-redux";
import { vote } from "../reducers/anecdoteReducer";
import Anecdote from "./Anecdote";
import { setNotification } from "../reducers/notificationReducer";

const AnecdoteList = props => {
  // const { anecdotes, filter } = store.getState();
  const sortedAnecdotes = props.anecdotes.sort((a, b) => b.votes - a.votes);

  const filteredAnecdotes = sortedAnecdotes.filter(a =>
    a.content.toLowerCase().includes(props.filter.toLowerCase())
  );

  const handleClick = anecdote => {
    console.log("vote for: ", anecdote);

    // store.dispatch(vote(anecdote.id));
    // store.dispatch(setNotification(`you voted '${anecdote.content}'`));
    // setTimeout(() => {
    //   store.dispatch(setNotification(null));
    // }, 5000);
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

const mapStateToProps = state => {
  // sometimes it is useful to console log from mapStateToProps
  console.log(state);
  return {
    anecdotes: state.anecdotes,
    filter: state.filter
  };
};

export default connect(mapStateToProps)(AnecdoteList);
