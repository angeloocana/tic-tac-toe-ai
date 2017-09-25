import { getArcFrames } from './getArcFrames';
import * as assert from 'ptz-assert';

describe('getArcFrames', () => {
  it('test', () => {
    const arc = [100, 35, 20];
    const percentagebyFrame = 10;

    const expected = [
      { 'data': [100, 35, 20, 0, 0.6283185307179586], 'type': 'arc' },
      { 'data': [100, 35, 20, 0, 0.6283185307179586], 'type': 'arc' },
      { 'data': [100, 35, 20, 0, 0.6283185307179586], 'type': 'arc' },
      { 'data': [100, 35, 20, 0, 0.6283185307179586], 'type': 'arc' },
      { 'data': [100, 35, 20, 0, 0.6283185307179586], 'type': 'arc' },
      { 'data': [100, 35, 20, 0, 0.6283185307179586], 'type': 'arc' },
      { 'data': [100, 35, 20, 0, 0.6283185307179586], 'type': 'arc' },
      { 'data': [100, 35, 20, 0, 0.6283185307179586], 'type': 'arc' },
      { 'data': [100, 35, 20, 0, 0.6283185307179586], 'type': 'arc' },
      { 'data': [100, 35, 20, 0, 6.283185307179586], 'type': 'arc' }
    ];

    const frames = getArcFrames(percentagebyFrame, arc);

    assert.deepEqual(frames, expected);
  });
});
