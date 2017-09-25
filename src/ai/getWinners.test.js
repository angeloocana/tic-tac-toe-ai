import { getWinners } from './getWinners';
import {
  initialBoard,
  xValue,
  oValue
} from './constants';
import * as assert from 'ptz-assert';

describe('getWinners', () => {
  it('return null when initial game', () => {
    const winners = getWinners(initialBoard);
    assert.notOk(winners);
  });

  it('return null when nobody wins', () => {
    const board = [xValue, oValue, xValue, oValue, xValue, oValue, oValue, xValue, oValue];
    const winners = getWinners(board);
    assert.notOk(winners);
  });

  it('return [0, 1, 2]', () => {
    const board = [xValue, xValue, xValue, oValue, oValue, 0, 0, 0, 0];
    const expected = [0, 1, 2];
    const winners = getWinners(board);

    assert.deepEqual(winners, expected);
  });

  it('return [3, 4, 5', () => {
    const board = [oValue, oValue, 0, xValue, xValue, xValue, 0, 0, 0];
    const expected = [3, 4, 5];
    const winners = getWinners(board);

    assert.deepEqual(winners, expected);
  });

  it('return [6, 7, 8', () => {
    const board = [oValue, oValue, 0, 0, 0, 0, xValue, xValue, xValue];
    const expected = [6, 7, 8];
    const winners = getWinners(board);

    assert.deepEqual(winners, expected);
  });

  it('return [0, 3, 6', () => {
    const board = [oValue, xValue, 0, oValue, xValue, xValue, oValue, 0, 0];
    const expected = [0, 3, 6];
    const winners = getWinners(board);

    assert.deepEqual(winners, expected);
  });

  it('return [1, 4, 7', () => {
    const board = [xValue, oValue, xValue, xValue, oValue, 0, 0, oValue, 0];
    const expected = [1, 4, 7];
    const winners = getWinners(board);

    assert.deepEqual(winners, expected);
  });

  it('return [2, 5, 8', () => {
    const board = [0, xValue, oValue, xValue, 0, oValue, 0, xValue, oValue];
    const expected = [2, 5, 8];
    const winners = getWinners(board);

    assert.deepEqual(winners, expected);
  });

  it('return [0, 4, 8', () => {
    const board = [oValue, xValue, 0, xValue, oValue, 0, xValue, 0, oValue];
    const expected = [0, 4, 8];
    const winners = getWinners(board);

    assert.deepEqual(winners, expected);
  });

  it('return [2, 4, 6]', () => {
    const board = [0, oValue, xValue, oValue, xValue, 0, xValue, 0, 0];
    const expected = [2, 4, 6];
    const winners = getWinners(board);

    assert.deepEqual(winners, expected);
  });
});
