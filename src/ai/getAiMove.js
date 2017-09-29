import { getBestPositions } from './getBestPositions';
import { getNetwork } from './getNetwork';
import { getPositionIndex } from './getPositionIndex';
import { getRandomItem } from 'ptz-math';
import { any, isNil } from 'ramda';
import { move } from './move';

const net = getNetwork();

const learningRates = {
  invalidMove: 0.1,
  validMove: 0.6,
  win: 1,
  lost: 0
};

const getAiMove = (oldGame) => {
  console.log('oldGame: ', oldGame);

  const output = net.activate(oldGame.board);

  const index = getPositionIndex(output);

  const gameAfterMove = move(oldGame, index);

  console.log('AI index: ', index);

  if (gameAfterMove && gameAfterMove.ended) {

    console.log('AI win!');

    net.propagate(learningRates.win, gameAfterMove.board);
    return index;

  } else {

    const bestPositions = getBestPositions(oldGame);

    if (any(p => index === p, bestPositions)) {

      console.log('AI valid move!');

      net.propagate(learningRates.validMove, gameAfterMove.board);
      return index;

    } else {

      console.log('AI INVALID move!');

      const bestPosition = getRandomItem(bestPositions);
      const gameAfterBestMove = move(oldGame, bestPosition);
      net.propagate(learningRates.invalidMove, gameAfterBestMove.board);

      return bestPosition;
    }
  }
};

export {
  getAiMove
};
