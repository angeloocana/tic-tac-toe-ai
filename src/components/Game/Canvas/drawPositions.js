import { drawX } from './drawX';
import { drawO } from './drawO';
import { emptyValue, oValue, xValue } from '../../../ai/constants';
import { getBoardSquares } from './getBoardSquares';

const drawPositions = (theme, ctx) => (game) => {
  const squares = getBoardSquares(ctx.canvas);
  const _drawO = drawO(theme.o, ctx);
  const _drawX = drawX(theme.x, ctx);

  const drawPosition = (position) => {
    const square = squares[position.i];

    switch (position.value) {
      case oValue: return _drawO(square);
      case xValue: return _drawX(square);
      default: return null;
    }
  };

  game.board
    .map((value, i) => ({ value, i })) // Keep index
    .filter(p => p.value !== emptyValue) // Remove empty values
    .filter(p => p.i !== game.lastMove) // Remove last move it will be draw later with animation
    .map(drawPosition);
};

export {
  drawPositions
};
