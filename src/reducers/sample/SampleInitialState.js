// @flow
export type SampleState = {
    data: any[],
    isFetching: boolean,
    error: { error: string } | null,
};

const initialState: SampleState = {
    data: [],
    isFetching: false,
    error: null,
};

export default initialState;
