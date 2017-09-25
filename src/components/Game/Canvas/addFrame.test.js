import { addFrame } from './addFrame';
import * as assert from 'ptz-assert';

describe('addFrame', () => {
  it('line', () => {
    const type = 'line';
    const data = [[0, 0], [30, 30]];

    const framesBefore = [];

    const expected = [{
      type,
      data
    }];

    const addLineFrame = addFrame('line');
    const framesAfter = addLineFrame(framesBefore, data);

    assert.deepEqual(framesAfter, expected);
  });
});
