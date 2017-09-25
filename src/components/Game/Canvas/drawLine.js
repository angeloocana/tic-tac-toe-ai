/**
 * Draw any line to the canvas
 * @param {*} theme obj containing props: lineColor, lineWidth
 * @param {*} ctx canvas 2d context
 * @return {undefined}
 */
const drawLine = (theme, ctx) => (line) => {
  const from = line[0];
  const to = line[1];

  ctx.strokeStyle = theme.lineColor;
  ctx.lineWidth = theme.lineWidth;

  ctx.beginPath();

  ctx.moveTo(from[0], from[1]);
  ctx.lineTo(to[0], to[1]);

  ctx.stroke();
};

export {
  drawLine
};
