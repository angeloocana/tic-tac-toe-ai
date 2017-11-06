import { memoize, partial } from 'ramda';
import getLineMidPoint from './getLineMidPoint';

/**
 * Get X lines stating at x:0, y:0 to draw in the canvas.
 * @func
 * @param {*} size Size of the canvas
 * @return {[[Number]]} [[x,y]]
 */
const getXFor00 = memoize((clientWidth, clientHeight) => {
  const columnWidth = clientWidth / 3;
  const size = {
    init: 20, // 20%
    end: 80 // 80%
  };

  const getLine1 = partial(getLineMidPoint, [
    [0, 0], // from
    [columnWidth, columnWidth] // to
  ]);

  const getLine2 = partial(getLineMidPoint, [
    [0, columnWidth], // from
    [columnWidth, 0] // to
  ]);

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
 * @param {*} square square position to draw
 * @return {[[Number]]} [[x,y]]
 */
const _getX = memoize((clientWidth, clientHeight, square) => {
  const startPosition = square[0];

  return getXFor00(clientWidth, clientHeight).map(line =>
    line.map(position =>
      [
        position[0] + startPosition[0], // new X
        position[1] + startPosition[1] // new Y
      ]));
});

/**
 * Get X lines stating at x:0, y:0 to draw in the canvas.
 * @func
 * @param {*} size Size of the canvas ctx.canvas
 * @param {*} square square position to draw
 * @return {[[Number]]} [[x,y]]
 */
const getX = ({ clientWidth, clientHeight }, square) =>
  _getX(clientWidth, clientHeight, square);

export default getX;

export {
  getX,
  getXFor00
};
