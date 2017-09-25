import { getLineFrames } from './getLineFrames';
import * as assert from 'ptz-assert';

describe('getLineFrames', () => {
  it('0,0 0,100 10', () => {
    const line = [[0, 0], [0, 100]];
    const percentageByFrame = 10;

    const expectedLines = [
      [[0, 0], [0, 10]],
      [[0, 10], [0, 20]],
      [[0, 20], [0, 30]],
      [[0, 30], [0, 40]],
      [[0, 40], [0, 50]],
      [[0, 50], [0, 60]],
      [[0, 60], [0, 70]],
      [[0, 70], [0, 80]],
      [[0, 80], [0, 90]],
      [[0, 90], [0, 100]]
    ];

    const lines = getLineFrames(line, percentageByFrame);

    assert.deepEqual(lines, expectedLines);
  });
});
