import drawX from './drawX';
import drawO from './drawO';
import getBoardSquares from './getBoardSquares';
import { emptyValue, O, X, boardIndexes } from '../ai/constants';
import getPosition from '../ai/getPosition';
import { map, filter, pipe } from 'ramda';

/**
 * Return list of index and values from game
 * @param {Number} board binary board
 * @return {[{i:Number, value: Number}]} indexes and values
 */
const getIndexesAndValues = (board) => map(i => (
  {
    i,
    value: getPosition(board, i)
  }
), boardIndexes);

/**
 * Draw board positions to the canvas
 * @param {*} theme colors, sizes and speed
 * @param {*} ctx canvas 2d context
 * @return {void}
 */
const drawPositions = (theme, ctx) => (game) => {
  const squares = getBoardSquares(ctx.canvas);
  const _drawO = drawO(theme.o, ctx);
  const _drawX = drawX(theme.x, ctx);

  const drawPosition = (position) => {
    const square = squares[position.i];

    switch (position.value) {
      case O: return _drawO(square);
      case X: return _drawX(square);
      default: return null;
    }
  };

  pipe(
    getIndexesAndValues,
    filter(p => p.value !== emptyValue), // Remove empty values
    filter(p => p.i !== game.lastMove), // Remove last move it will be draw later with animation
    map(drawPosition)
  )(game.board);
};

export default drawPositions;
