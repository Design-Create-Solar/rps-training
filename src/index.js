import React, { useState } from "react";
import ReactDOM from "react-dom";
import Score from "./components/Score/Score";
import Display from "./components/Display/Display";
import Header from "./components/Header/Header";
import "./index.css";

const App = () => {
  const [score, setScore] = useState({
    user: 0,
    cpu: 0,
  });

  return (
    <div className="app">
      <header className="header">
        <Header />
        <img
          className="cpu"
          src="https://thumbs.gfycat.com/UnlawfulImportantArcherfish-size_restricted.gif"
        />
        <Score score={score} />
        <Display score={score} setScore={setScore} />
      </header>
    </div>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
