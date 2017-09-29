import * as assert from 'ptz-assert';
import { getNClicks } from './getNClicks';
import {
  initialBoard
} from './constants';

describe('getNClicks', () => {
  it('return 0 for initial Board', () => {
    const nClicks = getNClicks(initialBoard);

    assert.equal(nClicks, 0);
  });

  it('return 1', () => {
    const board = [1, 0, 0, 0, 0, 0, 0, 0, 0];
    const nClicks = getNClicks(board);

    assert.equal(nClicks, 1);
  });

  it('return 2', () => {
    const board = [1, -1, 0, 0, 0, 0, 0, 0, 0];
    const nClicks = getNClicks(board);

    assert.equal(nClicks, 2);
  });

  it('return 3', () => {
    const board = [1, -1, 1, 0, 0, 0, 0, 0, 0];
    const nClicks = getNClicks(board);

    assert.equal(nClicks, 3);
  });

  it('return 8', () => {
    const board = [1, -1, 1, -1, -1, 1, 0, 1, -1];
    const nClicks = getNClicks(board);

    assert.equal(nClicks, 8);
  });

  it('return 8', () => {
    const board = [-1, 1, -1, 1, -1, 1, 1, -1, 0];
    const nClicks = getNClicks(board);

    assert.equal(nClicks, 8);
  });
});
