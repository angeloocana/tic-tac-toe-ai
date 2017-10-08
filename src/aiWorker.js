import getAiMove from './ai/getAiMove';

// eslint-disable-next-line
onmessage = (e) => {
  const oldGame = e.data;
  const position = getAiMove(oldGame);

  postMessage({
    oldGame,
    position
  });
};
