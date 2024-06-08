import createSagaMiddleware from '@redux-saga/core';
import { configureStore, Tuple } from '@reduxjs/toolkit';

import reducer, { sagas } from '../reducers';
import type { Action, AppStore, State } from '../types';

const sagaMiddleware = createSagaMiddleware();

export default (initialState: State): AppStore => {
    const store: AppStore = configureStore<State, Action>({
        reducer,
        middleware: () => new Tuple(sagaMiddleware),
        preloadedState: initialState,
    });

    sagaMiddleware.run(sagas);

    return store;
};
