import getWinners from './getWinners';
import { X, O, _ } from './constants';
import getBoard from './getBoard';
import * as assert from 'ptz-assert';

describe('getWinners', () => {
  it('return null when initial game', () => {
    const board = getBoard();
    const winners = getWinners(board);
    assert.notOk(winners);
  });

  it('return null when nobody wins', () => {
    const board = getBoard(X, O, X, O, X, O, O, X, O);
    const winners = getWinners(board);
    assert.notOk(winners);
  });

  it('return [0, 1, 2]', () => {
    const board = getBoard(X, X, X, O, O, _, _, _, _);
    const expected = [0, 1, 2];
    const winners = getWinners(board);

    assert.deepEqual(winners, expected);
  });

  it('return [3, 4, 5', () => {
    const board = getBoard(O, O, _, X, X, X, _, _, _);
    const expected = [3, 4, 5];
    const winners = getWinners(board);

    assert.deepEqual(winners, expected);
  });

  it('return [6, 7, 8', () => {
    const board = getBoard(O, O, _, _, _, _, X, X, X);
    const expected = [6, 7, 8];
    const winners = getWinners(board);

    assert.deepEqual(winners, expected);
  });

  it('return [0, 3, 6', () => {
    const board = getBoard(O, X, _, O, X, X, O, _, _);
    const expected = [0, 3, 6];
    const winners = getWinners(board);

    assert.deepEqual(winners, expected);
  });

  it('return [1, 4, 7', () => {
    const board = getBoard(X, O, X, X, O, _, _, O, _);
    const expected = [1, 4, 7];
    const winners = getWinners(board);

    assert.deepEqual(winners, expected);
  });

  it('return [2, 5, 8', () => {
    const board = getBoard(_, X, O, X, _, O, _, X, O);
    const expected = [2, 5, 8];
    const winners = getWinners(board);

    assert.deepEqual(winners, expected);
  });

  it('return [0, 4, 8', () => {
    const board = getBoard(O, X, _, X, O, _, X, _, O);
    const expected = [0, 4, 8];
    const winners = getWinners(board);

    assert.deepEqual(winners, expected);
  });

  it('return [2, 4, 6]', () => {
    const board = getBoard(_, O, X, O, X, _, X, _, _);
    const expected = [2, 4, 6];
    const winners = getWinners(board);

    assert.deepEqual(winners, expected);
  });
});
