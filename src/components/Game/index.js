import React from 'react';
import Board from './Board';
import { initialBoard } from '../../ai/constants';

class Game extends React.PureComponent {

  render() {
    return (
      <Board board={initialBoard} />
    );
  }
};

export default Game;
