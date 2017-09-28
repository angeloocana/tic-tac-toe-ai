import { move } from './move';
import { getAiMove } from './getAiMove';

const moveAi = (oldGame) => {
  const position = getAiMove(oldGame);
  return move(oldGame, position);
};

export {
  moveAi
};
