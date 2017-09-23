const getPositionIndex = (aiOutput) => {
  return aiOutput.reduce((bestIndex, value, index) =>
    value > aiOutput[bestIndex]
      ? index
      : bestIndex, 0);
};

const move = (oldBoard, aiOutput, newValue) => {
  const index = getPositionIndex(aiOutput);

  console.log('index: ', index);

  if (oldBoard[index] !== 0) {
    return null;
  }

  return oldBoard.map((position, i) =>
    i === index
      ? newValue
      : position);
};

export {
  move,
  getPositionIndex
};
