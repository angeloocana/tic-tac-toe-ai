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

const move = (oldGame, index) => {
  if (oldGame.ended) {
    return oldGame;
  }

  const newValue = getNewValue(getNClicks(oldGame.board));

  const newBoard = getBoardAfterMove(oldGame.board, index, newValue);

  if (isNil(newBoard)) {
    return null;
  }

  const winners = getWinners(newBoard);

  return {
    board: newBoard,
    ended: winners || getNClicks(newBoard) > 8 ? true : false,
    started: true,
    lastMove: index,
    winners,
    isAiTurn: !oldGame.isAiTurn,
    aiStarted: oldGame.aiStarted
  };
};

export {
  move
};
