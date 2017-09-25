import { getLines } from './getLines';
import { getLineFrames } from './getLineFrames';
import { unnest, pipe, map } from 'ramda';
import { addDelay } from './addDelay';

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

const drawLines = (theme, ctx) => {
  const lines = getLines(ctx.canvas);
  lines.forEach(drawLine(theme, ctx));
};

/**
 * get lines chunks to draw by frame
 * @param {*} theme {percentageByFrame, delayAfterEachLine}
 * @return {Function} (size) => [[Number]] line chunks
 */
const getLinesFrames = (theme) => pipe(
  getLines,
  map(getLineFrames(theme.percentageByFrame)),
  map(addDelay(theme.delayAfterEachLine)),
  unnest
);

const drawLinesWithAnimation = (theme, ctx, raf) => {
  const _drawLine = drawLine(theme, ctx);
  const lines = getLinesFrames(theme)(ctx.canvas);
  let nFrames = 0;

  const _drawLines = () => {
    if (lines[nFrames]) { // skip null delay
      _drawLine(lines[nFrames]);
    }

    nFrames += 1;

    if (typeof lines[nFrames] !== 'undefined') {
      raf(_drawLines);
    }
  };

  raf(_drawLines);
};

export {
  drawLines,
  drawLinesWithAnimation
};
