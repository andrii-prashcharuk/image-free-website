import initialState from './formInitialState';
import type { FormState } from './formInitialState';
import type { FormAction } from './formActions';

// eslint-disable-next-line default-param-last
export function form(state: FormState | undefined = initialState, action: FormAction): FormState {
    switch (action.type) {
        case 'FORM_REQUEST':
            return {
                ...state,
                isRequesting: true,
                error: null,
            };
        case 'FORM_SUCCESS':
            return {
                ...state,
                isRequesting: false,
                error: null,
            };
        case 'FORM_FAILURE':
            return {
                ...state,
                isRequesting: false,
                error: action.payload,
            };
        default:
            return state;
    }
}
