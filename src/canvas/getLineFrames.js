import getLineMidPoint from './getLineMidPoint';
import createFrame from './createFrame';
import getPercentages from './getPercentages';
import getFromToForPoints from './getFromToForPoints';
import { head, pipe, map, partial } from 'ramda';

const createLineFrame = partial(createFrame, ['line']);

const getPoints = (line) => (percentages) =>
  map(partial(getLineMidPoint, [head(line), line[1]]), percentages);

/**
 * Split line into small lines to draw by frame
 * @sig Number -> [[Number]] -> [[[Number]]]
 * @param {Number} percentageByFrame percentage of the line to draw by frame
 * @param {[[Number]]} line [[x,y],[x,y]]
 * @return {[[[Number]]]} line chunks
 */
const getLineFrames = (percentageByFrame, line) => pipe(
  getPercentages,
  getPoints(line),
  getFromToForPoints,
  map(createLineFrame)
)(percentageByFrame);

export default getLineFrames;
