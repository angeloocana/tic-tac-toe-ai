import getXYFromIndex from './getXYFromIndex';

/**
 * Calculate bit position
 * @param {*} x row from 0 to 2
 * @param {*} y col from 0 to 2
 * @return {Number} bit position
 */
const calculateBitPositionForXY = (x, y) => (x + y * 3) * 2;

/**
 * Calculate bit position
 * @param {*} index position index
 * @return {Number} bit position
 */
const calculateBitPosition = (index) => {
  const { x, y } = getXYFromIndex(index);
  return calculateBitPositionForXY(x, y);
};

export default calculateBitPosition;

export {
  calculateBitPositionForXY,
  calculateBitPosition
};
