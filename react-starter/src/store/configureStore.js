import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';
import rootReducer from '../reducers';
//import { DevTools } from '../utils/index';

export default function configureStore(initialState) {
  const logger = createLogger();
  const store = createStore(
    rootReducer,
    initialState,
    applyMiddleware(thunk, logger)
  );

  if (module.hot) {
    module.hot.accept('../reducers', () => {
      const nextRootReducer = require('../reducers');
      store.replaceReducer(nextRootReducer);
    });
  }
  return store;
}

// function _applyMiddleware() {
//   const middleware = [
//
//   ];
//   return applyMiddleware(...middleware);
// }
//
// export default function configureStore(initialState) {
//   const store = compose(
//     _applyMiddleware(),
//     DevTools.instrument()
//   )(createStore)(rootReducer, initialState);
//
//   if (module.hot) {
//     module.hot.accept('../reducers', () => {
//       const nextRootReducer = require('../reducers');
//       store.replaceReducer(nextRootReducer);
//     });
//   }
//
//   return store;
// }
