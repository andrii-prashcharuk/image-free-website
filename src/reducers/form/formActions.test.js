// @flow
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import {
    describe, it, beforeEach, afterEach,
} from 'mocha';
import { expect } from 'chai';
import axios from 'axios';
import sinon from 'sinon';
import * as actions from './formActions';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('formActions tests', () => {
    describe('testing action definitions', () => {
        it('should return correct event type for getDataRequest', () => {
            expect(actions.formRequest()).to.deep.equal({ type: 'FORM_REQUEST' });
        });

        it('should return correct event type and data for getDataSuccess', () => {
            expect(actions.formSuccess()).to.deep.equal({ type: 'FORM_SUCCESS' });
        });

        it('should return correct event type and data for getDataFailure', () => {
            const error = 'Some Error';

            expect(actions.formFailure(error)).to.deep.equal({
                type: 'FORM_FAILURE',
                payload: error,
            });
        });
    });

    describe('testing user\'s actions', () => {
        let store;
        let sandbox;

        beforeEach(() => {
            sandbox = sinon.createSandbox();
            store = mockStore({});
        });

        afterEach(() => {
            sandbox.restore();
        });

        it('should create correct actions after sendMessage is called successfully', async () => {
            const expectedActions = [
                { type: 'FORM_REQUEST' },
                { type: 'FORM_SUCCESS' },
            ];

            sandbox.stub(axios, 'post')
                .withArgs('/sendMessage', { name: 'name', email: 'email@domain.com', message: 'test message' })
                .returns(Promise.resolve(''));

            await store.dispatch(actions.sendMessage('name', 'email@domain.com', 'test message'));

            expect(store.getActions()).to.deep.equal(expectedActions);
        });

        it('should create correct actions after sendMessage is called and failed', async () => {
            const error = { error: 'Some error' };
            const expectedActions = [
                { type: 'FORM_REQUEST' },
                { type: 'FORM_FAILURE', payload: error.error },
            ];

            sandbox.stub(axios, 'post')
                .withArgs('/sendMessage', { name: 'name', email: 'email@domain.com', message: 'test message' })
                .returns(Promise.reject({ response: { data: error } }));
            await store.dispatch(actions.sendMessage('name', 'email@domain.com', 'test message'));

            expect(store.getActions()).to.deep.equal(expectedActions);
        });
    });
});
