import { filter, head } from 'ramda';

const positionToCheck = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],

  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],

  [0, 4, 8],
  [2, 4, 6]
];

const getWinnersByPositions = (b) => filter((p) =>
  b[p[0]] !== 0 && b[p[0]] === b[p[1]] && b[p[1]] === b[p[2]]);

/**
 * get Score
 * @param {*} board board 0 -> 8 x=1 o=-1
 * @return {{x: {Number}, o: {Number}}} score obj -1 lose, 1 win
 */
const getWinners = (board) => {
  if (!board) {
    return null;
  }

  const winners = getWinnersByPositions(board)(positionToCheck);
  return head(winners) || null;
};

export {
  getWinners
};
