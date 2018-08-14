// @flow
import configureStore from './configureStore';
import SampleInitialState from '../reducers/sample/SampleInitialState';

const getStore = () => configureStore({
    sample: SampleInitialState,
});

export default getStore;
