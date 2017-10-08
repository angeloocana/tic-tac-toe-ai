import getO from './getO';
import {
  drawArc,
  drawArcWithAnimation 
} from './drawArc';

/**
 * Draw X lines without animation
 * @param {*} theme theme
 * @param {*} ctx canvas 2d context
 * @return {void}
 */
const drawO = (theme, ctx) => square => {
  const arc = getO(ctx.canvas, square);  
  drawArc(theme, ctx)(arc);
};

/**
 * Draw X lines with animation
 * @param {*} theme theme
 * @param {*} ctx canvas 2d context
 * @param {*} raf request animation frame
 * @return {void}
 */
const drawOWithAnimation = (theme, ctx, raf) => square => {
  const arc = getO(ctx.canvas, square);
  drawArcWithAnimation(theme, ctx, raf)(arc);
};

export default drawO;

export {
  drawO,
  drawOWithAnimation
};
