import setPosition from './setPosition';
import getNewValue from './getNewValue';
import getNClicks from './getNClicks';
import getWinners from './getWinners';
import { curry } from 'ramda';
import Result from 'folktale/result';

const getScore = (oldScore, winners, isMyTurn) => {
  if (winners) {
    return oldScore + (isMyTurn ? 1 : 0);
  }
  else {
    return oldScore;
  }
};

/**
 * Move
 * @sig Game -> Number -> Result Game
 * @param {Number} index position
 * @param {Game} oldGame game
 * @return {Result<Game>} new game
 */
const move = curry((oldGame, index) => {
  if (oldGame.ended) {
    return Result.Error('Game ended');
  }

  const nClicks = getNClicks(oldGame.board);

  const newValue = getNewValue(nClicks);

  return setPosition(newValue, index, oldGame.board).map(newBoard => {
    const winners = getWinners(newBoard).merge();

    const isNClicksOdd = nClicks % 2 === 0;

    const ended = winners || nClicks > 7 ? true : false;

    return {
      board: newBoard,
      ended,
      started: true,
      lastMove: index,
      winners,
      isAiTurn: !oldGame.isAiTurn,
      aiStarted: oldGame.aiStarted,
      score: ended
        ? {
          ai: getScore(oldGame.score.ai, winners, oldGame.aiStarted ? isNClicksOdd : !isNClicksOdd),
          human: getScore(oldGame.score.human, winners, oldGame.aiStarted ? !isNClicksOdd : isNClicksOdd)
        }
        : oldGame.score
    };

  });
});

export default move;

