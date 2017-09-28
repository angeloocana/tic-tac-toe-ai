import { move } from './move';
import { getBestPosition } from './getBestPosition';

const moveAi = (oldGame) => {
  console.log('moveAi');
  const position = getBestPosition(oldGame);
  console.log('position: ', position);
  return move(oldGame, position);
};

export {
  moveAi
};
