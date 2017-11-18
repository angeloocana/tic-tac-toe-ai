import getAiMove from './getAiMove';
import getInitialGame from './getInitialGame';
import { contains } from 'ptz-assert';

describe('getAiMove', () => {
  it('initial move', () => {
    const oldGame = getInitialGame();
    const positions = [0, 1, 2, 3, 4, 5, 6, 7, 8];

    const position = getAiMove(oldGame).merge();
    contains(positions, position);
  });
});

