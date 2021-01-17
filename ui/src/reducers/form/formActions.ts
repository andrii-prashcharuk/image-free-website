import {
    StrictEffect,
    all,
    call,
    put,
    takeEvery,
} from 'redux-saga/effects';
import api from '../../utils/api';
import { getErrorFromRequest } from '../../utils';

type FormRequestAction = {
    type: 'FORM_REQUEST',
};

export function formRequest(): FormRequestAction {
    return {
        type: 'FORM_REQUEST',
    };
}

type FormSuccessAction = {
    type: 'FORM_SUCCESS',
};

export function formSuccess(): FormSuccessAction {
    return {
        type: 'FORM_SUCCESS',
    };
}

type FormFailureAction = {
    type: 'FORM_FAILURE',
    payload: string,
};

export function formFailure(error: string): FormFailureAction {
    return {
        type: 'FORM_FAILURE',
        payload: error,
    };
}

export type FormAction =
    FormRequestAction |
    FormSuccessAction |
    FormFailureAction;

type SendMessageAction = {
    type: 'FORM_SEND_MESSAGE_REQUEST',
    payload: {
        name: string,
        email: string,
        message: string,
    },
};

export function sendMessage(name: string, email: string, message: string): SendMessageAction {
    return {
        type: 'FORM_SEND_MESSAGE_REQUEST',
        payload: { name, email, message },
    };
}

export function* sendMessageRequest(
    { payload: { name, email, message } }: SendMessageAction,
): Generator<StrictEffect, void, AxiosSagaResult<void>> {
    yield put(formRequest());
    try {
        yield call(api.sendMessage, name, email, message);
        yield put(formSuccess());
    } catch (error) {
        yield put(formFailure(getErrorFromRequest(error)));
    }
}

export const formSagas = [
    takeEvery('FORM_SEND_MESSAGE_REQUEST', sendMessageRequest),
];

export function* formRootSaga(): Generator<StrictEffect, void, any> {
    yield all([
        ...formSagas,
    ]);
}
