import { State } from '../../types';

export const getFormError = (state: State): string | null => state.form.error;
export const isFormRequesting = (state: State): boolean => state.form.isRequesting;
