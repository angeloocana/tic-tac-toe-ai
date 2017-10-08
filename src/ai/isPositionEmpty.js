import getPosition from './getPosition';
import { emptyValue } from './constants';

/**
 * Check if board position is empty
 * @param {*} board bits board
 * @param {*} index position
 * @return {Boolean} is empty
 */
const isPositionEmpty = (board, index) =>
  getPosition(board, index) === emptyValue;

export default isPositionEmpty;
