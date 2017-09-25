import { memoize } from 'ramda';

const _getBoardSquares = memoize((clientWidth, clientHeight) => {
  const x = clientWidth / 3;
  const y = clientHeight / 3;

  const x2 = x * 2;
  const x3 = x * 3;

  const y2 = y * 2;
  const y3 = y * 3;

  return [
    [[0, 0], [x, y]], // 1
    [[x, 0], [x2, y]], // 2
    [[x2, 0], [x3, y]], // 3

    [[0, y], [x, y2]], // 4
    [[x, y], [x2, y2]], // 5
    [[x2, y], [x3, y2]], // 6

    [[0, y2], [x, y3]], // 7
    [[x, y2], [x2, y3]], // 8
    [[x2, y2], [x3, y3]], // 9
  ];
});

/**
 * Get squares positions to check with click position
 * @param {*} size Size of the canvas from context.canvas
 * @return {[[[Number]]]} [[[x,y], [x,y]]]
 */
const getBoardSquares = ({ clientWidth, clientHeight }) =>
  _getBoardSquares(clientWidth, clientHeight);

export {
  getBoardSquares,
  _getBoardSquares
};
