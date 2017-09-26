import { drawXWithAnimation } from './drawX';
import { drawOWithAnimation } from './drawO';
import { oValue, xValue } from '../../../ai/constants';
import { getBoardSquares } from './getBoardSquares';

const drawLastMove = (theme, ctx, raf) => (game) => {
  const squares = getBoardSquares(ctx.canvas);
  const _drawO = drawOWithAnimation(theme.o, ctx, raf);
  const _drawX = drawXWithAnimation(theme.x, ctx, raf);

  const square = squares[game.lastMove];
  const value = game.board[game.lastMove];

  switch (value) {
    case oValue: return _drawO(square);
    case xValue: return _drawX(square);
    default: return null;
  }
};

export {
  drawLastMove
};
