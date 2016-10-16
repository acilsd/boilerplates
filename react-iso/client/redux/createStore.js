import { createStore as _createStore, applyMiddleware, compose } from 'redux';
import { routerMiddleware } from 'react-router-redux';

function createStoreWithReducer(history, data, reducer) {
  const reduxRouterMiddleware = routerMiddleware(history);
  const middleware = [
    reduxRouterMiddleware,
  ];

  let finalCreateStore;
  if (process.env.NODE_ENV === 'development' && global.__CLIENT__ && global.__DEVTOOLS__) {
    const { persistState } = require('redux-devtools');
    const DevTools = require('../containers/DevTools');
    finalCreateStore = compose(
      applyMiddleware(...middleware),
      global.devToolsExtension ? global.devToolsExtension() : DevTools.instrument(),
      persistState(global.location.href.match(/[?&]debug_session=([^&]+)\b/))
    )(_createStore);
  } else {
    finalCreateStore = applyMiddleware(...middleware)(_createStore);
  }

  const store = finalCreateStore(reducer, data);

  if (process.env.NODE_ENV === 'development' && module.hot) {
    module.hot.accept('../reducers', () => {
      store.replaceReducer(require('../reducers'));
    });
  }
  return store;
}
function createStore(history, data) {
  return createStoreWithReducer(history, data, require('../reducers'));
}
module.exports = {
  createStore,
};
