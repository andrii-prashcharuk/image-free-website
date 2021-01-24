import React from 'react';
import styled from '@emotion/styled';

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

const Paper = (): JSX.Element => (
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

export default Paper;
