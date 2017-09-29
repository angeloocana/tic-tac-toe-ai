import { getNewValue } from './getNewValue';
import { getNClicks } from './getNClicks';
import { getWinners } from './getWinners';

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

  const winners = getWinners(newBoard);

  return {
    board: newBoard || oldGame.board,
    ended: newBoard && (winners || getNClicks(newBoard) > 8) ? true : false,
    started: newBoard ? true : oldGame.started,
    lastMove: newBoard ? index : null,
    winners
  };
};

export {
  move
};
