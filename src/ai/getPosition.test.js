import getPosition from './getPosition';
import getBoard from './getBoard';
import { X, O, _ } from './constants';
import * as assert from 'ptz-assert';
import { liftN } from 'ramda';
import Result from 'folktale/result';
import Maybe from 'folktale/maybe';

const equal = liftN(2, assert.equal);

describe('getPosition', () => {
  it('x:0, y:0 board:___ ___ ___', () => {
    const board = getBoard(),
      index = Maybe.Just(0),
      expectedPosition = Result.Ok(0),
      position = liftN(2, getPosition, index, board);

    equal(position, expectedPosition);
  });

  it('index:4 board:___ _1_ ___', () => {
    const board = getBoard(_, _, _, _, X, _, _, _, _),
      index = Maybe.Just(4),
      expectedPosition = Result.Ok(1),
      position = liftN(2, getPosition, index, board);

    equal(position, expectedPosition);
  });

  it('index:0 board:2__ ___ ___', () => {
    const board = getBoard(O, _, _, _, _, _, _, _, _),
      index = Maybe.Just(0),
      expectedPosition = Result.Ok(2),
      position = liftN(2, getPosition, index, board);

    equal(position, expectedPosition);  
  });

  it('index:null board:2__ ___ ___', () => {
    const board = getBoard(O, _, _, _, _, _, _, _, _),
      index = Result.Ok(null),
      expectedPosition = Result.Ok(2),
      position = liftN(2, getPosition, index, board);

    equal(position, expectedPosition);  
  });
  
  it('index:-1 board:2__ ___ ___', () => {
    const board = getBoard(O, _, _, _, _, _, _, _, _),
      index = Maybe.Just(-1),
      expectedPosition = Result.Ok(2),
      position = liftN(2, getPosition, index, board);

    equal(position, expectedPosition);  
  });
});

