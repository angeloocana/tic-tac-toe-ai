import { map, pipe, flatten } from 'ramda';
import { boardIndexes, X, O } from './constants';
import getPosition from './getPosition';

const getPositionInput = board => i => {
  const position = getPosition(board, i);
  switch (position) {
    case X: return [1, 0];
    case O: return [0, 1];
    default: return [0, 0];
  }
};

const getInputLayer = board => {
  return pipe(
    map(getPositionInput(board)),
    flatten
  )(boardIndexes);
};

export default getInputLayer;
