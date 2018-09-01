// @flow
import type { Store } from 'redux';
import type { FormState } from '../reducers/form/formInitialState';
import type { FormAction } from '../reducers/form/formActions';

export default {
    FETCHING_DATA_MSD: 'Data are loading...',
    NO_DATA_MSG: 'No data were found',
};

export type State = {
    form: FormState,
};

export type Action = FormAction;

export type AppStore = Store<State, Action>;

export type GetState = () => State;

export type Error = {
    error: string,
};

export const MOBILE_MAX_WIDTH = 600;

export const LINKEDIN_LINK = 'https://www.linkedin.com/in/prashcharuk';

export const GITHUB_LINK = 'https://github.com/monext';

export const FACEBOOK_LINK = 'https://www.facebook.com/prashcharuk';
