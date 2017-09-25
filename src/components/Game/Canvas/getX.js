import { memoize } from 'ramda';

/**
 * Get X lines stating at x:0, y:0 to draw in the canvas.
 * @func
 * @param {*} size Size of the canvas
 * @return {[[Number]]} [[x,y]]
 */
const getXFor00 = memoize(({ clientWidth, clientHeight }) => {
  const columnWidth = clientWidth / 3;

  return [
    [
      [0, 0], // from \
      [columnWidth, columnWidth] // to \
    ],
    [
      [0, columnWidth], // from /
      [columnWidth, 0] // to /
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
