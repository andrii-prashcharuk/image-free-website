import React from 'react';
import { css } from '@emotion/react';
import styled from '@emotion/styled';

const topOpenCloseCSS = css`
    backface-visibility: hidden;
    transition: transform 1s;
    transform-style: preserve-3d;
    transition-delay: 1s;
`;

const TopOpenContainer = styled.svg`
    ${topOpenCloseCSS};
    z-index: 1;
    transform: translate3d(0, -100%, 0);
    transform-origin: bottom;

    .cls-1 {
        fill: #4c5254;
    }

    .cls-2 {
        fill: #2f423f;
    }

    .closed & {
        transform: translate3d(0, -100%, 0) rotate3d(1, 0, 0, 180deg);
    }
`;

const TopCloseContainer = styled.svg`
    ${topOpenCloseCSS};
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    transform: rotate3d(1, 0, 0, 180deg);
    transform-origin: top;
    z-index: 3;

    .cls-1 {
        fill: ${({ theme }) => theme.color.darkBlue};
    }
    
    .closed & {
        transform: rotate3d(1, 0, 0, 0deg);
    }
`;

export const TopOpened = (): JSX.Element => (
    <TopOpenContainer
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 496 161.6"
        preserveAspectRatio="none"
    >
        <g>
            <polyline className="cls-1" points="0 161.6 248 0 496 161.6" />
            <polyline className="cls-2" points="248 0 496 161.6 248 161.6" />
        </g>
    </TopOpenContainer>
);

export const TopClosed = (): JSX.Element => (
    <TopCloseContainer xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 158" preserveAspectRatio="none">
        <polygon className="cls-1" points="0 0 248 158 496 0 494.4 0 1.6 0 0 0" />
    </TopCloseContainer>
);
