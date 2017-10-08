import clearCanvas from './clearCanvas';
import {
  drawBoardLines,
  drawBoardLinesWithAnimation
} from './drawBoardLines';
import drawPositions from './drawPositions';
import drawLastMove from './drawLastMove';
import drawWinLine from './drawWinLine';

const drawGame = (theme, ctx, raf) => (game) => {
  clearCanvas(ctx);

  if (!game.started) {
    drawBoardLinesWithAnimation(theme.boardLines, ctx, raf);
    return;
  }

  drawBoardLines(theme.boardLines, ctx);

  drawPositions(theme.positions, ctx)(game);

  drawLastMove(theme.positions, ctx, raf)(game);

  drawWinLine(theme.winLine, ctx, raf)(game);
};

export default drawGame;
