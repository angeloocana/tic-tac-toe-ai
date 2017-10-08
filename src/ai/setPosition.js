import calculateBitPosition from './calculateBitPosition';
import getMask from './getMask';
import isPositionEmpty from './isPositionEmpty';

/**
 * Get board after move, return null for invalid move
 * @param {Number} board old board bits
 * @param {Number} index position
 * @param {Number} value X=1, O=2
 * @return {Number} new board bits
 */
const setPosition = (board, index, value) => {
  if (!isPositionEmpty(board, index)) {
    return null;
  }

  const position = calculateBitPosition(index);
  // eslint-disable-next-line no-bitwise
  return (board & ~getMask(position)) | (value << position);
};

export default setPosition;
