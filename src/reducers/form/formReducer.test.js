// @flow
import { expect } from 'chai';
import { describe, it } from 'mocha';
import form from './formReducer';
import initialState from './formInitialState';
import type { FormState } from './formInitialState';

describe('form reducer tests', () => {
    describe('testing init values', () => {
        it('has isRequesting field', () => {
            expect(initialState.isRequesting).to.equal(false);
        });

        it('has error field', () => {
            expect(initialState.error).to.equal(null);
        });
    });

    describe('testing actions', () => {
        describe('FORM_REQUEST', () => {
            it('sets isRequesting to true and error to null', () => {
                const action = {
                    type: 'FORM_REQUEST',
                };
                const next = form(undefined, action);

                expect(next.isRequesting).to.equal(true);
                expect(next.error).to.equal(null);
            });
        });

        describe('FORM_SUCCESS', () => {
            it('sets isRequesting to false', () => {
                const action = {
                    type: 'FORM_SUCCESS',
                };
                const next = form(undefined, action);

                expect(next.isRequesting).to.equal(false);
            });
        });

        describe('FORM_FAILURE', () => {
            it('sets isRequesting to false and sets error to the provided value', () => {
                const error = 'Some Error';
                const action = {
                    type: 'FORM_FAILURE',
                    payload: error,
                };
                const next = form(undefined, action);

                expect(next.isRequesting).to.equal(false);
                expect(next.error).to.equal(error);
            });
        });

        describe('NOT_FORM_ACTION', () => {
            it('should not change the state', () => {
                const someState: FormState = {
                    isRequesting: false,
                    error: 'Test Error',
                };
                const action = {
                    type: 'NOT_FORM_ACTION',
                };
                // $FlowFixMe
                const next = form(someState, action);

                expect(next).to.deep.equal(someState);
            });
        });
    });
});
