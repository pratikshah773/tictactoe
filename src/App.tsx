import React from "react";
import "./App.css";
import Board from "./components/Board";

const App = () => {
  return (
    <div className="App">
      <h1 className="header">Tic Tac Toe</h1>
      <Board />
    </div>
  );
};

export default App;
