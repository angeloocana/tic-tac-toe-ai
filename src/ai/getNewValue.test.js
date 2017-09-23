import * as assert from 'ptz-assert';
import { getNewValue } from './getNewValue';
import {
  initialBoard,
  xValue,
  oValue
} from './constants';

describe('ai getNewValue', () => {
  it('return X for 1º click', () => {
    const newValue = getNewValue(initialBoard);

    assert.equal(newValue, xValue);
  });

  it('return O for 2º click', () => {
    const board = [1, 0, 0, 0, 0, 0, 0, 0, 0];
    const newValue = getNewValue(board);

    assert.equal(newValue, oValue);
  });

  it('return X for 3º click', () => {
    const board = [1, -1, 0, 0, 0, 0, 0, 0, 0];
    const newValue = getNewValue(board);

    assert.equal(newValue, xValue);
  });

  it('return O for 4º click', () => {
    const board = [1, -1, 1, 0, 0, 0, 0, 0, 0];
    const newValue = getNewValue(board);

    assert.equal(newValue, oValue);
  });
});
