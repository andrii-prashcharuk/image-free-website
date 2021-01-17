import type { Store } from 'redux';
import type { FormState } from '../reducers/form/formInitialState';
import type { FormAction } from '../reducers/form/formActions';

export type State = {
    form: FormState,
};

export type Action = FormAction;

export type AppStore = Store<State, Action>;

export type GetState = () => State;

export type Error = {
    error: string,
};
