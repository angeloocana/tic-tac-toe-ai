import {
  initialGame,
  move,
  moveAi
} from '../ai';
import {
  actions,
  moveAi as moveAiAction,
  newGame
} from './actions';
import store from './store';

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
  const gameAfterMove = move(oldGame, position);

  if (gameAfterMove.ended) {
    setTimeout(() => {
      store.dispatch(newGame());
      setTimeout(() => store.dispatch(moveAiAction()), 1000);
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

  if(gameAfterMove.ended){
    setTimeout(() => store.dispatch(newGame()), 2000);
  }

  return gameAfterMove;
};

const game = (state, action) => {
  switch (action.type) {
    case actions.NEW_GAME:
      return initialGame;
    case actions.SELECT_POSITION:
      return moveUserAndAi(state, action.index);
    case actions.MOVE_AI:
      return moveAiAndNewGame(state);
    default:
      return state || initialGame;
  }
};

export {
  game
};
