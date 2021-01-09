import React from 'react';
import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const envelopeTransformCSS = css`
    transform: translate3d(0, 100vh, 0);
    transition: transform 1.5s ease-out;
    
    .closed & {
        transform: translate3d(0, 0, 0);
    }
    @media only screen and (max-height: 420px) {
        & {
            transform: translate3d(0, 120vh, 0);
        }
    }
`;

const MainContainer = styled.svg`
    ${envelopeTransformCSS};
    position: absolute;
    top: 25%;
    max-height: 60%;
    width: 100%;
    z-index: 3;

    .cls-1 {
        fill: ${({ theme }) => theme.color.blue};
    }

    .cls-2 {
        fill: ${({ theme }) => theme.color.lightBlue};
    }

    .cls-3 {
        fill: ${({ theme }) => theme.color.darkBlue};
    }
`;

const MainBgContainer = styled.svg`
    ${envelopeTransformCSS};
    position: absolute;
    top: 25%;
    max-height: 60%;
    width: 100%;
    z-index: 1;

    .cls-1 {
        fill: #4c5254;
    }

    .cls-2 {
        fill: #2f423f;
    }
`;

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

const PaperContainer = styled.svg`
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
    width: 100%;
    height: 100%;

    .cls-1 {
        fill: #eaeaea;
    }

    .cls-2 {
        fill: #d6d6d6;
    }

    .cls-3 {
        fill: #a8a8a8;
    }

    .cls-4 {
        fill: ${({ theme }) => theme.color.white};
    }
`;

export const Envelope = (): JSX.Element => (
    <MainContainer
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 496 320"
        preserveAspectRatio="none"
    >
        <g>
            <polygon
                className="cls-1"
                points="496 0 496 0 248 157.6 0 0 0 0 0 0 0 320 496 320 496 0"
            />
            <polygon
                className="cls-2"
                points="248 160 248 157.6 248 157.6 0 0 0 0 0 0 0 320 1.6 320 0 320 248 160"
            />
            <polygon className="cls-3" points="496 320 248 160 0 320 1.6 320 494.4 320 496 320" />
        </g>
    </MainContainer>
);

export const MainBg = (): JSX.Element => (
    <MainBgContainer
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 496 320"
        preserveAspectRatio="none"
    >
        <g>
            <polyline className="cls-1" points="496 0 496 320 0 320 0 0" />
            <polyline className="cls-2" points="248 0 496 0 496 320 248 320" />
        </g>
    </MainBgContainer>
);

export const TopOpen = (): JSX.Element => (
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

export const Paper = (): JSX.Element => (
    <PaperContainer
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 328.74 432"
        preserveAspectRatio="none"
    >
        <g>
            <path
                className="cls-1"
                d="M26.34,0C15.14,0,.74,12.8.74,24V412.8c0,11.2,14.4,19.2,25.6,19.2h284.8c11.2,0,17.6-8,17.6-19.2V87.2L240.74,0Z"
            />
            <path className="cls-2" d="M328.74,416V87.2L240.74,0H26.34C15.14,0,.74,12.8.74,24" />
            <polygon
                className="cls-3"
                points="328.74 158.4 328.74 88 285.54 44.8 250.34 81.6 328.74 158.4"
            />
            <path
                className="cls-4"
                d="M240.74,66.4V0l88,88h-67.2C249.54,88,240.74,77.6,240.74,66.4Z"
            />
        </g>
    </PaperContainer>
);
