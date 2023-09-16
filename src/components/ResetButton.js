import React from 'react'
import './ResetButton.css'

export const ResetButton = ({ resetBoard, resetScore }) => {
  return (
    <>
    <button className="reset-btn" onClick={() => {resetBoard();}}>
      Reset
    </button>
      <button className="reset-btn" onClick={() => {resetBoard();resetScore();}}>
      Reset Game
    </button>
    </>
  );
};
