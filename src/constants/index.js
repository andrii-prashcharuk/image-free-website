// @flow
import type { Store } from 'redux';
import type { SampleState } from '../reducers/sample/SampleInitialState';
import type { SampleAction } from '../reducers/sample/sampleActions';

export default {
    FETCHING_DATA_MSD: 'Data are loading...',
    NO_DATA_MSG: 'No data were found',
};

export type State = {
    sample: SampleState,
};

export type Action = SampleAction;

export type BasisStore = Store<State, Action>;

export type GetState = () => State;
