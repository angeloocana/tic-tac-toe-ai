import { boardLength } from './constants';
import getEmptyPositions from './getEmptyPositions';
import { length } from 'ramda';

/**
 * Get number o clicks / moves
 * @sig Board -> Number
 * @param {Board} board board
 * @return {Number} n clicks
 */
const getNClicks = (board) =>
  boardLength - length(getEmptyPositions(board));

export default getNClicks;

