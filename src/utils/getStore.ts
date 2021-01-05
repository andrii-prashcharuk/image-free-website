import type { AppStore } from '../types';
import configureStore from './configureStore';
import formInitialState from '../reducers/form/formInitialState';

const getStore = (): AppStore => configureStore({
    form: formInitialState,
});

export default getStore;
