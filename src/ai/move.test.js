import * as assert from 'ptz-assert';
import { move } from './move';
import {
  initialBoard,
  oValue,
  xValue,
  initialGame
} from './constants';

describe('move', () => {
  it('first move, set started and lastMove', () => {
    const oldGame = initialGame;
    const index = 3;

    const expected = {
      board: [0, 0, 0, xValue, 0, 0, 0, 0, 0],
      ended: false,
      started: true,
      lastMove: 3,
      winners: null
    };

    const newGame = move(oldGame, index);

    assert.deepEqual(newGame, expected);
  });

  it('if game ended return game', () => {
    const oldGame = {
      board: initialBoard,
      ended: true,
      started: true,
      lastMove: null,
      winners: null
    };

    const index = 0;

    const newGame = move(oldGame, index);

    assert.equal(newGame, oldGame);
  });

  it('return game and clean lastMove when position not empty', () => {
    const oldGame = {
      board: [0, 0, 0, xValue, 0, 0, 0, 0, 0],
      ended: false,
      started: true,
      lastMove: 3,
      winners: null
    };

    const index = 3;

    const expected = {
      board: [0, 0, 0, xValue, 0, 0, 0, 0, 0],
      ended: false,
      started: true,
      lastMove: null,
      winners: null
    };

    const newGame = move(oldGame, index);

    assert.deepEqual(newGame, expected);
  });

  it('return game and clean lastMove when invalid position', () => {
    const oldGame = {
      board: [0, 0, 0, xValue, 0, 0, 0, 0, 0],
      ended: false,
      started: true,
      lastMove: 3,
      winners: null
    };

    const index = -1;

    const expected = {
      board: [0, 0, 0, xValue, 0, 0, 0, 0, 0],
      ended: false,
      started: true,
      lastMove: null,
      winners: null
    };

    const newGame = move(oldGame, index);

    assert.deepEqual(newGame, expected);
  });

  it('set ended and winners when someone wins', () => {
    const oldGame = {
      board: [oValue, oValue, 0, xValue, xValue, 0, 0, 0, 0],
      ended: false,
      started: true,
      lastMove: 1,
      winners: null
    };

    const index = 5;

    const expected = {
      board: [oValue, oValue, 0, xValue, xValue, xValue, 0, 0, 0],
      ended: true,
      started: true,
      lastMove: 5,
      winners: [3, 4, 5]
    };

    const newGame = move(oldGame, index);

    assert.deepEqual(newGame, expected);
  });

  it('set ended when nobody wins', () => {
    const oldGame = {
      board: [oValue, xValue, oValue, xValue, oValue, xValue, xValue, oValue, 0],
      ended: false,
      started: true,
      lastMove: 1,
      winners: null
    };

    const index = 8;

    const expected = {
      board: [oValue, xValue, oValue, xValue, oValue, xValue, xValue, oValue, xValue],
      ended: true,
      started: true,
      lastMove: 8,
      winners: null
    };

    const newGame = move(oldGame, index);

    assert.deepEqual(newGame, expected);
  });
});
