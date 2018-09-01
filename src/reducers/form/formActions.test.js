// @flow
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { expect } from 'chai';
import { fakeServer } from 'sinon';
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
        let server;
        let store;

        beforeEach(() => {
            server = fakeServer.create({ respondImmediately: true });
            store = mockStore({});
        });

        afterEach(() => {
            server.restore();
        });

        it('should create correct actions after sendMessage is called successfully', async () => {
            const expectedActions = [
                { type: 'FORM_REQUEST' },
                { type: 'FORM_SUCCESS' },
            ];

            server.respondWith('POST', '/sendMessage', '');
            await store.dispatch(actions.sendMessage('name', 'email@domain.com', 'test message'));

            expect(store.getActions()).to.deep.equal(expectedActions);
        });

        it('should create correct actions after sendMessage is called and failed', async () => {
            const error = { error: 'Some error' };
            const expectedActions = [
                { type: 'FORM_REQUEST' },
                { type: 'FORM_FAILURE', payload: error.error },
            ];

            server.respondWith('POST', '/sendMessage', [404, {}, JSON.stringify(error)]);
            await store.dispatch(actions.sendMessage('name', 'email@domain.com', 'test message'));

            expect(store.getActions()).to.deep.equal(expectedActions);
        });
    });
});
