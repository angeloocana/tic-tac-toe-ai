import { getLines } from './getLines';
import * as assert from 'ptz-assert';

describe('getLines', () => {
  it('90x90', () => {
    const expectedLines = [
      [[30, 0], [30, 90]],
      [[60, 0], [60, 90]],
      [[0, 30], [90, 30]],
      [[0, 60], [90, 60]]
    ];

    const lines = getLines();

    assert.deepEqual(lines, expectedLines);
  });
});
