import SagaTester from 'redux-saga-tester';
import axios from 'axios';
import * as actions from './formActions';
import type { State } from '../../types';
import { getPromiseData, getPromiseError } from '../../utils/test-utils';

jest.mock('axios');

const testError = { error: 'Test error' };

describe('formActions tests', () => {
    describe('testing action definitions', () => {
        test('should return correct event type for getDataRequest', () => {
            expect(actions.formRequest()).toEqual({ type: 'FORM_REQUEST' });
        });

        test('should return correct event type and data for getDataSuccess', () => {
            expect(actions.formSuccess()).toEqual({ type: 'FORM_SUCCESS' });
        });

        test('should return correct event type and data for getDataFailure', () => {
            const error = 'Some Error';

            expect(actions.formFailure(error)).toEqual({
                type: 'FORM_FAILURE',
                payload: error,
            });
        });
    });

    describe('testing user\'s actions', () => {
        let sagaTester: SagaTester<State> = new SagaTester();

        beforeEach(() => {
            sagaTester = new SagaTester();
            sagaTester.start(actions.formRootSaga);
        });

        test('should create correct actions after sendMessage is called successfully', async () => {
            const expectedActions = [
                {
                    type: 'FORM_SEND_MESSAGE_REQUEST',
                    payload: {
                        name: 'name',
                        email: 'email@domain.com',
                        message: 'test message',
                    },
                },
                { type: 'FORM_REQUEST' },
                { type: 'FORM_SUCCESS' },
            ];

            (axios.post as jest.Mock).mockImplementationOnce(
                (url: string, { name, email, message }: any) => {
                    if (url === '/sendMessage'
                        && name === 'name'
                        && email === 'email@domain.com'
                        && message === 'test message'
                    ) {
                        return getPromiseData('');
                    }
                    return getPromiseError(testError);
                },
            );

            sagaTester.dispatch(actions.sendMessage('name', 'email@domain.com', 'test message'));
            await sagaTester.waitFor('FORM_SUCCESS');

            expect(sagaTester.getCalledActions()).toEqual(expectedActions);
        });

        test('should create correct actions after sendMessage is called and failed', async () => {
            const error = { error: 'Some error' };
            const expectedActions = [
                {
                    type: 'FORM_SEND_MESSAGE_REQUEST',
                    payload: {
                        name: 'name',
                        email: 'email@domain.com',
                        message: 'test message',
                    },
                },
                { type: 'FORM_REQUEST' },
                { type: 'FORM_FAILURE', payload: error.error },
            ];

            (axios.post as jest.Mock).mockImplementationOnce(
                (url: string, { name, email, message }: any) => {
                    if (url === '/sendMessage'
                        && name === 'name'
                        && email === 'email@domain.com'
                        && message === 'test message'
                    ) {
                        return getPromiseError(error);
                    }
                    return getPromiseError(testError);
                },
            );

            sagaTester.dispatch(actions.sendMessage('name', 'email@domain.com', 'test message'));
            await sagaTester.waitFor('FORM_FAILURE');

            expect(sagaTester.getCalledActions()).toEqual(expectedActions);
        });
    });
});
