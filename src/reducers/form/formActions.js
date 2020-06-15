// @flow
import api from '../../utils/api';
import { getErrorFromRequest } from '../../utils';
import type { GetState } from '../../constants';

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

type Dispatch = (action: FormAction) => any;
type ThunkAction = (dispatch: Dispatch, getState: GetState) => any;

export function sendMessage(name: string, email: string, message: string): ThunkAction {
    return (dispatch) => {
        dispatch(formRequest());

        return api.sendMessage(name, email, message)
            .then(() => dispatch(formSuccess()))
            .catch((request) => dispatch(formFailure(getErrorFromRequest(request))));
    };
}
