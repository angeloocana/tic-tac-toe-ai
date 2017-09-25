import * as assert from 'ptz-assert';
import { getNewValue } from './getNewValue';
import { xValue, oValue } from './constants';

describe('ai getNewValue', () => {
  it('return X for 1º click', () => {
    const newValue = getNewValue(0);
    assert.equal(newValue, xValue);
  });

  it('return O for 2º click', () => {
    const newValue = getNewValue(1);
    assert.equal(newValue, oValue);
  });

  it('return X for 3º click', () => {
    const newValue = getNewValue(2);
    assert.equal(newValue, xValue);
  });

  it('return O for 4º click', () => {
    const newValue = getNewValue(3);
    assert.equal(newValue, oValue);
  });
});
