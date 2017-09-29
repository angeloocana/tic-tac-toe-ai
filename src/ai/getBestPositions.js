import { getEmptyPositions } from './getEmptyPositions';
import { move } from './move';
import { filter, head, pipe } from 'ramda';

/**
 * Get another item from the list
 * 
 * #TODO: Move to ptz-fp
 * 
 * @param {*} item item to be excluded
 * @param {*} list list to get a different item
 * @return {*} another item
 */
const getOther = (item, list) => pipe(
  filter(i => i !== item),
  head
)(list);

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

  if (winPositions.length > 0) {
    return winPositions;
  }

  const losePositions = emptyPositions.filter(position => {
    const testGame = move(oldGame, getOther(position, emptyPositions));
    const testGame2 = move(testGame, position);
    return testGame2.ended;
  });

  return losePositions.length > 0
    ? losePositions
    : emptyPositions;
};

export {
  getBestPositions
};
