import getEmptyPositions from './getEmptyPositions';
import { _, X, O } from './constants';
import getBoard from './getBoard';
import * as assert from 'ptz-assert';

describe('getEmptyPositions', () => {
  it('5 empty positions', () => {
    const board = getBoard(_, X, _, _, X, _, O, _, O);

    const expected = [0, 2, 3, 5, 7];

    const emptyPositions = getEmptyPositions(board);

    assert.deepEqual(emptyPositions, expected);
  });

  it('NO empty positions', () => {
    const board = getBoard(O, X, O, X, O, X, O, X, O);

    const expected = [];

    const emptyPositions = getEmptyPositions(board);

    assert.deepEqual(emptyPositions, expected);
  });

  it('all empty positions', () => {
    const board = getBoard();

    const expected = [0, 1, 2, 3, 4, 5, 6, 7, 8];

    const emptyPositions = getEmptyPositions(board);

    assert.deepEqual(emptyPositions, expected);
  });
});
