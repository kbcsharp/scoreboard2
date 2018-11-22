import React from "react";
import Counter from "../components/Counter";

const Player = props => {
  return (
    <div className="player">
      <span className="player-name">
        <button
          className="remove-player"
          onClick={() => props.removePlayer(props.id)}
        >
          ✖
        </button>
        {props.name}
      </span>

      <Counter
        score={props.score}
        changeScore={props.changeScore}
        index={props.index}
      />
    </div>
  );
};

export default Player;
