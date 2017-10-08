import * as assert from 'ptz-assert';
import getPositionIndex from './getPositionIndex';

describe('tic tac toe getPositionIndex', () => {
  it('returns the highest value index', () => {
    const aiOutput = [0.5247700751609563,
      0.444376779239826,
      0.49055474346110584,
      0.4433094142293362,
      0.47968703401543245,
      0.5113365396751511,
      0.4490295770006924,
      0.5307527049064495,
      0.5129285041905582];

    const index = getPositionIndex(aiOutput);
    assert.equal(index, 7);
  });
});
