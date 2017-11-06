import getPosition from './getPosition';
import getBoard from './getBoard';
import { X, O, _ } from './constants';
import * as assert from 'ptz-assert';

describe('getPosition', () => {
  it('x:0, y:0 board:___ ___ ___', () => {
    const board = getBoard();
    const expectedPosition = 0;
    const position = getPosition(board, 0);

    assert.equal(position, expectedPosition);
  });

  it('index:4 board:___ _1_ ___', () => {
    const board = getBoard(_, _, _, _, X, _, _, _, _);
    const expectedPosition = 1;
    const position = getPosition(board, 4);

    assert.equal(position, expectedPosition);
  });

  it('index:0 board:2__ ___ ___', () => {
    const board = getBoard(O, _, _, _, _, _, _, _, _);
    const expectedPosition = 2;
    const position = getPosition(board, 0);

    assert.equal(position, expectedPosition);
  });
});
