import {
  drawBoardLines,
  drawBoardLinesWithAnimation
} from './drawBoardLines';
import { drawPositions } from './drawPositions';

const drawGame = (theme, ctx, raf) => (game) => {
  if (!game.started) {
    drawBoardLinesWithAnimation(theme, ctx, raf);
    return;
  }

  drawBoardLines(theme, ctx);

  // draw pieces
  drawPositions(theme, ctx)(game);

  // draw lastMove with animation
  // drawXWithAnimation(theme, ctx, raf)([0, 0]);
  // drawArcWithAnimation(theme, ctx, raf)([100, 35, 20]);

  // draw win line
};

export {
  drawGame
};
