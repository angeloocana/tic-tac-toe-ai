import getBoardSquares from './getBoardSquares';
import { head, last } from 'ramda';

const getHalfY = (square) => (square[0][1] + square[1][1]) / 2;

const getHalfX = (square) => (square[0][0] + square[1][0]) / 2;

const getWinLine = (size, game) => {
  const squares = getBoardSquares(size);

  const firstSquare = squares[game.winners[0]];
  const lastSquare = squares[game.winners[2]];

  const firstWinner = head(game.winners);
  const lastWinner = last(game.winners);

  const row = [
    [0, getHalfY(firstSquare)],
    [lastSquare[1][0], getHalfY(lastSquare)]
  ];

  const col = [
    [getHalfX(firstSquare), 0],
    [getHalfX(lastSquare), lastSquare[1][1]]
  ];

  if (firstWinner === 0) {
    if (lastWinner === 2) {
      return row;
    } else if (lastWinner === 6) {
      return col;
    } else if (lastWinner === 8) {
      return [
        [0, 0],
        lastSquare[1]
      ];
    }
  } else if (firstWinner === 1) {
    return col;
  } else if (firstWinner === 2) {
    if (lastWinner === 8) {
      return col;
    } else if (lastWinner === 6) {
      return [
        [0, lastSquare[1][1]],
        [firstSquare[1][0], 0]
      ];
    }
  } else if (firstWinner === 3) {
    return row;
  } else if (firstWinner === 6) {
    return row;
  }

  return null;
};

export default getWinLine;
