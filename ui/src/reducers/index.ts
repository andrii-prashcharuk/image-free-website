import { combineReducers } from 'redux';
import { all } from 'redux-saga/effects';
import { SagaIterator } from 'redux-saga';
import { formSagas } from './form/formActions';
import form from './form/formReducer';

export function* sagas(): SagaIterator {
    yield all([
        ...formSagas,
    ]);
}

export default combineReducers({
    form,
});
