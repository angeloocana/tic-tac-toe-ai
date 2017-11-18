import calculateBitPosition from './calculateBitPosition';
import getMask from './getMask';
import isPositionEmpty from './isPositionEmpty';
import { X, O, emptyValue } from './constants';
import Result from 'folktale/result';
import { curry } from 'ramda';

const setBitPosition = (board, position, value) => {
  // eslint-disable-next-line no-bitwise
  return (board & ~getMask(position)) | (value << position);
};

/**
 * Get board after move, return null for invalid move
 * @sig Number -> Number -> Board -> Result Board
 * @param {Number} value X=1, O=2
 * @param {Number} index position
 * @param {Board} board old board bits
 * @return {Result<Board>} new board bits
 */
const setPosition = curry((value, index, board) => {
  if(value !== X && value !== O){
    return value === emptyValue 
      ? Result.Ok(board) 
      : Result.Error('Invalid value');
  }

  return isPositionEmpty(index, board).chain(emptyPosition =>
    emptyPosition
      ? calculateBitPosition(index).map(position => setBitPosition(board, position, value))
      : Result.Error('Position NOT empty')
  );
});

export default setPosition;

