import { getX } from './getX';
import { drawLine } from './drawLine';
import { drawLinesWithAnimation } from './drawLinesWithAnimation';

/**
 * Draw X lines without animation
 * @param {*} theme theme
 * @param {*} ctx canvas 2d context
 * @return {void}
 */
const draX = (theme, ctx) => startPosition => {
  const lines = getX(ctx.canvas, startPosition);
  lines.forEach(drawLine(theme, ctx));
};

/**
 * Draw X lines with animation
 * @param {*} theme theme
 * @param {*} ctx canvas 2d context
 * @param {*} raf request animation frame
 * @return {void}
 */
const drawXWithAnimation = (theme, ctx, raf) => startPosition => {
  const lines = getX(ctx.canvas, startPosition);
  drawLinesWithAnimation(theme, ctx, raf)(lines);
};

export {
  draX,
  drawXWithAnimation
};
