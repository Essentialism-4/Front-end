import thunk from 'redux-thunk'
import logger from 'redux-logger';
import rootReducer from './reducers';
import { createStore, applyMiddleware } from 'redux';
import { persistStore } from 'redux-persist';

const store = createStore(
    rootReducer,
    applyMiddleware(thunk, logger)
);

const persistor = persistStore(store);

export {store, persistor};