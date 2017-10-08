import { game } from './index';
import getInitialGame from '../../ai/getInitialGame';
import {
  aiMove,
  askAiMove,
  newGame,
  selectPosition
} from '../actions';
import move from '../../ai/move';
import * as assert from 'ptz-assert';

describe('reducers', () => {
  describe('game', () => {
    it('other actions', () => {
      const oldGame = getInitialGame();
      const action = {
        type: 'OTHER_RANDOM_ACTION'
      };
      const newState = game(oldGame, action);
      assert.equal(newState, oldGame);
    });

    it('newGame', () => {
      const oldGame = null;
      const action = newGame();
      const newState = game(oldGame, action);
      assert.deepEqual(newState, getInitialGame());
    });

    it('aiMove', () => {
      const oldGame = getInitialGame();
      const action = aiMove({
        oldGame,
        position: 0
      });
      const newState = game(oldGame, action);
      const expectedGame = move(oldGame, 0);
      assert.deepEqual(newState, expectedGame);
    });

    it('askAiMove', () => {
      const oldGame = getInitialGame();
      const action = askAiMove();
      const newState = game(oldGame, action);
      assert.deepEqual(newState, oldGame);
    });

    it('selectPosition', () => {
      const oldGame = getInitialGame();
      const action = selectPosition();
      const newState = game(oldGame, action);
      assert.deepEqual(newState, oldGame);
    });
  });
});
