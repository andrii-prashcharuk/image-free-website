import React, { useState } from 'react';
import type { ChangeEvent, FormEvent } from 'react';
import classNames from 'classnames';
import styled from '@emotion/styled';
import StyledInput from '../../../StyledInput';
import StyledTextArea from '../../../StyledTextArea';
import StyledButton from '../../../StyledButton';
import { getNotValidField } from './utils';
import type { FieldName, Form } from './utils';

const FormContainer = styled.form`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
`;

export type Props = {
    onSubmit: (form: Form) => void,
};

const ContactForm = ({ onSubmit }: Props): JSX.Element => {
    const [notValidField, setNotValidField] = useState<FieldName | null>(null);
    const [formData, setFormData] = useState<Form>({
        name: '',
        email: '',
        message: '',
    });
    const handleFieldChange = (name: FieldName) => (
        e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    ): void => {
        const { value } = e.target;
        const newForm = {
            ...formData,
            [name]: value,
        };

        setNotValidField(null);
        setFormData(newForm);
    };
    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const invalidField = getNotValidField(formData);

        setNotValidField(invalidField);

        if (!invalidField) {
            onSubmit(formData);
        }
    };

    return (
        <FormContainer onSubmit={handleSubmit}>
            <StyledInput
                className={classNames({ 'form-error': notValidField === 'name' })}
                type="text"
                placeholder="Name"
                aria-label="Name"
                onChange={handleFieldChange('name')}
                maxLength={64}
            />
            <StyledInput
                className={classNames({ 'form-error': notValidField === 'email' })}
                type="email"
                placeholder="Email"
                aria-label="Email"
                onChange={handleFieldChange('email')}
                maxLength={64}
            />
            <StyledTextArea
                className={classNames({ 'form-error': notValidField === 'message' })}
                placeholder="Message"
                onChange={handleFieldChange('message')}
                maxLength={3 * 1024}
            />
            <StyledButton type="submit">Send</StyledButton>
        </FormContainer>
    );
};

export default ContactForm;
