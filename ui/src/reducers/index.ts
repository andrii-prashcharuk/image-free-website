import type { Reducer } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import { all } from 'redux-saga/effects';
import { SagaIterator } from 'redux-saga';
import type { State } from '../types';
import { FormAction, formSagas } from './form/formActions';
import { form } from './form/formReducer';

export function* sagas(): SagaIterator {
    yield all([
        ...formSagas,
    ]);
}

export default combineReducers({
    form,
}) as Reducer<State, FormAction, Partial<State>>;
