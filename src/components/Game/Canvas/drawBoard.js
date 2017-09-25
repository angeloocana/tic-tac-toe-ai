import { drawBoardLinesWithAnimation } from './drawBoardLines';
import { drawXWithAnimation } from './drawX';
import { drawArcWithAnimation } from './drawArc';

const drawBoard = (theme, ctx, raf) => (board) => {
  drawBoardLinesWithAnimation(theme, ctx, raf);
  drawXWithAnimation(theme, ctx, raf)([0, 0]);
  drawArcWithAnimation(theme, ctx, raf)([100, 35, 20]);
};

export {
  drawBoard
};
