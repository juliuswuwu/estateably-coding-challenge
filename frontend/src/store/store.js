import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import { reducer as formReducer } from 'redux-form';
import thunk from 'redux-thunk';
// import logger from 'redux-logger';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
  // TODO
  form: formReducer,
});

const configureStore = (preloadedState = {}) => (
  createStore(
    rootReducer,
    preloadedState,
    composeEnhancers(applyMiddleware(thunk))
  )
);

export default configureStore;