/**
 * Get line middle point by percentage
 * @param {*} p1 from
 * @param {*} p2 to
 * @return {Function} (percentage) => Mid point [x, y]
 */
const getLineMidPoint = (p1, p2) => (per) =>
  [p1[0] + (p2[0] - p1[0]) * per, p1[1] + (p2[1] - p1[1]) * per];

/**
 * Split line into small lines to draw by frame
 * @param {*} line [[x,y],[x,y]]
 * @param {*} percentageByFrame percentage of the line to draw by frame
 * @return {[[[Number]]]} line chunks
 */
const getLineFrames = (line, percentageByFrame) => {
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
};

export {
  getLineMidPoint,
  getLineFrames
};
