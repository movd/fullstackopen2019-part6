import React, { useEffect } from "react";
import { connect } from "react-redux";
import AnecdoteForm from "./components/AnecdoteForm";
import AnecdoteList from "./components/AnecdoteList";
import Notification from "./components/Notification";
import anecdotesService from "./services/anecdotes";
import { initializeAnecdotes } from "./reducers/anecdoteReducer";
import anecdotes from "./services/anecdotes";

const App = props => {
  useEffect(() => {
    anecdotesService
      .getAll()
      .then(anecdotes => props.initializeAnecdotes(anecdotes));
  });

  return (
    <div>
      <h2>Programming anecdotes</h2>
      <Notification />
      <AnecdoteForm />
      <AnecdoteList />
    </div>
  );
};

export default connect(null, { initializeAnecdotes })(App);
