import { aiStart } from './aiStart';
import { moveAiAndNewGame } from './moveAiAndNewGame';
import { moveUserAndAi } from './moveUserAndAi';
import { actions } from '../actions';
import { initialGame } from '../../ai';

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
