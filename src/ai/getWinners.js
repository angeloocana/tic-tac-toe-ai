import { head, filter, partialRight } from 'ramda';
import { emptyValue } from './constants';
import getPosition from './getPosition';
import getBoardFromGame from './getBoardFromGame';

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
 * Checks if 3 positions are not empty and equal.
 * @param {Number} p0 posiiton 0
 * @param {Number} p1 posiiton 1
 * @param {Number} p2 position 2
 * @return {Boolean} equal positions
 */
const equalValue = (p0, p1, p2) => p0 !== emptyValue && p0 === p1 && p1 === p2;

/**
 * Check winners for 3 winning positions
 * @sig Game | Board -> Result [Number]
 * @param {Game | Board} gameOrBoard Game or Board
 * @return {Result<[Number]>} winners
 */
const getWinners = (gameOrBoard) =>
  getBoardFromGame(gameOrBoard)
    .map(board => {
      const get = partialRight(getPosition, [board]);

      const winners = filter((positions) => {
        const p0 = get(positions[0]).merge();
        const p1 = get(positions[1]).merge();
        const p2 = get(positions[2]).merge();

        return equalValue(p0, p1, p2);
      }, positionsToCheck);

      return head(winners) || null;
    });

export default getWinners;
