import { move } from './move';

const moveAi = (oldGame, position) => {
  if(!oldGame || !oldGame.isAiTurn) {
    return oldGame;
  }

  return move(oldGame, position);
};

export {
  moveAi
};
