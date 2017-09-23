import {
  xValue,
  oValue
} from './constants';

const v = (position) => {
  switch (position) {
    case xValue: return 'X';
    case oValue: return 'O';
    default: return ' ';
  }
};

const getBoardString = (b) => {
  return `
   ${v(b[0])} | ${v(b[1])} | ${v(b[2])}
   ${v(b[3])} | ${v(b[4])} | ${v(b[5])}
   ${v(b[6])} | ${v(b[7])} | ${v(b[8])}
  `;
};

const printBoard = (name, board) => {
  console.log(name, board ? getBoardString(board) : 'null');
};

export {
  getBoardString,
  printBoard
};
