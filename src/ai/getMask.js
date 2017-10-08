/**
 * Get mask position bits
 * @param {Number} position bit position
 * @return {Number} bit mask
 */
// eslint-disable-next-line no-bitwise
const getMask = (position) => 3 << position;

export default getMask;
