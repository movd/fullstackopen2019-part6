import React from "react";
const Anecdote = ({ id, content, votes, handleClick }) => {
  return (
    <div className="Anecdote">
      <div>{content}</div>
      <div>
        has {votes} votes
        <button onClick={handleClick}>vote</button>
      </div>
    </div>
  );
};

export default Anecdote;
