import createFrame from './createFrame';
import * as assert from 'ptz-assert';

describe('createFrame', () => {
  it('line', () => {
    const type = 'line';
    const data = [[0, 0], [30, 30]];

    const expected = {
      type,
      data
    };

    const frame = createFrame('line', data);

    assert.deepEqual(frame, expected);
  });
});
