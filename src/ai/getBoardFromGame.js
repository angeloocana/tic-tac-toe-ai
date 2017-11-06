import { prop } from 'ramda';

/**
 * Get Board from Game
 * - If it is a Game return the Board from it
 * - If it is a Board return it
 * @sig a -> Number
 * @param {Game | Number} gameOrBoard Game object or Board
 * @return {Number} Board
 */
const getBoardFromGame = gameOrBoard => prop('board', gameOrBoard) || gameOrBoard;

export default getBoardFromGame;
