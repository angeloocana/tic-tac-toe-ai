import getBoard from './getBoard';
import { equal } from 'ptz-assert';
import dec2bin from './dec2bin';
import { _ } from './constants';
import { map } from 'ramda';

describe('getBoard', () => {
  it('initial board', () => {
    const board = getBoard();
    equal(board.merge(), 0);
  });

  it('X__ ___ ___', () => {
    const expectedBoard = '1';
    const board = map(dec2bin, getBoard(1));
    equal(board.merge(), expectedBoard);
  });

  it('O__ ___ ___', () => {
    const expectedBoard = '10';
    const board = map(dec2bin, getBoard(2));
    equal(board.merge(), expectedBoard);
  });

  it('XO_ ___ ___', () => {
    const expectedBoard = '1001';
    const board = map(dec2bin, getBoard(1, 2));
    equal(board.merge(), expectedBoard);
  });

  it('XOX ___ ___', () => {
    const expectedBoard = '11001';
    const board = map(dec2bin, getBoard(1, 2, 1));
    equal(board.merge(), expectedBoard);
  });

  it('XOX O__ ___', () => {
    const expectedBoard = '10011001';
    const board = map(dec2bin, getBoard(1, 2, 1, 2));
    equal(board.merge(), expectedBoard);
  });

  it('XOX OX_ ___', () => {
    const expectedBoard = '110011001';
    const board = map(dec2bin, getBoard(1, 2, 1, 2, 1));
    equal(board.merge(), expectedBoard);
  });

  it('XOX OXO ___', () => {
    const expectedBoard = '100110011001';
    const board = map(dec2bin, getBoard(1, 2, 1, 2, 1, 2));
    equal(board.merge(), expectedBoard);
  });

  it('XOX OXO X__', () => {
    const expectedBoard = '1100110011001';
    const board = map(dec2bin, getBoard(1, 2, 1, 2, 1, 2, 1));
    equal(board.merge(), expectedBoard);
  });

  it('XOX OXO XO_', () => {
    const expectedBoard = '1001100110011001';
    const board = map(dec2bin, getBoard(1, 2, 1, 2, 1, 2, 1, 2));
    equal(board.merge(), expectedBoard);
  });

  it('XOX OXO XOX', () => {
    const expectedBoard = '11001100110011001';
    const board = map(dec2bin, getBoard(1, 2, 1, 2, 1, 2, 1, 2, 1));
    equal(board.merge(), expectedBoard);
  });

  it('_X_ ___ ___', () => {
    const expectedBoard = '100';
    const board = map(dec2bin, getBoard(_, 1));
    equal(board.merge(), expectedBoard);
  });

  it('__X ___ ___', () => {
    const expectedBoard = '10000';
    const board = map(dec2bin, getBoard(_, _, 1));
    equal(board.merge(), expectedBoard);
  });

  it('___ ___ __X', () => {
    const expectedBoard = '10000000000000000';
    const board = map(dec2bin, getBoard(_, _, _, _, _, _, _, _, 1));
    equal(board.merge(), expectedBoard);
  });

  it('___ __O __X', () => {
    const expectedBoard = '10000100000000000';
    const board = map(dec2bin, getBoard(_, _, _, _, _, 2, _, _, 1));
    equal(board.merge(), expectedBoard);
  });
});
