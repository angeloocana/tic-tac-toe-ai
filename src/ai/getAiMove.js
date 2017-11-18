import getBestPositions from './getBestPositions';
import getNetwork from './getNetwork';
import getPositionIndex from './getPositionIndex';
import move from './move';
import { any, isNil } from 'ramda';
import { getRandomItem } from 'ptz-math';
import getInputLayer from './getInputLayer';
import getBoardArray from './getBoardArray';
import Result from 'folktale/result';

/**
 * Neural Network
 */
const net = getNetwork();

/**
 * TODO: Find the best learning rates
 */
const learningRates = {
  invalidMove: 0.1,
  validMove: 0.6,
  win: 1,
  lost: 0
};

/**
 * Propagate neural network with learning rate and right move
 * @sig Net -> Number -> Game -> void
 * @param {Net} net neural network with 9 output neurons
 * @param {Number} learningRate learning rate
 * @param {Game} game game to get the board from
 * @return {void}
 */
const propagate = (net, learningRate, game) =>
  net.propagate(learningRate, getBoardArray(game));

/**
 * Get ai move index position
 * @sig Game -> Number
 * @param {Game} oldGame game
 * @return {Number} position index
 */
const getAiMove = (oldGame) => {
  if (isNil(oldGame)) {
    return Result.Error('Null Game');
  }

  const output = net.activate(getInputLayer(oldGame.board));

  const index = getPositionIndex(output);

  return move(oldGame, index).map(newGame => {

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
        
        move(oldGame, bestPosition)
          .map(gameAfterBestMove => propagate(net, learningRates.invalidMove, gameAfterBestMove));

        return bestPosition;
      }
    }
  });
};

export default getAiMove;

