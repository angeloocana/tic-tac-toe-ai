import {
  move,
  moveAi,
  getInitialGame,
  initialGame
} from '../ai';
import {
  actions,
  moveAi as moveAiAction,
  newGame
} from './actions';
import store from './store';
import { isNil } from 'ramda';

/**
 * Move
 * 
 * if NOT ended as AI to move
 * 
 * if ended create new game and ask ai to move
 * @param {*} oldGame state
 * @param {*} position index in the board to play
 * @return {Object} game
 */
const moveUserAndAi = (oldGame, position) => {

  if (oldGame.isAiTurn) {
    return oldGame;
  }

  const gameAfterMove = move(oldGame, position);

  if (isNil(gameAfterMove)) {
    return oldGame;
  }

  if (gameAfterMove.ended) {
    setTimeout(() => {
      store.dispatch(newGame());
      setTimeout(() => store.dispatch(moveAiAction()), 1700);
    }, 2000);
  } else {
    setTimeout(() => {
      store.dispatch(moveAiAction());
    }, 1000);
  }

  return gameAfterMove;
};

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

const aiStart = (oldGame) => {
  setTimeout(() => store.dispatch(moveAiAction()), 2000);
  return getInitialGame(oldGame);
};

const game = (state, action) => {
  switch (action.type) {
    case actions.NEW_GAME:
      return aiStart(state);
    case actions.SELECT_POSITION:
      return moveUserAndAi(state, action.index);
    case actions.MOVE_AI:
      return moveAiAndNewGame(state || initialGame);
    default:
      return state || aiStart();
  }
};

export {
  game
};
