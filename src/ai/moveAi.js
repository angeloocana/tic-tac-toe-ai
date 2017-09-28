import { move } from './move';
import { getRandomPosition } from './getRandomPosition';

const moveAi = (oldGame) => {
  const position = getRandomPosition(oldGame.board);
  return move(oldGame, position);
};

export {
  moveAi
};
