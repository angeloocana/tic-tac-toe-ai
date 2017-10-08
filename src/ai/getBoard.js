import setPosition from './setPosition';

const initialBoard = 0;

/**
 * Get board bits from (...args) X: 1, O: 2
 * 
 * example:
 * ```js
 * const _ = null;
 * getBoard(1, 2, _, 2, 1, _, 1, 2, _);
 * ```
 * X | O | _
 * 
 * O | X | _
 * 
 * X | O | _
 *  
 * @param {*} positions (2, 1, null, 2, 1, 2, 1, 2, null) 2 = O, 1 = X
 * @return {Number} board bits
 */
const getBoard = (...positions) => {
  if (positions.length === 0) {
    return initialBoard;
  }

  return positions.reduce((board, value, index) =>
    value
      ? setPosition(board, index, value)
      : board
    , initialBoard);
};

export default getBoard;
