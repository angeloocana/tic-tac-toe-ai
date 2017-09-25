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

export {
  drawArc
};
