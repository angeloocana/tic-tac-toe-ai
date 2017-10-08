import getBestPositions from './getBestPositions';
import getNetwork from './getNetwork';
import getPositionIndex from './getPositionIndex';
import move from './move';
import { any, isNil } from 'ramda';
import { getRandomItem } from 'ptz-math';

const net = getNetwork();

const learningRates = {
  invalidMove: 0.1,
  validMove: 0.6,
  win: 1,
  lost: 0
};

/**
 * Get ai move index position
 * @param {*} oldGame game
 * @return {Number} position index
 */
const getAiMove = (oldGame) => {
  if (isNil(oldGame)) {
    return oldGame;
  }

  const output = net.activate([oldGame.board]);

  const index = getPositionIndex(output);

  const newGame = move(oldGame, index);

  if (newGame && newGame.ended) {
    net.propagate(learningRates.win, newGame.board);
    return index;

  } else {

    const bestPositions = getBestPositions(oldGame);

    if (any(p => index === p, bestPositions)) {
      net.propagate(learningRates.validMove, newGame.board);
      return index;

    } else {      
      const bestPosition = getRandomItem(bestPositions);
      const gameAfterBestMove = move(oldGame, bestPosition);
      net.propagate(learningRates.invalidMove, gameAfterBestMove.board);

      return bestPosition;
    }
  }
};

export default getAiMove;
