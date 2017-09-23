import * as assert from 'ptz-assert';
import { getScore } from './getScore';

describe('ticTacToe getScore', () => {
  it('0 0 0 0 0 0 0 0 0 => 0 0', () => {
    const score = getScore([0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);

    const expected = {
      x: 0,
      o: 0
    };

    assert.deepEqual(score, expected);
  });

  it('1 0 0 0 0 0 0 0 0 => 0 0', () => {
    const score = getScore([1, 0, 0, 0, 0, 0, 0, 0, 0, 0]);

    const expected = {
      x: 0,
      o: 0
    };

    assert.deepEqual(score, expected);
  });

  it('1, 1, 1, -1, -1, 0, 0, 0, 0, 0 => 1 -1', () => {
    const score = getScore([1, 1, 1, -1, -1, 0, 0, 0, 0, 0]);

    const expected = {
      x: 1,
      o: -1
    };

    assert.deepEqual(score, expected);
  });

  it('1, -1, 1, -1, -1, -1, 1, 1, 0 => -1 1', () => {
    const score = getScore([1, -1, 1, -1, -1, -1, 1, 1, 0]);

    const expected = {
      x: -1,
      o: 1
    };

    assert.deepEqual(score, expected);
  });

  it('-1, 0, 1, 0, 1, -1, 1, -1, 1 => 1 -1', () => {
    const score = getScore([-1, 0, 1, 0, 1, -1, 1, -1, 1]);

    const expected = {
      x: 1,
      o: -1
    };

    assert.deepEqual(score, expected);
  });

});
