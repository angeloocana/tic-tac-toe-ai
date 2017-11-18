import moveAiAndNewGame from './moveAiAndNewGame';
import getInitialGame from '../../ai/getInitialGame';
import move from '../../ai/move';
import { equal } from 'ptz-assert';

describe('moveAiAndNewGame', () => {
  it('do not move if oldGame is not equal data.oldGame', () => {
    const oldGame = getInitialGame();
    const data = {
      oldGame: move(oldGame, 0).merge()
    };

    const result = moveAiAndNewGame(oldGame, data).merge();
    equal(result, 'data.oldGame not equal oldGame');
  });

  it('ai move', () => {
    const oldGame = getInitialGame();
    const position = 0;
    const data = {
      oldGame,
      position
    };

    const gameAfterMove = moveAiAndNewGame(oldGame, data).merge();

    equal(gameAfterMove.lastMove, position);
  });

  it('dispatch new Game when ended');
});

