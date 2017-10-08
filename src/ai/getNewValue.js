import { X, O } from './constants';

/**
 * get new player value
 * @param {Number} nClicks number of previous clicks / moves
 * @return {Number} X or O value
 */
const getNewValue = (nClicks) =>
  nClicks % 2
    ? O
    : X;

export default getNewValue;
