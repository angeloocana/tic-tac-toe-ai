const move = (oldBoard, index, value) => {
  if (oldBoard[index] !== 0) {
    return null;
  }

  return oldBoard.map((position, i) =>
    i === index
      ? value
      : position);
};

export {
  move
};
