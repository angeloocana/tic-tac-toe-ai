import { map } from 'ramda';
import getPosition from './getPosition';
import { boardIndexes } from './constants';

/**
 * Transform a **Binary** board into an **Array** board
 * @param {Number} board binary board
 * @return {[Number]} Array board
 */
const getBoardArray = board => map(i => getPosition(board, i), boardIndexes);

export default getBoardArray;
