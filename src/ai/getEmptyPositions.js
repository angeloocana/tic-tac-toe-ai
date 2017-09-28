import { emptyValue } from './constants';

const getEmptyPositions = (board) => {
  return board
    .map((value, i) => ({ // save index to i
      i,
      value
    }))
    .filter(p => p.value === emptyValue) // filter empty positions
    .map(p => p.i);
};

export {
  getEmptyPositions
};
