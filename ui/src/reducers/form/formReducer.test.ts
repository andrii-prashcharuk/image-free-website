import { form } from './formReducer';
import type { FormAction } from './formActions';
import initialState from './formInitialState';

describe('form reducer tests', () => {
    describe('testing init values', () => {
        test('has isRequesting field', () => {
            expect(initialState.isRequesting).toEqual(false);
        });

        test('has error field', () => {
            expect(initialState.error).toEqual(null);
        });
    });

    describe('testing actions', () => {
        describe('FORM_REQUEST', () => {
            test('sets isRequesting to true and error to null', () => {
                const action: FormAction = {
                    type: 'FORM_REQUEST',
                };
                const next = form(undefined, action);

                expect(next.isRequesting).toEqual(true);
                expect(next.error).toEqual(null);
            });
        });

        describe('FORM_SUCCESS', () => {
            test('sets isRequesting to false', () => {
                const action: FormAction = {
                    type: 'FORM_SUCCESS',
                };
                const next = form(undefined, action);

                expect(next.isRequesting).toEqual(false);
            });
        });

        describe('FORM_FAILURE', () => {
            test('sets isRequesting to false and sets error to the provided value', () => {
                const error = 'Some Error';
                const action: FormAction = {
                    type: 'FORM_FAILURE',
                    payload: error,
                };
                const next = form(undefined, action);

                expect(next.isRequesting).toEqual(false);
                expect(next.error).toEqual(error);
            });
        });
    });
});
