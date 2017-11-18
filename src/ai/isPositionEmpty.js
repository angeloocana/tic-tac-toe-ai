import getPosition from './getPosition';
import { emptyValue } from './constants';
import { curry, equals, map } from 'ramda';

/**
 * Check if board position is empty
 * @sig Number -> Board -> Result Boolean 
 * @param {Number} index position
 * @param {Board} board bits board
 * @return {Result<Boolean>} is empty
 */
const isPositionEmpty = curry((index, board) =>
  map(equals(emptyValue), getPosition(index, board)));

export default isPositionEmpty;

