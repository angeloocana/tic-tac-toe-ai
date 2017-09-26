import { drawLinesWithAnimation } from './drawLinesWithAnimation';
import { getBoardSquares } from './getBoardSquares';
import { isNil } from 'ramda';

const getWinLine = (size, game) => {
  const squares = getBoardSquares(size);

  const firstSquare = squares[game.winners[0]];
  const lastSquare = squares[game.winners[2]];

  return [firstSquare[0], lastSquare[1]];
};

const drawWinLine = (theme, ctx, raf) => (game) => {
  if (isNil(game.winners)) {
    return null;
  }

  setTimeout(() => {
    const line = getWinLine(ctx.canvas, game);
    drawLinesWithAnimation(theme, ctx, raf)([line]);
  }, 500);

  return null;
};

export {
  drawWinLine
};
