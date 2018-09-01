// @flow
export type FormState = {
    isRequesting: boolean,
    error: string | null,
};

const initialState: FormState = {
    isRequesting: false,
    error: null,
};

export default initialState;
