import { getEmptyPositions } from './getEmptyPositions';
import * as assert from 'ptz-assert';

describe('getEmptyPositions', () => {
  it('get 3', () => {
    const board = [0, 1, 0, 0, 1, 0, -1, 0, -1];

    const expected = [0, 2, 3, 5, 7];

    const emptyPositions = getEmptyPositions(board);
    
    assert.deepEqual(emptyPositions, expected);
  });
});
