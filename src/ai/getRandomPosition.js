import { getEmptyPositions } from './getEmptyPositions';
import { pipe } from 'ramda';
import { getRandomItem } from 'ptz-math';

/**
 * Get Random Empty Position 
 * @func
 * @param {[Number]} board
 */
const getRandomPosition = pipe(
  getEmptyPositions,
  getRandomItem
);

export {
  getRandomPosition
};
