import { getXFor00, getX } from './getX';
import * as assert from 'ptz-assert';

describe('getX', () => {
  it('getXFor00', () => {
    const expectedLines = [
      [[0, 0], [30, 30]],
      [[0, 30], [30, 0]]
    ];

    const size = { clientHeight: 90, clientWidth: 90 };

    const lines = getXFor00(size);

    assert.deepEqual(lines, expectedLines);
  });

  it('memoize getXFor00', () => {
    const size = { clientHeight: 90, clientWidth: 90 };
    const size2 = { clientHeight: 100, clientWidth: 100 };

    const linesA = getXFor00(size);
    const linesB = getXFor00(size);

    const linesC = getXFor00(size2);

    assert.equal(linesA, linesB);
    assert.notEqual(linesB, linesC);
  });

  it('getX for x:30, y:30', () => {
    const expectedLines = [
      [[30, 30], [60, 60]],
      [[30, 60], [60, 30]]
    ];

    const size = { clientHeight: 90, clientWidth: 90 };

    const lines = getX(size, [30, 30]);

    assert.deepEqual(lines, expectedLines);
  });

  it('getX for x:0, y:30', () => {
    const expectedLines = [
      [[0, 30], [30, 60]],
      [[0, 60], [30, 30]]
    ];

    const size = { clientHeight: 90, clientWidth: 90 };

    const lines = getX(size, [0, 30]);

    assert.deepEqual(lines, expectedLines);
  });

  it('memoize getX', () => {
    const size = { clientHeight: 90, clientWidth: 90 };
    const startPosition = [30, 30];
    const startPosition2 = [60, 60];

    const linesA = getX(size, startPosition);
    const linesB = getX(size, startPosition);

    const linesC = getX(size, startPosition2);

    assert.equal(linesA, linesB);
    assert.notEqual(linesB, linesC);
  });
});
