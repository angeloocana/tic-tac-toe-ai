import { getBoardLines } from './getBoardLines';
import { drawLine } from './drawLine';
import { drawLinesWithAnimation } from './drawLinesWithAnimation';

/**
 * Draw board lines without animation
 * @param {*} theme theme
 * @param {*} ctx canvas 2d context
 * @return {void}
 */
const drawBoardLines = (theme, ctx) => {
  const lines = getBoardLines(ctx.canvas);
  lines.forEach(drawLine(theme, ctx));
};

/**
 * Draw board lines with animation
 * @param {*} theme theme
 * @param {*} ctx canvas 2d context
 * @param {*} raf request animation frame
 * @return {void}
 */
const drawBoardLinesWithAnimation = (theme, ctx, raf) => {
  const lines = getBoardLines(ctx.canvas);
  drawLinesWithAnimation(theme, ctx, raf)(lines);
};

export {
  drawBoardLines,
  drawBoardLinesWithAnimation
};
