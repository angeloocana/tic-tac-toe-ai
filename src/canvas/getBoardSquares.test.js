import getBoardSquares from './getBoardSquares';
import * as assert from 'ptz-assert';

describe('getBoardSquares', () => {
  it('90x90', () => {
    const size = { clientWidth: 90, clientHeight: 90 };

    const expected = [
      [[0, 0], [30, 30]], // 1
      [[30, 0], [60, 30]], // 2
      [[60, 0], [90, 30]], // 3

      [[0, 30], [30, 60]], // 4
      [[30, 30], [60, 60]], // 5
      [[60, 30], [90, 60]], // 6

      [[0, 60], [30, 90]], // 7
      [[30, 60], [60, 90]], // 8
      [[60, 60], [90, 90]] // 9
    ];

    const squares = getBoardSquares(size);

    assert.deepEqual(squares, expected);
  });
});
