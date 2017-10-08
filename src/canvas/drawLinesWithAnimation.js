import drawAnimation from './drawAnimation';
import getLinesFrames from './getLinesFrames';

const drawLinesWithAnimation = (theme, ctx, raf) => (lines) => {
  const frames = getLinesFrames(theme)(lines);
  drawAnimation(theme, ctx, raf)(frames);
};

export default drawLinesWithAnimation;
