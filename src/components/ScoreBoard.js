import React from 'react'
import "./ScoreBoard.css"

export const ScoreBoard = ({scores, xPlaying}) => {

  return (
    <div className="scoreBoard">
      <span
        className={`${xPlaying && "x-score"} score ${!xPlaying && "inactive"}`}
        style={{ color: "red" }}
      >
        X : {scores.X_score}
      </span>
      <span
        className={`${!xPlaying && "o-score"} score ${xPlaying && "inactive"}`}
        style={{ color: "blue" }}
      >
        O : {scores.O_score}
      </span>
    </div>
  );
}
