import calculateBitPosition from './calculateBitPosition';
import getMask from './getMask';
import { boardLength } from './constants';

/**
 * Get position from board
 * @sig Number -> Number -> Number
 * @param {Number} board board bits
 * @param {Number} index position index 0 to 8
 * @return {Number} position value
 */
const getPosition = (board, index) => {
  if (!(index >= 0 && index < boardLength)) {
    return null;
  }

  const bitPosition = calculateBitPosition(index);
  const mask = getMask(bitPosition);
  // eslint-disable-next-line no-bitwise
  return (board & mask) >> bitPosition;
};

export default getPosition;
