import React from "react";
import { connect } from "react-redux";
import { createAnecdote } from "../reducers/anecdoteReducer";
import {
  setNotification,
  clearNotification
} from "../reducers/notificationReducer";

const AnecdoteForm = props => {
  const style = {
    marginBottom: 10
  };
  const addAnecdote = async event => {
    event.preventDefault();
    const content = event.target.anecdote.value;
    event.target.anecdote.value = "";
    props.createAnecdote(content);
    props.setNotification(`you added '${content}'`);
    setTimeout(() => {
      props.clearNotification();
    }, 5000);
  };
  return (
    <div style={style} className="AnecdoteForm">
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

const mapDispatchToProps = {
  createAnecdote,
  setNotification,
  clearNotification
};

export default connect(null, mapDispatchToProps)(AnecdoteForm);
