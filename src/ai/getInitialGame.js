import getBoard from './getBoard';
import { merge } from 'ramda';

const initialGame = {
  board: getBoard(),
  ended: false,
  started: false,
  lastMove: null,
  winners: null,
  isAiTurn: true,
  aiStarted: true,
  score: {
    ai: 0,
    human: 0
  }
};

/**
 * Get initial game
 * 
 * if no oldGame: AI start
 * 
 * if AI started: user start
 * 
 * if user started: AI start
 * @param {*} oldGame oldGame to get aiStarted
 * @return {*} game
 */
const getInitialGame = (oldGame) => {
  return oldGame
    ? merge(initialGame, {
      isAiTurn: !oldGame.aiStarted,
      aiStarted: !oldGame.aiStarted,
      score: oldGame.score
    }, {})
    : initialGame;
};

export default getInitialGame;
