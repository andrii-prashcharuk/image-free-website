/** @jsx jsx */
import React from 'react';
import { jsx, css } from '@emotion/react';
import styled from '@emotion/styled';
import Logo from '../../components/Logo';
import StyledButton from '../../components/StyledButton';
import { StyledLink } from '../../components/StyledA';
import InvertedColorsContainer from '../../components/InvertedColorsContainer';

const ErrorCode = styled.div`
    font-size: 130px;
    line-height: 80px;

    @media only screen and (min-width: 1920px) {
        & {
            font-size: 160px;
        }
    }
`;

const Text = styled.div`
    margin: 24px;
    text-align: center;

    @media only screen and (min-width: 1920px) {
        & {
            margin: 32px;
        }
    }
`;

const PageNotFound = (): JSX.Element => (
    <InvertedColorsContainer
        css={css`
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            height: 100vh;
        `}
    >
        <ErrorCode>
            4
            <Logo />
            4
        </ErrorCode>
        <Text>The page you’re trying to reach does not exist :(</Text>
        <StyledLink to="/">
            <StyledButton type="button">Back to Home Page</StyledButton>
        </StyledLink>
    </InvertedColorsContainer>
);

export default PageNotFound;
