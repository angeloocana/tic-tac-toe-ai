import isPositionEmpty from './isPositionEmpty';
import getBoard from './getBoard';
import * as assert from 'ptz-assert';

const _ = null;

describe('isPositionEmpty', () => {
  it('empty index:0 board:0', () => {
    const board = getBoard();
    const empty = isPositionEmpty(board, 0);
    assert.ok(empty);
  });

  it('empty index:8 board:0', () => {
    const board = getBoard();
    const empty = isPositionEmpty(board, 8);
    assert.ok(empty);
  });

  it('NOT empty index:4 board:___ _1_ ___', () => {
    const board = getBoard(_, _, _, _, 1, _, _, _, _);
    const empty = isPositionEmpty(board, 4);

    assert.notOk(empty);
  });

  it('NOT empty index:0 board:2__ ___ ___', () => {
    const board = getBoard(2, _, _, _, _, _, _, _, _);
    const empty = isPositionEmpty(board, 0);

    assert.notOk(empty);
  });
});
