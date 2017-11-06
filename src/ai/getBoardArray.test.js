import * as assert from 'ptz-assert';
import getBoardArray from './getBoardArray';
import getBoard from './getBoard';
import { X, O, _ } from './constants';

describe('getBoardArray', () => {
  it('board: ___ ___ ___ return: [_, _, _, _, _, _, _, _, _]', () => {
    const board = getBoard();
    const expected = [_, _, _, _, _, _, _, _, _];
    const input = getBoardArray(board);

    assert.deepEqual(input, expected);
  });

  it('board: ___ ___ ___ return: [X, _, O, _, _, _, _, _, _]', () => {
    const board = getBoard(X, _, O);
    const expected = [X, _, O, _, _, _, _, _, _];
    const input = getBoardArray(board);

    assert.deepEqual(input, expected);
  });

  it('get from Game', () => {
    const game = {
      board: getBoard(X, _, O)
    };
    const expected = [X, _, O, _, _, _, _, _, _];
    const input = getBoardArray(game);

    assert.deepEqual(input, expected);
  });
});
