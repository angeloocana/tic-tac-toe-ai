import { drawLine } from './drawLine';
import { drawArc } from './drawArc';

/**
 * Get draw function according to frame.type
 * @param {Object} theme theme to pass to the draw function
 * @param {Object} ctx canvas 2d context
 * @return {Function} (frame) => drawFn(frame.data)
 */
const getDrawFn = (theme, ctx) => {
  const _drawLine = drawLine(theme, ctx);
  const _drawArc = drawArc(theme, ctx);

  return (frame) => {
    if (!frame) { // skip null delay
      return;
    }

    switch (frame.type) {
      case 'line': _drawLine(frame.data); break;
      case 'arc': _drawArc(frame.data); break;
      default: break;
    }
  };
};

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
const drawAnimation = (theme, ctx, raf) => (frames) => {
  let nFrame = 0;

  const _drawFn = getDrawFn(theme, ctx);

  const draw = () => {
    _drawFn(frames[nFrame]);

    nFrame += 1;

    if (typeof frames[nFrame] !== 'undefined') { // If there is a next frame call draw again
      raf(draw);
    }
  };

  raf(draw);
};

export {
  drawAnimation
};
