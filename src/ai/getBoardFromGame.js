import { prop, isNil } from 'ramda';
import Result from 'folktale/result';

/**
 * Get Board from Game
 * - If it is a Game return the Board from it
 * - If it is a Board return it
 * @sig Game | Board -> Result Board
 * @param {Game | Board} gameOrBoard Game object or Board
 * @return {Result<Board>} Board
 */
const getBoardFromGame = gameOrBoard =>
  isNil(gameOrBoard)
    ? Result.Error('Null Game or Board')
    : Result.Ok(prop('board', gameOrBoard) || gameOrBoard);

export default getBoardFromGame;

