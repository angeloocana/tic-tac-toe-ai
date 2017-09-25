import { memoize } from 'ramda';

const _getBoardLines = memoize((clientWidth, clientHeight) => {
  const columnWidth = clientWidth / 3;
  return [
    [[columnWidth, 0], [columnWidth, clientHeight]], // col 1

    [[columnWidth * 2, 0], [columnWidth * 2, clientHeight]], // col 2

    [[0, columnWidth], [clientHeight, columnWidth]], // row 1

    [[0, columnWidth * 2], [clientHeight, columnWidth * 2]] // row 2
  ];
});

/**
 * Get # lines to draw in the canvas.
 * @param {*} size Size of the canvas from context.canvas
 * @return {[[Number]]} [[x,y]]
 */
const getBoardLines = ({ clientWidth, clientHeight }) =>
  _getBoardLines(clientWidth, clientHeight);

export {
  getBoardLines,
  _getBoardLines
};
