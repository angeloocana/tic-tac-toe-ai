import * as assert from 'ptz-assert';
import { move } from './move';
import { initialBoard, xValue } from './constants';

describe('tic tac toe Move', () => {
  it('move', () => {
    const newBoard = move(initialBoard, 3, xValue);

    const expected = [
      0, 0, 0, xValue, 0, 0, 0, 0, 0
    ];

    assert.deepEqual(newBoard, expected);
  });
});

