import {
  initialGame,
  move
} from '../ai';
import { actions } from './actions';

const game = (state, action) => {
  switch (action.type) {
    case actions.NEW_GAME:
      return initialGame;
    case actions.SELECT_POSITION:
      return move(state, action.index);
    default:
      return state || initialGame;
  }
};

export {
  game
};
