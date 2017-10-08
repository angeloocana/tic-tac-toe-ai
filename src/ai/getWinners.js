import { filter, head } from 'ramda';
import { emptyValue } from './constants';
import getPosition from './getPosition';

const positionsToCheck = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],

  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],

  [0, 4, 8],
  [2, 4, 6]
];

/**
 * Check winners for 3 winning positions
 * @param {Number} board board
 * @return {[Number]} winners
 */
const getWinners = (board) => {
  const get = getPosition(board);

  return head(
    filter((positions) => {
      const p0 = get(positions[0]);
      const p1 = get(positions[1]);
      const p2 = get(positions[2]);

      return p0 !== emptyValue && p0 === p1 && p1 === p2;
    }, positionsToCheck)
  ) || null;
};

export default getWinners;
