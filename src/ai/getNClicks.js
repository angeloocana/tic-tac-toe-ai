import { reduce } from 'ramda';
import { emptyValue } from './constants';

/**
 * Get number o clicks / moves
 * @func
 * @param {[Number]} board board array
 * @return {Number} n clicks
 */
const getNClicks = reduce((clicks, position) =>
  position === emptyValue
    ? clicks
    : clicks + 1
  , 0);

export {
  getNClicks
};
