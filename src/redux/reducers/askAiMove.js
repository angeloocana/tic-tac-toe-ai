import store from '../store';
import { aiMove } from '../actions';
import { getAiMove } from '../../ai';
import { isNil } from 'ramda';

// eslint-disable-next-line
const AiWorker = require('worker-loader!../../aiWorker.js');
let worker = null;

if (typeof Worker === 'undefined') {
  console.log('Sorry! No Web Worker support');
  worker = null;
} else {
  // Yes! Web worker support!
  worker = new AiWorker();

  worker.onmessage = (m) => {
    store.dispatch(aiMove(m.data));
  };
}

const askAiMove = (oldGame) => {
  if (isNil(worker)) {
    const position = getAiMove(oldGame);
    store.dispatch(aiMove({
      oldGame,
      position
    }));
  } else {
    worker.postMessage(oldGame);
  }

  return oldGame;
};

export {
  askAiMove
};
