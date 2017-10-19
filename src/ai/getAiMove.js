import getBestPositions from './getBestPositions';
import getNetwork from './getNetwork';
import getPositionIndex from './getPositionIndex';
import move from './move';
import { any, isNil } from 'ramda';
import { getRandomItem } from 'ptz-math';
import getInputLayer from './getInputLayer';
import getBoardArray from './getBoardArray';

const net = getNetwork();

const learningRates = {
  invalidMove: 0.1,
  validMove: 0.6,
  win: 1,
  lost: 0
};

/**
 * Propagate learning rate and right move to neural network
 * @param {*} net neural network with 9 output neurons
 * @param {*} learningRate learning rate
 * @param {*} game game to get the board from
 * @return {void}
 */
const propagate = (net, learningRate, game) => {
  net.propagate(learningRate, getBoardArray(game.board));
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

  const output = net.activate(getInputLayer(oldGame.board));

  const index = getPositionIndex(output);

  const newGame = move(oldGame, index);

  if (newGame && newGame.ended) {
    propagate(net, learningRates.win, newGame);
    return index;

  } else {

    const bestPositions = getBestPositions(oldGame);

    if (any(p => index === p, bestPositions)) {
      propagate(net, learningRates.validMove, newGame);
      return index;

    } else {
      const bestPosition = getRandomItem(bestPositions);
      const gameAfterBestMove = move(oldGame, bestPosition);
      propagate(net, learningRates.invalidMove, gameAfterBestMove);

      return bestPosition;
    }
  }
};

export default getAiMove;
