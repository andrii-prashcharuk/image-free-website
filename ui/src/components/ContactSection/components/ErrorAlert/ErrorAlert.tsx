import React, { JSX } from 'react';
import styled from '@emotion/styled';
import { StyledA } from '../../../StyledA';
import { LINKEDIN_LINK } from '../../../../constants';
import { Alert } from '../../../Alert';

const ErrorMessage = styled.div`
    text-align: center;
    font-size: 24px;

    &::before {
        content: '✖ ';
        color: ${({ theme }) => theme.color.brightRed};
    }

    @media only screen and (max-width: 600px) {
        &::before  {
            content: '✕ ';
        }
    }
`;

export type Props = {
    show: boolean,
    onCloseRequest: () => any,
};

export function ErrorAlert({ show, onCloseRequest }: Props): JSX.Element {
    return (
        <Alert onCloseRequest={onCloseRequest} show={show}>
            <ErrorMessage>
                Sorry, an error has been occurred :(
                <br />
                Please message me in&nbsp;
                <StyledA href={LINKEDIN_LINK} target="_blank" rel="me noopener noreferrer">
                    LinkedIn
                </StyledA>
            &nbsp;or try again later!
            </ErrorMessage>
        </Alert>
    );
}
