/**
 * Converts Number to Binary string
 * @sig Number -> String
 * @param {Number} dec decimal number
 * @return {String} Binary string
 */
const dec2bin = dec => (dec >>> 0).toString(2); // eslint-disable-line no-bitwise

export default dec2bin;
