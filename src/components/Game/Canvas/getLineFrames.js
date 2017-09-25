import { curry } from 'ramda';
import { getLineMidPoint } from './getLineMidPoint';

/**
 * Split line into small lines to draw by frame
 * @param {*} percentageByFrame percentage of the line to draw by frame
 * @param {*} line [[x,y],[x,y]] 
 * @return {[[[Number]]]} line chunks
 */
const getLineFrames = curry((percentageByFrame, line) => {
  let lineFrames = [];
  let previousPoint = line[0];

  const getMidPoint = getLineMidPoint(line[0], line[1]);

  for (var i = percentageByFrame; i < 100; i += percentageByFrame) {
    const midLine = [
      previousPoint,
      getMidPoint(i / 100)
    ];
    lineFrames.push(midLine);

    previousPoint = midLine[1];
  }

  const lastLine = [
    previousPoint,
    line[1]
  ];
  lineFrames.push(lastLine);

  return lineFrames;
});

export {
  getLineFrames
};
