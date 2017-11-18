import move from './move';
import { isNil } from 'ramda';
import Result from 'folktale/result';

/**
 * Move AI if:
 * - Game is not null 
 * - Is AI turn 
 * @sig Game -> Number -> Result Game
 * @param {Game} oldGame game
 * @param {Number} position index position
 * @return {Result<Game>} new game
 */
const moveAi = (oldGame, position) => {
  if (isNil(oldGame)) {
    return Result.Error('Null game');

  } else if (!oldGame.isAiTurn){
    return Result.Error('Is NOT AI turn');
  }

  return move(oldGame, position);
};

export default moveAi;

