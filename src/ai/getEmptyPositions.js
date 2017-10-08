import { boardIndexes } from './constants';
import isPositionEmpty from './isPositionEmpty';
import { filter } from 'ramda';

/**
 * Get all empty positions indexes
 * @param {Number} board board bits
 * @return {[Number]} indexes array
 */
const getEmptyPositions = (board) =>
  filter(i => isPositionEmpty(board, i), boardIndexes);

export default getEmptyPositions;
