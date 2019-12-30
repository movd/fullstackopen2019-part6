import React from "react";
import { connect } from "react-redux";
import { vote } from "../reducers/anecdoteReducer";
import Anecdote from "./Anecdote";
import Filter from "./Filter";
import { setNotification } from "../reducers/notificationReducer";

const AnecdoteList = props => {
  const handleClick = anecdote => {
    props.vote(anecdote);
    props.setNotification(`you voted '${anecdote.content}'`, 5);
  };

  return (
    <div className="AnecdoteList">
      <Filter />
      {props.visibleAnecdotes.map(a => (
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

const filterAndSort = ({ anecdotes, filter }) => {
  const filteredAnecdotes = anecdotes.filter(a =>
    a.content.toLowerCase().includes(filter.toLowerCase())
  );
  return filteredAnecdotes.sort((a, b) => b.votes - a.votes);
};

const mapStateToProps = state => {
  // sometimes it is useful to console log from mapStateToProps
  console.log(state);
  return {
    visibleAnecdotes: filterAndSort(state)
  };
};

// destructure action creators directly instead of mapDispatchToProps
export default connect(mapStateToProps, {
  vote,
  setNotification
})(AnecdoteList);
