import { X, O } from './constants';
import getPosition from './getPosition';
import log from 'ptz-log';

/**
 * Get position text to print
 * @param {Number} board board bits
 * @param {Number} index position index
 * @return {String} text to print
 */
const getPositionTxt = (board) => (index) => {
  switch (getPosition(board, index)) {
    case X: return 'X';
    case O: return 'O';
    default: return ' ';
  }
};

/**
 * Get board string to print
 * @param {Number} board board
 * @return {String} board string to print
 */
const getBoardTxt = (board) => {
  const g = getPositionTxt(board);
  return `
   ${g(0)} | ${g(1)} | ${g(2)}
   ${g(3)} | ${g(4)} | ${g(5)}
   ${g(6)} | ${g(7)} | ${g(8)}
  `;
};

const printBoard = (name, board) => {
  log(name, getBoardTxt(board));
};

export default printBoard;

export {
  getBoardTxt,
  printBoard
};
