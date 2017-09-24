const actions = {
  NEW_GAME: 'NEW_GAME',
  SELECT_POSITION: 'SELECT_POSITION'
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

export {
  actions,
  newGame,
  selectPosition
};
