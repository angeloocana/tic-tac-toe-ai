import { getEmptyPositions } from './getEmptyPositions';
import { move } from './move';

/**
 * Get Win Positions or Empty Positions
 * @func
 * @param {[Number]} oldGame old game
 * @return {Number} random empty position
 */
const getBestPositions = (oldGame) => {
  const emptyPositions = getEmptyPositions(oldGame.board);

  const winPositions = emptyPositions.filter(position => {
    const testGame = move(oldGame, position);
    return testGame.ended;
  });

  return winPositions.length > 0
    ? winPositions
    : emptyPositions;
};

export {
  getBestPositions
};
