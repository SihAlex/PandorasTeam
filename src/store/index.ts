import { RootState } from './reducers/index';
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from '@redux-saga/core';
import rootReducer from './reducers';
import rootSaga from './sagas';

const sagaMiddleware = createSagaMiddleware();

export const store = createStore<RootState, any, any, any>(
    rootReducer,
    applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run<any>(rootSaga);
