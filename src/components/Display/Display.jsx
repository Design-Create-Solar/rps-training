import React, { useState } from "react";
import "./Display.css";

import Button from "../Button/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFistRaised,
  faHandPaper,
  faHandScissors,
} from "@fortawesome/free-solid-svg-icons";

const Display = ({ score, setScore }) => {
  const [game, setGame] = useState(null);
  const [choice, setChoice] = useState(null);
  const [cpuChoice, setCPUChoice] = useState(null);

  const handleUserInput = (value, name) => {
    if (game) return;

    const cpuValue = parseInt(Math.random() * 3);

    let newGame;
    switch (value - cpuValue) {
      case 0:
        setGame("tie");
        break;
      case 1:
      case -2:
        setGame("win");
        setScore({ ...score, user: score.user + 1 });
        break;
      default:
        setGame("lose");
        setScore({ ...score, cpu: score.cpu + 1 });
        break;
    }

    setChoice(name);
    setCPUChoice(state[cpuValue].name);
  };

  const reset = () => {
    setGame(null);
    setChoice(null);
    setCPUChoice(null);
  };

  const state = [
    {
      value: 0,
      name: "Rock",
      iconName: faFistRaised,
    },
    {
      value: 1,
      name: "Paper",
      iconName: faHandPaper,
    },
    {
      value: 2,
      name: "Scissors",
      iconName: faHandScissors,
    },
  ];

  return (
    <div className="position">
      <div className="display">
        {state.map(({ value, name, iconName }) => (
          <div key={name} onClick={() => handleUserInput(value, name)}>
            <Button game={game}>
              <FontAwesomeIcon icon={iconName} />
            </Button>
          </div>
        ))}
      </div>

      <div className="player">
        <div className="choice">
          <div className="choice-text">
            <p>You chose...</p>
          </div>

          <div className="choice-box">
            {choice && (
              <div>
                <p>{choice}</p>
              </div>
            )}
          </div>
        </div>

        <div className="choice">
          <div className="choice-text">
            <p>Alphonse chose...</p>
          </div>

          <div className="choice-box">
            {cpuChoice && (
              <div>
                <p>{cpuChoice}</p>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="choice">
        <div className="choice-text">
          <p>Looks like...</p>
        </div>

        <div className="choice-box">
          {game && (
            <div>
              <div>
                <p>It's a {game}!</p>
              </div>
            </div>
          )}
        </div>
      </div>
      <div
        onClick={() => reset()}
        style={{ visibility: game ? "visible" : "hidden" }}
      >
        <Button>
          <p className="prompt">Play again?</p>
        </Button>
      </div>
    </div>
  );
};

export default Display;
