import { getWinLine } from './getWinLine';
import { xValue, oValue } from '../../../ai/constants';
import * as assert from 'ptz-assert';

describe('getWinLine', () => {
  it('0 -> 2', () => {
    const size = {
      clientWidth: 90,
      clientHeight: 90
    };

    const game = {
      board: [0, 0, 0, xValue, xValue, xValue, oValue, oValue, 0],
      ended: true,
      started: true,
      lastMove: 8,
      winners: [0, 1, 2]
    };

    const line = getWinLine(size, game);

    const expected = [[0, 15], [90, 15]];

    assert.deepEqual(line, expected);
  });

  it('3 -> 5  90,90', () => {
    const size = {
      clientWidth: 90,
      clientHeight: 90
    };

    const game = {
      board: [0, 0, 0, xValue, xValue, xValue, oValue, oValue, 0],
      ended: true,
      started: true,
      lastMove: 8,
      winners: [3, 4, 5]
    };

    const line = getWinLine(size, game);

    const expected = [[0, 45], [90, 45]];

    assert.deepEqual(line, expected);
  });

  it('6 -> 8', () => {
    const size = {
      clientWidth: 90,
      clientHeight: 90
    };

    const game = {
      board: [0, 0, 0, xValue, xValue, xValue, oValue, oValue, 0],
      ended: true,
      started: true,
      lastMove: 8,
      winners: [6, 7, 8]
    };

    const line = getWinLine(size, game);

    const expected = [[0, 75], [90, 75]];

    assert.deepEqual(line, expected);
  });

  it('0 -> 6', () => {
    const size = {
      clientWidth: 90,
      clientHeight: 90
    };

    const game = {
      board: [0, 0, 0, xValue, xValue, xValue, oValue, oValue, 0],
      ended: true,
      started: true,
      lastMove: 8,
      winners: [0, 3, 6]
    };

    const line = getWinLine(size, game);

    const expected = [[15, 0], [15, 90]];

    assert.deepEqual(line, expected);
  });

  it('1 -> 7  90,90', () => {
    const size = {
      clientWidth: 90,
      clientHeight: 90
    };

    const game = {
      board: [xValue, oValue, 0, xValue, oValue, 0, 0, oValue, xValue],
      ended: true,
      started: true,
      lastMove: 8,
      winners: [1, 4, 7]
    };

    const line = getWinLine(size, game);

    const expected = [[45, 0], [45, 90]];

    assert.deepEqual(line, expected);
  });

  it('2 -> 8', () => {
    const size = {
      clientWidth: 90,
      clientHeight: 90
    };

    const game = {
      board: [0, 0, 0, xValue, xValue, xValue, oValue, oValue, 0],
      ended: true,
      started: true,
      lastMove: 8,
      winners: [2, 5, 8]
    };

    const line = getWinLine(size, game);

    const expected = [[75, 0], [75, 90]];

    assert.deepEqual(line, expected);
  });

  it('0 -> 8  90,90', () => {
    const size = {
      clientWidth: 90,
      clientHeight: 90
    };

    const game = {
      board: [xValue, oValue, 0, oValue, xValue, 0, 0, 0, xValue],
      ended: true,
      started: true,
      lastMove: 8,
      winners: [0, 4, 8]
    };

    const line = getWinLine(size, game);

    const expected = [[0, 0], [90, 90]];

    assert.deepEqual(line, expected);
  });

  it('2 -> 6  90,90', () => {
    const size = {
      clientWidth: 90,
      clientHeight: 90
    };

    const game = {
      board: [oValue, 0, xValue, oValue, xValue, 0, xValue, 0, 0],
      ended: true,
      started: true,
      lastMove: 8,
      winners: [2, 4, 6]
    };

    const line = getWinLine(size, game);

    const expected = [[0, 90], [90, 0]];

    assert.deepEqual(line, expected);
  });
});
