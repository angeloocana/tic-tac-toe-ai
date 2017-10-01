import { move } from './move';
import { getAiMove } from './getAiMove';

const moveAi = (oldGame) => {
  if(!oldGame || !oldGame.isAiTurn) {
    return oldGame;
  }

  const position = getAiMove(oldGame);
  return move(oldGame, position);
};

export {
  moveAi
};
