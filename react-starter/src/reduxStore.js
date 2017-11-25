import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducer';

export default function configureStore(initialState) {
  let middleware = [ thunk ];

  if (process.env.NODE_ENV !== 'production') {
    const createLogger = require('redux-logger');
    const logger = createLogger();
    middleware.push(logger);
  }

  const store = createStore(
    rootReducer,
    initialState,
    applyMiddleware(...middleware)
  );
  if (module.hot) {
    module.hot.accept("./reducer", () => {
      const nextRootReducer = require('./reducer').default;
      store.replaceReducer(nextRootReducer);
    });
  }
  return store;
}
