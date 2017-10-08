import * as assert from 'ptz-assert';
import getNClicks from './getNClicks';
import { _, X, O } from './constants';
import getBoard from './getBoard';

describe('getNClicks', () => {
  it('return 0 for initial Board', () => {
    const board = getBoard();
    const nClicks = getNClicks(board);
        
    assert.equal(nClicks, 0);
  });

  it('return 1', () => {
    const board = getBoard(X);
    const nClicks = getNClicks(board);
        
    assert.equal(nClicks, 1);
  });

  it('return 2', () => {
    const board = getBoard(X, O);
    const nClicks = getNClicks(board);
        
    assert.equal(nClicks, 2);
  });

  it('return 3', () => {
    const board = getBoard(X, O, X);
    const nClicks = getNClicks(board);
        
    assert.equal(nClicks, 3);
  });

  it('return 4', () => {
    const board = getBoard(_, X, _, O, _, X, _, O, _);
    const nClicks = getNClicks(board);
        
    assert.equal(nClicks, 4);
  });

  it('return 5', () => {
    const board = getBoard(X, _, X, _, O, _, X, _, O);
    const nClicks = getNClicks(board);
        
    assert.equal(nClicks, 5);
  });

  it('return 6', () => {
    const board = getBoard(X, O, X, _, O, _, X, _, O);
    const nClicks = getNClicks(board);
        
    assert.equal(nClicks, 6);
  });

  it('return 7', () => {
    const board = getBoard(X, O, X, O, _, X, _, X, O);
    const nClicks = getNClicks(board);
        
    assert.equal(nClicks, 7);
  });

  it('return 8', () => {
    const board = getBoard(_, O, X, O, X, O, X, X, O);
    const nClicks = getNClicks(board);
        
    assert.equal(nClicks, 8);
  });

  it('return 9', () => {
    const board = getBoard(X, O, X, O, X, O, X, X, O);
    const nClicks = getNClicks(board);
        
    assert.equal(nClicks, 9);
  });
});
