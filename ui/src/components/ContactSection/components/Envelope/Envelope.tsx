import React, { JSX } from 'react';
import styled from '@emotion/styled';
import { envelopeTransformCSS } from '../../styles';

const Svg = styled.svg`
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

export function Envelope(): JSX.Element {
    return (
        <Svg
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
        </Svg>
    );
}
