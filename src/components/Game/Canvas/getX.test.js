import { getXFor00, getX } from './getX';
import * as assert from 'ptz-assert';

describe('getX', () => {
  it('getXFor00', () => {
    const expectedLines = [
      [[6, 6], [24, 24]], 
      [[6, 24], [24, 6]]      
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
      [[36, 36], [54, 54]], 
      [[36, 54], [54, 36]]      
    ];

    const size = { clientHeight: 90, clientWidth: 90 };

    const lines = getX(size, [30, 30]);

    assert.deepEqual(lines, expectedLines);
  });

  it('getX for x:0, y:30', () => {
    const expectedLines = [
      [[6, 36], [24, 54]],
      [[6, 54], [24, 36]]
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
