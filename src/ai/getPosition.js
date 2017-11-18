import calculateBitPosition from './calculateBitPosition';
import getMask from './getMask';
import { boardLength } from './constants';
import { curry } from 'ramda';
import Result from 'folktale/result';

/**
 * Get position from board
 * @sig Number -> Number -> Result Number
 * @param {Number} index position index 0 to 8
 * @param {Number} board board bits
 * @return {Result<Number>} position value
 */
const getPosition = curry((index, board) =>
  index >= 0 && index < boardLength
    ? calculateBitPosition(index)
      .map(bitPosition => (board & getMask(bitPosition)) >> bitPosition) // eslint-disable-line no-bitwise
    : Result.Error(`Invalid index: ${index}`)
);

export default getPosition;

