import getEmptyPositions from './getEmptyPositions';
import move from './move';
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


const getWinPositions = (oldGame, emptyPositions) => {
  return emptyPositions.filter(position => {
    const testGame = move(oldGame, position);
    return testGame.ended;
  });
};

const getLosePositions = (oldGame, emptyPositions) => {
  return emptyPositions.filter(position => {
    const testGame = move(oldGame, getOther(position, emptyPositions));
    const testGame2 = move(testGame, position);
    return testGame2.ended;
  });
};

/**
 * Get Win Positions or Empty Positions
 * 
 * Strategy: https://en.wikipedia.org/wiki/Tic-tac-toe#Strategy
 * 
 * @func
 * @param {[Number]} oldGame old game
 * @return {Number} random empty position
 */
const getBestPositions = (oldGame) => {
  const emptyPositions = getEmptyPositions(oldGame.board);

  // 1º Win
  const winPositions = getWinPositions(oldGame, emptyPositions);
  if (winPositions.length > 0) {
    return winPositions;
  }

  // 2º Block
  const losePositions = getLosePositions(oldGame, emptyPositions);
  if (losePositions.length > 0) {
    return losePositions;
  }

  // 3º Fork

  // 4º Blocking an opponent's fork

  // 5º Center 

  // 6º Opposite corner

  // 7º Empty corner

  // 8º Empty side

  return emptyPositions;
};

export default getBestPositions;
