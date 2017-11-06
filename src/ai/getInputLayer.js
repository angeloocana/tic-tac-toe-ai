import { map, partial, flatten } from 'ramda';
import { boardIndexes, X, O } from './constants';
import getPosition from './getPosition';
import getBoardFromGame from './getBoardFromGame';

/**
 * Get neuron's input from board position
 * - X: [1, 0]
 * - O: [0, 1]
 * - _: [0, 0]
 * @sig Number -> (Number -> [Number])
 * @param {Number} board Game board
 * @param {Number} index board index
 * @return {[Number]} neuron's input
 */
const getPositionInput = (board, index) => {
  const position = getPosition(board, index);
  switch (position) {
    case X: return [1, 0];
    case O: return [0, 1];
    default: return [0, 0];
  }
};

/**
 * Get Neural Network input layer from Board or Game
 * @sig a -> [Number]
 * @param {Number | Game} boardOrGame Board or Game
 * @return {[Number]} Neural Network input layer
 */
const getInputLayer = boardOrGame => {
  const board = getBoardFromGame(boardOrGame);
  const getInput = partial(getPositionInput, [board]);
  return flatten(map(getInput, boardIndexes));
};

export default getInputLayer;
