import { createStore, compose, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import createSagaMiddleware from 'redux-saga';

import rootReducers from './reducers';
import sagas from './sagas';

const middleware = [];
const sagaMiddleware = createSagaMiddleware();

middleware.push(sagaMiddleware);
if (process.env.NODE_ENV === 'development') {
    middleware.push(createLogger());
}
const enhancers = [applyMiddleware(...middleware)];
const store = createStore(rootReducers, undefined, compose(...enhancers));

sagaMiddleware.run(sagas);

export default store;