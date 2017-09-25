import { drawLine } from './drawLine';
import { getLinesFrames } from './getLinesFrames';

/**
 * Draw lines with animation and delay
 * 
 * delay === null lines
 * 
 * @param {*} theme theme
 * @param {*} ctx canvas 2d context
 * @param {*} raf request animation frame
 * @return {Function} Draw line fn (lines) => void
 */
const drawLinesWithAnimation = (theme, ctx, raf) => (lines) => {
  lines = getLinesFrames(theme)(lines);
  const _drawLine = drawLine(theme, ctx);
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
  drawLinesWithAnimation
};
