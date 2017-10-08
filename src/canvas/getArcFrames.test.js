import getArcFrames from './getArcFrames';
import * as assert from 'ptz-assert';

describe('getArcFrames', () => {
  it('test', () => {
    const arc = [100, 35, 20];
    const percentagebyFrame = 10;

    const expected = [
      { 'data': [100, 35, 20, 0, 0.6283185307179586], 'type': 'arc' },
      { 'data': [100, 35, 20, 0.6283185307179586, 1.2566370614359172], 'type': 'arc' },
      { 'data': [100, 35, 20, 1.2566370614359172, 1.8849555921538756], 'type': 'arc' },
      { 'data': [100, 35, 20, 1.8849555921538756, 2.5132741228718345], 'type': 'arc' },
      { 'data': [100, 35, 20, 2.5132741228718345, 3.141592653589793], 'type': 'arc' },
      { 'data': [100, 35, 20, 3.141592653589793, 3.7699111843077513], 'type': 'arc' },
      { 'data': [100, 35, 20, 3.7699111843077513, 4.39822971502571], 'type': 'arc' },
      { 'data': [100, 35, 20, 4.39822971502571, 5.026548245743669], 'type': 'arc' },
      { 'data': [100, 35, 20, 5.026548245743669, 5.654866776461628], 'type': 'arc' },
      { 'data': [100, 35, 20, 5.654866776461628, 6.283185307179586], 'type': 'arc' }
    ];

    const frames = getArcFrames(percentagebyFrame, arc);

    assert.deepEqual(frames, expected);
  });
});
