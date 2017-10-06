import store from '../store';
import { moveAi } from '../../ai';
import { newGame } from '../actions';

import { isNil } from 'ramda';

const moveAiAndNewGame = (oldGame) => {
  const gameAfterMove = moveAi(oldGame);

  if (isNil(gameAfterMove)) {
    return oldGame;
  }

  if (gameAfterMove.ended) {
    setTimeout(() => store.dispatch(newGame()), 2000);
  }

  return gameAfterMove;
};

export {
  moveAiAndNewGame
};
