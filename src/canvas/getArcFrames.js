import { memoize } from 'ramda';
import addFrame from './addFrame';

const arcEndAngle = 2 * Math.PI;

/**
 * Get Arc percent angle
 * @func
 * @param {Number} percent percent of the angle
 * @return {Number} % in radius
 */
const getArcPercentAngle = memoize((percent) => (percent * arcEndAngle) / 100);

const addArcFrame = addFrame('arc');

/**
 * get lines chunks and delay to draw by frame
 * @param {Number} percentageByFrame percent to draw by frame
 * @param {[Number]} arc arc to animate
 * @return {[Number]} frames
 */
const getArcFrames = memoize((percentageByFrame, arc) => {
  let frames = [];
  let sAngle = 0; // The starting angle, in radians (0 is at the 3 o'clock position of the arc's circle)

  for (var i = percentageByFrame; i < 100; i += percentageByFrame) {
    const midArc = [
      arc[0], // The x-coordinate of the center of the circle
      arc[1], // The y-coordinate of the center of the circle
      arc[2], // The radius of the circle
      sAngle, // The starting angle, in radians (0 is at the 3 o'clock position of the arc's circle)
      getArcPercentAngle(i) // The ending angle, in radians
    ];

    frames = addArcFrame(frames, midArc);

    sAngle = midArc[4];
  }

  const lastMidArc = [
    arc[0], // The x-coordinate of the center of the circle
    arc[1], // The y-coordinate of the center of the circle
    arc[2], // The radius of the circle
    sAngle, // The starting angle, in radians (0 is at the 3 o'clock position of the arc's circle)
    arcEndAngle // The ending angle, in radians
  ];

  frames = addArcFrame(frames, lastMidArc);

  return frames;
});

export default getArcFrames;
