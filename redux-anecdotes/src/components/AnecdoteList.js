import React from "react";
import { connect } from "react-redux";
import { vote } from "../reducers/anecdoteReducer";
import Anecdote from "./Anecdote";
import Filter from "./Filter";
import { setNotification } from "../reducers/notificationReducer";

const AnecdoteList = props => {
  // const { anecdotes, filter } = store.getState();
  const sortedAnecdotes = props.anecdotes.sort((a, b) => b.votes - a.votes);

  const filteredAnecdotes = sortedAnecdotes.filter(a =>
    a.content.toLowerCase().includes(props.filter.toLowerCase())
  );

  const handleClick = anecdote => {
    props.vote(anecdote.id);
    props.setNotification(`you voted '${anecdote.content}'`);
    setTimeout(() => {
      props.setNotification(null);
    }, 5000);
  };

  return (
    <div className="AnecdoteList">
      <Filter />
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

// destructure action creators directly instead of mapDispatchToProps
export default connect(mapStateToProps, { vote, setNotification })(
  AnecdoteList
);
