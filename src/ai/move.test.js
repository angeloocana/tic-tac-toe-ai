import * as assert from 'ptz-assert';
import { getPositionIndex, move } from './move';
import { initialBoard, xValue } from './constants';

describe('tic tac toe Move', () => {
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

  it('move', () => {
    const aiOutput = [0.4818037057393424,
      0.4865677537510252,
      0.486224677851938,
      0.540094654187795,
      0.4750220237912991,
      0.43924352804581457,
      0.4600724506692181,
      0.48519501945841503,
      0.5362841853102368
    ];

    const newBoard = move(initialBoard, aiOutput, xValue);

    const expected = [
      0, 0, 0, xValue, 0, 0, 0, 0, 0
    ];

    assert.deepEqual(newBoard, expected);
  });
});

