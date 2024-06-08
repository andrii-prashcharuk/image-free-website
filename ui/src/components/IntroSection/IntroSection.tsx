import React, { JSX } from 'react';
import { keyframes } from '@emotion/react';
import styled from '@emotion/styled';
import { Section } from '../Section';
import { Chevron } from '../Chevron';

const StyledSection = styled(Section)`
    padding-left: 50%;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;

    p {
        margin: 0 0 12px;
    }

    @media only screen and (max-width: 600px) {
        & {
            padding-left: 24px;
            padding-bottom: 260px;
        }
    }

    @media only screen and (max-height: 420px) {
        & {
            justify-content: flex-start;

            h3 {
                margin-top: 12px;
            }
        }
    }

    @media only screen and (min-width: 600px) and (max-height: 420px) {
        & h3 {
            margin-top: 64px;
        }
    }

    @media only screen and (min-width: 1920px) {
        & p {
            margin: 0 0 16px;
        }
    }
`;

const upDown = keyframes`
    0% {
        transform: translate3d(0, 0, 0);
    }
    50% {
        transform: translate3d(0, 12px, 0);
    }
    100% {
        transform: translate3d(0, 0, 0);
    }
`;

const ScrollDown = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    animation: ${upDown} 2s infinite;
`;

export function IntroSection(): JSX.Element {
    return (
        <StyledSection id="intro" className="IntroSection">
            <h3>Welcome</h3>
            <p>
                My name is Andrii Prashcharuk and this is my personal website!
                <br />
                Scroll down to learn more.
            </p>
            <ScrollDown>
                <Chevron />
                <Chevron />
            </ScrollDown>
        </StyledSection>
    );
}
