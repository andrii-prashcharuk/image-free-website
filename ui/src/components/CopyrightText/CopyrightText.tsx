import React, { JSX } from 'react';
import styled from '@emotion/styled';

const YEAR = (new Date()).getFullYear();

const PStyled = styled.p`
    font-size: 14px;
    opacity: 0.3;
    margin-top: 24px;
    margin-bottom: 0;

    @media only screen and (min-width: 1920px) {
        & {
            font-size: 18px;
            margin-top: 32px;
        }
    }
`;

export function CopyrightText(): JSX.Element {
    return (
        <PStyled>
            Copyright &copy;&nbsp;
            {YEAR}
        &nbsp;Andrii Prashcharuk
        </PStyled>
    );
}
