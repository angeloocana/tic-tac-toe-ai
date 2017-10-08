import getBoardSquares from './getBoardSquares';

/**
 * Get board position index from canvas click position
 * @param {*} size size of the canvas
 * @param {*} position position clicked in the canvas
 * @return {Number} index
 */
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

export default getSquareIndex;
