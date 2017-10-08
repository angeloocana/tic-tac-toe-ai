import { boardLength } from './constants';
import getEmptyPositions from './getEmptyPositions';
import { length } from 'ramda';

/**
 * Get number o clicks / moves
 * @func
 * @param {[Number]} board board array
 * @return {Number} n clicks
 */
const getNClicks = (board) =>
  boardLength - length(getEmptyPositions(board));

export default getNClicks;
