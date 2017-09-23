const getPositionIndex = (aiOutput) => {
  return aiOutput.reduce((bestIndex, value, index) =>
    value > aiOutput[bestIndex]
      ? index
      : bestIndex, 0);
};

export {
  getPositionIndex
};
