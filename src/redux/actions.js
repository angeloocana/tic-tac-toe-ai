const actions = {
  NEW_GAME: 'NEW_GAME',
  SELECT_POSITION: 'SELECT_POSITION',
  MOVE_AI: 'MOVE_AI'
};

/**
 * Create new game action.
 * @param {*} gameType game vs ai, game vc human
 * @returns {Action} new game action
 */
const newGame = (gameType) => {
  return {
    type: actions.NEW_GAME,
    gameType
  };
};

/**
 * Create selectPosition action.
 * @param {*} index board index
 * @returns {Action} selectPosition action
 */
const selectPosition = (index) => {
  return {
    type: actions.SELECT_POSITION,
    index
  };
};

/**
 * Ask Ai to play.
 * @returns {Action} moveAi action
 */
const moveAi = () => {
  return {
    type: actions.MOVE_AI
  };
};

export {
  actions,
  newGame,
  selectPosition,
  moveAi
};
