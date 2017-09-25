import { xValue, oValue } from './constants';

/**
 * get new player value
 * @param {Number} nClicks number of previous clicks / moves
 * @return {Number} X or O value
 */
const getNewValue = (nClicks) =>
  nClicks % 2
    ? oValue
    : xValue;

export {
  getNewValue
};
