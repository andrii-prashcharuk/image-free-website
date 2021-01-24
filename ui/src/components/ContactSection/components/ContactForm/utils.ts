import { isEmailValid } from '../../../../utils';

export type FieldName = 'name' | 'email' | 'message';

export type Form = Record<FieldName, string>;

export const getNotValidField = ({ name, email, message }: Form): FieldName | null => {
    if (!name.trim()) {
        return 'name';
    }
    if (!isEmailValid(email)) {
        return 'email';
    }
    if (!message.trim()) {
        return 'message';
    }

    return null;
};
