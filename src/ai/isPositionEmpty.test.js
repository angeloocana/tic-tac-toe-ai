import isPositionEmpty from './isPositionEmpty';
import getBoard from './getBoard';
import { _ } from './constants';
import { equal } from 'ptz-assert';

describe('isPositionEmpty', () => {
  it('empty index:0 board:0', () => {
    const board = getBoard().merge(),
      empty = isPositionEmpty(0, board).merge();

    equal(empty, true);
  });

  it('empty index:8 board:0', () => {
    const board = getBoard().merge(),
      empty = isPositionEmpty(8, board).merge();

    equal(empty, true);
  });

  it('NOT empty index:4 board:___ _1_ ___', () => {
    const board = getBoard(_, _, _, _, 1, _, _, _, _).merge(),
      empty = isPositionEmpty(4, board).merge();

    equal(empty, false);
  });

  it('NOT empty index:0 board:2__ ___ ___', () => {
    const board = getBoard(2, _, _, _, _, _, _, _, _).merge(),
      empty = isPositionEmpty(0, board).merge();

    equal(empty, false);
  });
});

