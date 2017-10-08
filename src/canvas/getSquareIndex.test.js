import getSquareIndex from './getSquareIndex';
import * as assert from 'ptz-assert';

describe('getSquareIndex', () => {
  it('board: 90_90, click: 10_20, index: 0', () => {
    const size = { clientWidth: 90, clientHeight: 90 };
    const position = {
      x: 10,
      y: 20
    };

    const index = getSquareIndex(size, position);

    assert.equal(index, 0);
  });

  it('board: 90_90, click: 40_25, index: 1', () => {
    const size = { clientWidth: 90, clientHeight: 90 };
    const position = {
      x: 40,
      y: 25
    };

    const index = getSquareIndex(size, position);

    assert.equal(index, 1);
  });

  it('board: 90_90, click: 70_80, index: 8', () => {
    const size = { clientWidth: 90, clientHeight: 90 };
    const position = {
      x: 70,
      y: 80
    };

    const index = getSquareIndex(size, position);

    assert.equal(index, 8);
  });

  it('board: 90_90, click: 120_120, index: null', () => {
    const size = { clientWidth: 90, clientHeight: 90 };
    const position = {
      x: 120,
      y: 120
    };

    const index = getSquareIndex(size, position);

    assert.notOk(index);
  });
});
