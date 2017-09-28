import { getEmptyPositions } from './getEmptyPositions';
import { pipe } from 'ramda';
import { getRandomItem } from 'ptz-math';
import { move } from './move';

/**
 * Get Random Empty Position 
 * @func
 * @param {[Number]} oldGame old game
 * @return {Number} random empty position
 */
const getBestPosition = (oldGame) => {
  const emptyPositions = getEmptyPositions(oldGame.board);

  const winPositions = emptyPositions.filter(position => {
    const testGame = move(oldGame, position);
    return testGame.ended;
  });

  return getRandomItem(winPositions.length > 0 ? winPositions : emptyPositions);
};


pipe(
  getEmptyPositions,
  getRandomItem
);

export {
  getBestPosition
};
