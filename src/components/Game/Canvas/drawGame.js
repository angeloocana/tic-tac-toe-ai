import { drawBoardLinesWithAnimation } from './drawBoardLines';
import { drawXWithAnimation } from './drawX';
import { drawArcWithAnimation } from './drawArc';

const drawGame = (theme, ctx, raf) => (game) => {
  if (!game.started) {
    drawBoardLinesWithAnimation(theme, ctx, raf);
    return;
  }

  // draw pieces
  // draw lastMove with animation
  // draw win line

  drawXWithAnimation(theme, ctx, raf)([0, 0]);
  drawArcWithAnimation(theme, ctx, raf)([100, 35, 20]);
};

export {
  drawGame
};
