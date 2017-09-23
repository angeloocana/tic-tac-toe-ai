import { reduce, pipe } from 'ramda';
import { xValue, oValue } from './constants';

const getClicks = reduce((clicks, position) =>
  position === 0
    ? clicks
    : clicks + 1
  , 0);

const getValue = (clicks) =>
  clicks % 2
    ? oValue
    : xValue;

/**
 * get new player value
 * @param {[Number]} board board
 * @return {Number} X or O value
 */
const getNewValue = pipe(
  getClicks,
  getValue
);

export {
  getClicks,
  getValue,
  getNewValue
};
