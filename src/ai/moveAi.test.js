import moveAi from './moveAi';
import move from './move';
import getInitialGame from './getInitialGame';
import getBoard from './getBoard';
import { X } from './constants';
import * as assert from 'ptz-assert';

describe('moveAi', () => {
  it('return null when game is null', () => {
    const oldGame = null;
    const newGame = moveAi(oldGame, 0);

    assert.equal(newGame, oldGame);
  });

  it('return new game when it is AI turn', () => {
    const oldGame = getInitialGame();
    const newGame = moveAi(oldGame, 0);

    const expectedGame = {
      aiStarted: true,
      board: getBoard(X),
      ended: false,
      isAiTurn: false,
      lastMove: 0,
      score: { ai: 0, human: 0 },
      started: true,
      winners: null
    };

    assert.deepEqual(newGame, expectedGame);
  });

  it('return old game when it is NOT AI turn', () => {
    const oldGame = move(getInitialGame(), 0);
    const newGame = moveAi(oldGame, 1);

    assert.deepEqual(newGame, oldGame);
  });
});
