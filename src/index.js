import React from "react";
import ReactDOM from "react-dom";
import logo from "./logo.svg";
import "./index.css";

ReactDOM.render(
  <React.StrictMode>
    <div className="app">
      <header className="header">
        <img src={logo} className="logo" />
        <p>Waiting for something to happen?</p>
      </header>
    </div>
  </React.StrictMode>,
  document.getElementById("root")
);
