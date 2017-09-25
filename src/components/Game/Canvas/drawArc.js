import { getArcFrames } from './getArcFrames';
import { drawAnimation } from './drawAnimation';

/**
 * Draw any line to the canvas
 * @param {*} theme obj containing props: lineColor, lineWidth
 * @param {*} ctx canvas 2d context
 * @return {undefined}
 */
const drawArc = (theme, ctx) => (arc) => {
  ctx.strokeStyle = theme.lineColor;
  ctx.lineWidth = theme.lineWidth;

  ctx.beginPath();

  ctx.arc(...arc);

  ctx.stroke();
};

const drawArcWithAnimation = (theme, ctx, raf) => arc => {
  const frames = getArcFrames(theme.percentageByFrame, arc);
  drawAnimation(theme, ctx, raf)(frames);
};

export {
  drawArc,
  drawArcWithAnimation
};
