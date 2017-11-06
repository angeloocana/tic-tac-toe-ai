import { concat, head, pipe, reduce, tail, last } from 'ramda';

const second = p => p[1];

const getFrom = pipe(last, second);

const _getFromToForPoints = (lines, to) =>
  concat(lines, [[getFrom(lines), to]]);

const getFirstLine = (points) =>
  [head(points), second(points)];

/**
 * Transform a list of points: [ [0, 0], [0, 10], [0, 20], [0, 30] ]
 * 
 * into a list of pairs [from to]: [
 * 
 *    [[0  0], [0 10]],
 *    [[0 10], [0 20]], 
 *    [[0 20], [0 30]] 
 * ]
 * @param {[[Number]]} points [[x,y]]
 * @return {[[[Number]]]} from, to list: [[[fromX, fromY], [toX, toY]]]
 */
const getFromToForPoints = (points) =>
  reduce(_getFromToForPoints, [getFirstLine(points)], tail(tail(points)));

export default getFromToForPoints;
