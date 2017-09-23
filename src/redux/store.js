import { createStore } from 'redux';
import rootReducer from './rootReducer';

const store = createStore(rootReducer
  // ,
  
  /* preloadedState, */

  // window && window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
