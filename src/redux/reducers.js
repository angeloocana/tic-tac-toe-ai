import {
  initialBoard,
  move,
  getNewValue
} from '../ai';
import { actions } from './actions';

const getBoardAfterMove = (oldBoard, index) => {
  const newValue = getNewValue(oldBoard);
  const newBoard = move(oldBoard, index, newValue);
  return newBoard ? newBoard : oldBoard;
};

const board = (state, action) => {
  switch (action.type) {
    case actions.NEW_GAME:
      return initialBoard;
    case actions.SELECT_POSITION:
      return getBoardAfterMove(state, action.index);
    default:
      return state || initialBoard;
  }
};

export {
  board
};
