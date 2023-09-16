import React from 'react'
import './Board.css'
import {Box} from './Box'

export const Board = ({ boardTag, onClick}) => {
  return (
    <div className='board'>
      {boardTag.map((value, idx) => {
          return (
            <Box value={value} key={idx} onClick={() => value === null && onClick(idx)} />
          );
      })}
    </div>
  );
};
