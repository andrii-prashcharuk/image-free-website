// @flow
import configureStore from './configureStore';
import formInitialState from '../reducers/form/formInitialState';

const getStore = () => configureStore({
    form: formInitialState,
});

export default getStore;
