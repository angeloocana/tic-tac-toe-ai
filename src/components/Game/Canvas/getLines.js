/**
 * Get # lines to draw in the canvas.
 * @param {*} size Size of the canvas
 * @return {[[Number]]} [[x,y]]
 */
const getLines = ({ clientWidth, clientHeight }) => {
  const columnWidth = clientWidth / 3;
  return [
    [columnWidth, 0],
    [columnWidth, clientHeight],

    [columnWidth * 2, clientHeight],
    [columnWidth * 2, 0],

    [0, columnWidth],
    [clientHeight, columnWidth],

    [clientHeight, columnWidth * 2],
    [0, columnWidth * 2]
  ];
};

export {
  getLines
};
