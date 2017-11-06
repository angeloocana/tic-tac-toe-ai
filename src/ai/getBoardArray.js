import { map, prop } from 'ramda';
import getPosition from './getPosition';
import { boardIndexes } from './constants';

/**
 * Get Board from Game
 * - If it is a Game return the Board from it
 * - If it is a Board return it
 * @sig a -> Number
 * @param {Game | Number} gameOrBoard Game object or Board
 * @return {Number} Board
 */
const getBoardFromGame = gameOrBoard => prop('board', gameOrBoard) || gameOrBoard;

/**
 * Transform a **Binary** board into an **Array** board
 * @param {Number | Game} boardOrGame binary board or Game obj
 * @return {[Number]} Array board
 */
const getBoardArray = boardOrGame => {
  const board = getBoardFromGame(boardOrGame);
  return map(i => getPosition(board, i), boardIndexes);
};

export default getBoardArray;
