import { map, pipe } from 'ramda';
import getBoardFromGame from './getBoardFromGame';
import getPosition from './getPosition';
import { boardIndexes } from './constants';

/**
 * Transform a **Binary** board into an **Array** board
 * @sig Game | Board -> [Number]
 * @param {Game | Board} boardOrGame binary board or Game obj
 * @return {[Number]} Array board
 */
const getBoardArray = pipe(
  getBoardFromGame,
  map(board => map(i => getPosition(i, board).merge(), boardIndexes))
);

export default getBoardArray;

