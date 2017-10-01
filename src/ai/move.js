import { getNewValue } from './getNewValue';
import { getNClicks } from './getNClicks';
import { getWinners } from './getWinners';
import { isNil } from 'ramda';

const getBoardAfterMove = (oldBoard, index, value) => {
  if (oldBoard[index] !== 0) {
    return null;
  }

  return oldBoard.map((position, i) =>
    i === index
      ? value
      : position);
};

const getScore = (oldScore, winners, isMyTurn) => {
  if (winners) {
    return oldScore + (isMyTurn ? 3 : 0);
  }
  else {
    return oldScore + 1;
  }
};

const move = (oldGame, index) => {
  if (oldGame.ended) {
    return oldGame;
  }

  const nClicks = getNClicks(oldGame.board);

  const newValue = getNewValue(nClicks);

  const newBoard = getBoardAfterMove(oldGame.board, index, newValue);

  if (isNil(newBoard)) {
    return null;
  }

  const winners = getWinners(newBoard);

  const isNClicksOdd = nClicks % 2 === 0;

  const ended = winners || nClicks > 7 ? true : false;

  console.log('nClicks', nClicks);

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
};

export {
  move
};
