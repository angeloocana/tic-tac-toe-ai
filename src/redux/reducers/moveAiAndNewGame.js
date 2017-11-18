import store from '../store';
import moveAi from '../../ai/moveAi';
import { newGame } from '../actions';
import { equals, isNil } from 'ramda';
import Result from 'folktale/result';

const moveAiAndNewGame = (oldGame, data) => {
  if (!equals(oldGame.board, data.oldGame.board)) {
    return Result.Error('data.oldGame not equal oldGame');
  }

  const gameAfterMove = moveAi(oldGame, data.position);

  if (isNil(gameAfterMove)) {
    return oldGame;
  }

  if (gameAfterMove.ended) {
    setTimeout(() => store.dispatch(newGame()), 2000);
  }

  return gameAfterMove;
};

export default moveAiAndNewGame;

