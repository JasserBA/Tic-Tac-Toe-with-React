import React, {useState} from 'react';
import './App.css';
import {Board} from './components/Board'
import { ScoreBoard } from './components/ScoreBoard';
import { ResetButton } from './components/ResetButton';

function App() {
  const WIN_conditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  const [board, setBoard] = useState(Array(9).fill(null));
  const [xPlaying, setXPlaying] = useState(true);
  const [scores, setScores] = useState({ X_score: 0, O_score: 0 });
  const [gameOver, setGameOver] = useState(false)
  
  // Step 1: Update the board
  const handleClick = (boxIdx) => {
    const updatedBoard = board.map((value, idx) => {
      if (idx === boxIdx) {
        return xPlaying ? "X" : "O";
      } else {
        return value;
      }
    });

  // Step 2: check winner
  const winner = checkWinenr(updatedBoard);
  if (winner) {
    if (winner === "O") {
      let { O_score } = scores;
      O_score += 1;
      setScores({ ...scores, O_score });
    } else {
      let { X_score } = scores;
      X_score += 1;
      setScores({ ...scores, X_score });
    }
  }

    setBoard(updatedBoard);

    // Step 3: Change active player
    setXPlaying(!xPlaying);
  };
  const checkWinenr = (board) => {
    for (let i = 0; i < WIN_conditions.length; i++) {
      const [x, y, z] = WIN_conditions[i];

      if (board[x] && board[x] === board[y] && board[y] === board[z]) {
        setGameOver(true)  
        return board[x];
      }
    }
  };  
  const resetBoard = () => {
    setGameOver(false);
    setBoard(Array(9).fill(null))
  }

  const resetScore = () => {
    setScores({ X_score: 0, O_score: 0 })
  }

  

  return (
    <div>
      <ScoreBoard scores={scores} xPlaying={xPlaying} />
      <Board boardTag={board} onClick={gameOver ? resetBoard : handleClick} />
      <ResetButton resetBoard={resetBoard} resetScore={resetScore} />
    </div>
  );
}

export default App;
