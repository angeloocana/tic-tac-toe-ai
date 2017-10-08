import { range, length } from 'ramda';

const emptyValue = 0;

/**
 * Empty value alias
 */
const _ = emptyValue;

const X = 1;

const O = 2;

/**
 * Use it to map the positions
 */
const boardIndexes = range(0, 9);
const boardLength = length(boardIndexes);

const initialScore = {
  x: 0,
  o: 0
};

export {
  boardIndexes,
  boardLength,
  emptyValue,
  _,
  X,
  O,
  initialScore
};
