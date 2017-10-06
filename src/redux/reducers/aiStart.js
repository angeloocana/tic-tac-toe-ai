import store from '../store';
import { getInitialGame } from '../../ai';
import { moveAi } from '../actions';

const aiStart = (oldGame) => {
  setTimeout(() => store.dispatch(moveAi()), 2000);
  return getInitialGame(oldGame);
};

export {
  aiStart
};
