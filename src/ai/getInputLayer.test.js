import * as assert from 'ptz-assert';
import getInputLayer from './getInputLayer';
import getBoard from './getBoard';
import { X, O, _ } from './constants';

describe('getInputLayer', () => {
  it('board: ___ ___ ___ return: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]', () => {
    const board = getBoard().getOrElse('Error');
    const expected = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    const input = getInputLayer(board).getOrElse('Error');

    assert.deepEqual(input, expected);
  });

  it('board: ___ ___ ___ return: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]', () => {
    const board = getBoard(X, _, O).getOrElse('Error');
    const expected = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    const input = getInputLayer(board).getOrElse('Error');

    assert.deepEqual(input, expected);
  });
});
