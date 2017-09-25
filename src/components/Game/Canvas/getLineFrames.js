const getMidpoint = (p1, p2, per) =>
  [p1[0] + (p2[0] - p1[0]) * per, p1[1] + (p2[1] - p1[1]) * per];

const getLineFrames = (line, percentageByFrame) => {
  let lineFrames = [];
  let previousPoint = line[0];

  for (var i = percentageByFrame; i < 100; i += percentageByFrame) {
    const midLine = [
      previousPoint,
      getMidpoint(line[0], line[1], i / 100)
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
  getMidpoint,
  getLineFrames
};
