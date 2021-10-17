import React from "react";
import "./Score.css";

const Score = ({ score }) => {
  return (
    <div className="score">
      <p>{score.user}</p>
      <p>{score.cpu}</p>
    </div>
  );
};

export default Score;
