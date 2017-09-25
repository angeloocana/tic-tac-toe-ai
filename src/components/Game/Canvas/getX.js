import { memoize } from 'ramda';
import { getLineMidPoint } from './getLineMidPoint';

/**
 * Get X lines stating at x:0, y:0 to draw in the canvas.
 * @func
 * @param {*} size Size of the canvas
 * @return {[[Number]]} [[x,y]]
 */
const getXFor00 = memoize(({ clientWidth, clientHeight }) => {
  const columnWidth = clientWidth / 3;
  const size = {
    init: 0.2,
    end: 0.8
  };

  const getLine1 = getLineMidPoint(
    [0, 0], // from \
    [columnWidth, columnWidth] // to \
  );

  const getLine2 = getLineMidPoint(
    [0, columnWidth], // from /
    [columnWidth, 0] // to /
  );

  return [
    [
      getLine1(size.init),
      getLine1(size.end),
    ],
    [
      getLine2(size.init),
      getLine2(size.end),
    ]
  ];
});

/**
 * Get X lines stating at x:0, y:0 to draw in the canvas.
 * @func
 * @param {*} size Size of the canvas
 * @return {[[Number]]} [[x,y]]
 */
const getX = memoize(({ clientWidth, clientHeight }, startPosition) => {
  return getXFor00({ clientWidth, clientHeight }).map(line =>
    line.map(position =>
      [
        position[0] + startPosition[0], // new X
        position[1] + startPosition[1] // new Y
      ]));
});

export {
  getX,
  getXFor00
};
