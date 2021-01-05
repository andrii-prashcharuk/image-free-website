// @flow
import type { AppStore } from '../constants';
import configureStore from './configureStore';
import formInitialState from '../reducers/form/formInitialState';

const getStore = (): AppStore => configureStore({
    form: formInitialState,
});

export default getStore;
