import { aiStart } from './aiStart';
import { moveAiAndNewGame } from './moveAiAndNewGame';
import { moveUserAndAi } from './moveUserAndAi';
import { askAiMove } from './askAiMove';
import { actions } from '../actions';
import { initialGame } from '../../ai';

const game = (state, action) => {
  switch (action.type) {
    case actions.NEW_GAME:
      return aiStart(state);
    case actions.SELECT_POSITION:
      return moveUserAndAi(state, action.index);
    case actions.ASK_AI_MOVE:
      return askAiMove(state || initialGame);
    case actions.AI_MOVE:
      return moveAiAndNewGame(state || initialGame, action.data);
    default:
      return state || aiStart();
  }
};

export {
  game
};
