import React from 'react';
import styled from '@emotion/styled';
import { envelopeTransformCSS } from '../../styles';

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

const LetterMainBg = (): JSX.Element => (
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

export default LetterMainBg;
