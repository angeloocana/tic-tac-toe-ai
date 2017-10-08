import { drawXWithAnimation } from './drawX';
import { drawOWithAnimation } from './drawO';
import { O, X } from '../ai/constants';
import getBoardSquares from './getBoardSquares';
import getPosition from '../ai/getPosition';

const drawLastMove = (theme, ctx, raf) => (game) => {
  const squares = getBoardSquares(ctx.canvas);

  const square = squares[game.lastMove];
  const value = getPosition(game.board, game.lastMove);

  switch (value) {
    case O: return drawOWithAnimation(theme.o, ctx, raf)(square);
    case X: return drawXWithAnimation(theme.x, ctx, raf)(square);
    default: return null;
  }
};

export default drawLastMove;
