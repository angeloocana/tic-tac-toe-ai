const actions = {
  NEW_GAME: 'NEW_GAME',
  ON_CLICK: 'ON_CLICK'
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
 * Create onClick action.
 * @param {*} index board index
 * @returns {Action} onClick action
 */
const onClick = (index) => {
  return {
    type: actions.ON_CLICK,
    index
  };
};

export {
  actions,
  newGame,
  onClick
};
