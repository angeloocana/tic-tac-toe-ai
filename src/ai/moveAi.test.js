import moveAi from './moveAi';
import move from './move';
import getInitialGame from './getInitialGame';
import getBoard from './getBoard';
import { X } from './constants';
import { equal, deepEqual } from 'ptz-assert';

describe('moveAi', () => {
  it('return Result.Error when game is null', () => {
    const oldGame = null;
    const newGame = moveAi(oldGame, 0).merge();

    equal(newGame, 'Null game');
  });

  it('return new game when it is AI turn', () => {
    const oldGame = getInitialGame();
    const newGame = moveAi(oldGame, 0).merge();

    const expectedGame = {
      aiStarted: true,
      board: getBoard(X).merge(),
      ended: false,
      isAiTurn: false,
      lastMove: 0,
      score: { ai: 0, human: 0 },
      started: true,
      winners: null
    };

    deepEqual(newGame, expectedGame);
  });

  it('return it is NOT AI turn', () => {
    const oldGame = move(getInitialGame(), 0).merge(),
      newGame = moveAi(oldGame, 1).merge();

    deepEqual(newGame, 'Is NOT AI turn');
  });
});

