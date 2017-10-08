import getO from './getO';
import getBoardSquares from './getBoardSquares';
import * as assert from 'ptz-assert';

describe('getO', () => {
  it('90x90 square 0', () => {
    const size = {
      clientWidth: 90,
      clientHeight: 90
    };

    const square = getBoardSquares(size)[0];
    const expected = [15, 15, 20, 0, 2 * Math.PI];

    const o = getO(size, square);

    assert.deepEqual(o, expected);
  });

  it('90x90 square 1', () => {
    const size = {
      clientWidth: 90,
      clientHeight: 90
    };

    const square = getBoardSquares(size)[1];
    const expected = [45, 15, 20, 0, 2 * Math.PI];

    const o = getO(size, square);

    assert.deepEqual(o, expected);
  });

  it('90x90 square 4', () => {
    const size = {
      clientWidth: 90,
      clientHeight: 90
    };

    const square = getBoardSquares(size)[4];
    const expected = [45, 45, 20, 0, 2 * Math.PI];

    const o = getO(size, square);

    assert.deepEqual(o, expected);
  });
});
