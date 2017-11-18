import { pipe, map, flatten } from 'ramda';
import { boardIndexes, X, O } from './constants';
import getPosition from './getPosition';
import getBoardFromGame from './getBoardFromGame';

/**
 * Get neuron's input from board position
 * - X: [1, 0]
 * - O: [0, 1]
 * - _: [0, 0]
 * @sig Number -> [Number]
 * @param {Number} value Position value
 * @return {[Number]} neuron's input
 */
const getPositionInput = value => { 
  switch (value) {
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
const getInputLayer = pipe(
  getBoardFromGame,
  map(board => map(index => getPositionInput(getPosition(index, board).merge()), boardIndexes)),
  map(flatten),
);

export default getInputLayer;

