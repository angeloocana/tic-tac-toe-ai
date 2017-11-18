import getEmptyPositions from './getEmptyPositions';
import { _, X, O } from './constants';
import getBoard from './getBoard';
import { deepEqual } from 'ptz-assert';

describe('getEmptyPositions', () => {
  it('5 empty positions', () => {
    const board = getBoard(_, X, _, _, X, _, O, _, O).merge();

    const expected = [0, 2, 3, 5, 7];

    const emptyPositions = getEmptyPositions(board);

    deepEqual(emptyPositions, expected);
  });

  it('NO empty positions', () => {
    const board = getBoard(O, X, O, X, O, X, O, X, O).merge();

    const expected = [];

    const emptyPositions = getEmptyPositions(board);

    deepEqual(emptyPositions, expected);
  });

  it('all empty positions', () => {
    const board = getBoard().merge();

    const expected = [0, 1, 2, 3, 4, 5, 6, 7, 8];

    const emptyPositions = getEmptyPositions(board);

    deepEqual(emptyPositions, expected);
  });
});

