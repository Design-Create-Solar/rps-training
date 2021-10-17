import React from "react";
import "./Button.css";

const Button = ({ game, children }) => {
  return (
    <div style={{ pointerEvents: game ? "none" : "" }} className="button">
      {children}
    </div>
  );
};

export default Button;
