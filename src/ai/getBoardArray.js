import { map } from 'ramda';
import getBoardFromGame from './getBoardFromGame';
import getPosition from './getPosition';
import { boardIndexes } from './constants';

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
