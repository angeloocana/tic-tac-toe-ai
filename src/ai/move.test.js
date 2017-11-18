import { deepEqual, equal } from 'ptz-assert';
import move from './move';
import { _, O, X } from './constants';
import getInitialGame from './getInitialGame';
import getBoard from './getBoard';

describe('move', () => {
  it('first move, set started and lastMove', () => {
    const oldGame = getInitialGame();
    const index = 3;

    const expected = {
      board: getBoard(_, _, _, X, _, _, _, _, _).merge(),
      ended: false,
      started: true,
      lastMove: 3,
      winners: null,
      aiStarted: true,
      isAiTurn: false,
      score: {
        human: 0,
        ai: 0
      }
    };

    const newGame = move(oldGame, index).merge();

    deepEqual(newGame, expected);
  });

  it('if game ended return game', () => {
    const oldGame = {
      board: getBoard().merge(),
      ended: true,
      started: true,
      lastMove: null,
      winners: null,
      score: {
        human: 0,
        ai: 0
      }
    };

    const index = 0;

    const newGame = move(oldGame, index).merge();

    equal(newGame, 'Game ended');
  });

  it('return position not empty', () => {
    const oldGame = {
      board: getBoard(_, _, _, X, _, _, _, _, _).merge(),
      ended: false,
      started: true,
      lastMove: 3,
      winners: null,
      score: {
        human: 0,
        ai: 0
      }
    };

    const index = 3;

    const newGame = move(oldGame, index).merge();

    equal(newGame, 'Position NOT empty');
  });

  it('return invalid position', () => {
    const oldGame = {
      board: getBoard(_, _, _, X, _, _, _, _, _).merge(),
      ended: false,
      started: true,
      lastMove: 3,
      winners: null,
      score: {
        human: 0,
        ai: 0
      }
    };

    const index = -1;

    const newGame = move(oldGame, index).merge();

    equal(newGame, 'Invalid index: -1');
  });

  it('set ended and winners when someone wins', () => {
    const oldGame = {
      board: getBoard(O, O, _, X, X, _, _, _, _).merge(),
      ended: false,
      started: true,
      lastMove: 1,
      winners: null,
      aiStarted: false,
      isAiTurn: false,
      score: {
        human: 0,
        ai: 0
      }
    };

    const index = 5;

    const expected = {
      board: getBoard(O, O, _, X, X, X, _, _, _).merge(),
      ended: true,
      started: true,
      lastMove: 5,
      winners: [3, 4, 5],
      aiStarted: false,
      isAiTurn: true,
      score: {
        human: 1,
        ai: 0
      }
    };

    const newGame = move(oldGame, index).merge();

    deepEqual(newGame, expected);
  });

  it('set ended when nobody wins', () => {
    const oldGame = {
      board: getBoard(O, X, O, X, O, X, X, O, 0).merge(),
      ended: false,
      started: true,
      lastMove: 1,
      winners: null,
      aiStarted: true,
      isAiTurn: false,
      score: {
        human: 0,
        ai: 0
      }
    };

    const index = 8;

    const expected = {
      board: getBoard(O, X, O, X, O, X, X, O, X).merge(),
      ended: true,
      started: true,
      lastMove: 8,
      winners: null,
      aiStarted: true,
      isAiTurn: true,
      score: {
        human: 0,
        ai: 0
      }
    };

    const newGame = move(oldGame, index).merge();

    deepEqual(newGame, expected);
  });

  it('return invalid move', () => {
    const oldGame = {
      board: getBoard(X, O, X, O, O, X, _, X, O).merge(),
      ended: false,
      started: true,
      lastMove: 8,
      winners: null,
      aiStarted: false,
      isAiTurn: false,
      score: {
        human: 0,
        ai: 0
      }
    };

    const index = 0;

    const newGame = move(oldGame, index).merge();

    equal(newGame, 'Position NOT empty');
  });
});

