// import * as assert from 'ptz-assert';
import { getNetwork } from './getNetwork';
// import {random} from 'ptz-math';
import {
  loseValue,
  winValue,
  getMyScore
} from './getScore';
import {
  xValue,
  oValue,
  initialBoard
} from './constants';
import { move } from './move';
import { getNewValue } from './getNewValue';
import {getPositionIndex} from './getPositionIndex';
import { printBoard } from './printBoard';

const learningRates = {
  invalidMove: 0.3,
  validMove: 0.3,
  win: 0.3,
  lost: 0.3
};

const moveAndPropagate = (net, board) => {
  printBoard('old board: ', board);

  const output = net.activate(board);
  console.log('output: ', output);

  const index = getPositionIndex(output);
  const value = getNewValue(board);
  const newBoard = move(board, index, value);
  console.log('newBoard: ', newBoard);
  printBoard('new board: ', newBoard);

  if (newBoard) {
    const score = getMyScore(newBoard, value);
    if (score === winValue) {
      net.propagate(learningRates.win, newBoard);
      return null;
    }
    else if (score === loseValue) {
      net.propagate(learningRates.lose, );
      return null;
    }
    else {
      net.propagate(learningRates.validMove, newBoard);
      return newBoard;
    }
  } else {
    net.propagate(learningRates.invalidMove, );
    return board;
  }
};

describe('tic tac toe propagate', () => {
  it.skip('tic tac toe', () => {
    const netX = getNetwork();
    // const netO = getNetwork();

    // const get

    let board = initialBoard;

    for (var i = 0; i < 100; i += 1) {
      const value = i % 2 === 0 ? xValue : oValue;

      board = moveAndPropagate(netX, board, value);

      if (board === null) {
        board = initialBoard;
      }
    }
  });
});
