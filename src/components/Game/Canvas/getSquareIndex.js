import { getBoardSquares } from './getBoardSquares';

const getSquareIndex = (size, position) => {
  const squares = getBoardSquares(size);

  for (var i = 0; i < squares.length; i += 1) {
    const square = squares[i];
    const fromX = square[0][0];
    const fromY = square[0][1];
    const toX = square[1][0];
    const toY = square[1][1];

    if (position.x >= fromX && position.x <= toX &&
      position.y >= fromY && position.y <= toY) {
      return i;
    }
  }

  return null;
};

export {
  getSquareIndex
};
