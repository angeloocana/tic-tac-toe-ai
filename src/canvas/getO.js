import { memoize } from 'ramda';

/**
 * Get X lines stating at x:0, y:0 to draw in the canvas.
 * @func
 * @param {*} size Size of the canvas
 * @return {[[Number]]} [[x,y]]
 */
const getOFor00 = memoize((clientWidth, clientHeight) => {
  const halfSquare = (clientWidth / 3) / 2;
  return [halfSquare, halfSquare, 20, 0, 2 * Math.PI];
});

/**
 * Get O arc stating at x:0, y:0 to draw in the canvas.
 * @func
 * @param {*} size Size of the canvas
 * @param {*} square square position to draw
 * @return {[[Number]]} [[x,y]]
 */
const _getO = memoize((clientWidth, clientHeight, square) => {
  const startPosition = square[0];

  const o = getOFor00(clientWidth, clientHeight);

  return [
    o[0] + startPosition[0], // new X
    o[1] + startPosition[1], // new Y,
    o[2],
    o[3],
    o[4]
  ];
});

/**
 * Get O arc to draw in the canvas square.
 * @func
 * @param {*} size Size of the canvas ctx.canvas
 * @param {*} square square position to draw
 * @return {[[Number]]} [[x,y]]
 */
const getO = ({ clientWidth, clientHeight }, square) =>
  _getO(clientWidth, clientHeight, square);

export default getO;
