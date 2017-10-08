import getLineFrames from './getLineFrames';
import * as assert from 'ptz-assert';

describe('getLineFrames', () => {
  it('0,0 0,100 10', () => {
    const line = [[0, 0], [0, 100]];
    const percentageByFrame = 10;

    const expectedLines = [
      { type: 'line', data: [[0, 0], [0, 10]] },
      { type: 'line', data: [[0, 10], [0, 20]] },
      { type: 'line', data: [[0, 20], [0, 30]] },
      { type: 'line', data: [[0, 30], [0, 40]] },
      { type: 'line', data: [[0, 40], [0, 50]] },
      { type: 'line', data: [[0, 50], [0, 60]] },
      { type: 'line', data: [[0, 60], [0, 70]] },
      { type: 'line', data: [[0, 70], [0, 80]] },
      { type: 'line', data: [[0, 80], [0, 90]] },
      { type: 'line', data: [[0, 90], [0, 100]] }
    ];

    const lines = getLineFrames(percentageByFrame, line);

    assert.deepEqual(lines, expectedLines);
  });
});
