import {
  drawBoardLines,
  drawBoardLinesWithAnimation
} from './drawBoardLines';
import { drawPositions } from './drawPositions';
import { drawLastMove } from './drawLastMove';
import { drawWinLine } from './drawWinLine';

const drawGame = (theme, ctx, raf) => (game) => {
  if (!game.started) {
    drawBoardLinesWithAnimation(theme, ctx, raf);
    return;
  }

  drawBoardLines(theme, ctx);

  drawPositions(theme, ctx)(game);

  drawLastMove(theme, ctx, raf)(game);

  drawWinLine(theme, ctx, raf)(game);
};

export {
  drawGame
};
