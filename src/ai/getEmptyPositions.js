import { boardIndexes } from './constants';
import isPositionEmpty from './isPositionEmpty';
import { filter } from 'ramda';

/**
 * Get all empty positions indexes
 * @sig Board -> [Number]
 * @param {Board} board board bits
 * @return {[Number]} indexes array
 */
const getEmptyPositions = (board) => 
  filter(i =>  isPositionEmpty(i, board).getOrElse(false)
    , boardIndexes);

export default getEmptyPositions;

