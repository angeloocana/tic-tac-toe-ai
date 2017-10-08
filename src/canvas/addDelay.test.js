import addDelay from './addDelay';
import * as assert from 'ptz-assert';

describe('addDelay', () => {
  it('add 3 frames delay', () => {
    const linesBefore = [
      [[30, 0], [30, 90]],
      [[60, 0], [60, 90]]
    ];

    const expectedLines = [
      [[30, 0], [30, 90]],
      [[60, 0], [60, 90]],
      null,
      null,
      null
    ];

    const delay = 3;

    const lines = addDelay(delay)(linesBefore);

    assert.deepEqual(lines, expectedLines);
  });
});
