const actions = {
  NEW_GAME: 'NEW_GAME',
  SELECT_POSITION: 'SELECT_POSITION',
  ASK_AI_MOVE: 'ASK_AI_MOVE',
  AI_MOVE: 'AI_MOVE'
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
 * @returns {Action} aiMove action
 */
const askAiMove = () => {
  return {
    type: actions.ASK_AI_MOVE
  };
};

/**
 * Apply Ai move.
 * @param {*} data {oldGame, position}
 * @returns {Action} aiMove action
 */
const aiMove = (data) => {
  return {
    type: actions.AI_MOVE,
    data
  };
};

export {
  actions,
  aiMove,
  askAiMove,
  newGame,  
  selectPosition  
};
