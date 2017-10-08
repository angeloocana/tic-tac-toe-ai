import getBoardLines from './getBoardLines';
import * as assert from 'ptz-assert';

describe('getBoardLines', () => {
  it('90x90', () => {
    const expectedLines = [
      [[30, 0], [30, 90]],
      [[60, 0], [60, 90]],
      [[0, 30], [90, 30]],
      [[0, 60], [90, 60]]
    ];

    const size = { clientHeight: 90, clientWidth: 90 };

    const lines = getBoardLines(size);

    assert.deepEqual(lines, expectedLines);
  });
});
