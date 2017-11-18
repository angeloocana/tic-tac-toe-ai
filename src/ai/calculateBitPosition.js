import getXYFromIndex from './getXYFromIndex';
import { pipe, map } from 'ramda';

/**
 * Calculate bit position for X and Y
 * @sig Number -> Number -> Number
 * @param {Number} x row from 0 to 2
 * @param {Number} y col from 0 to 2
 * @return {Number} bit position
 */
const calculateBitPositionForXY = (x, y) => (x + y * 3) * 2;

/**
 * Calculate bit position for Index
 * @sig Number -> Number
 * @param {Number} index position index
 * @return {Number} bit position
 */
const calculateBitPosition = pipe(
  getXYFromIndex,
  map(({x, y}) => calculateBitPositionForXY(x, y))
);

export default calculateBitPosition;

export {
  calculateBitPositionForXY,
  calculateBitPosition
};

