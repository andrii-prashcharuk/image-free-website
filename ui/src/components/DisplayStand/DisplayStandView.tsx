import React from 'react';
import styled from '@emotion/styled';

const Svg = styled.svg`
    height: 100px;

    path {
        fill: ${({ theme }) => theme.color.black};
    }
`;

type Props = {
    className?: string,
};

const DisplayStandView = ({ className }: Props): JSX.Element => (
    <Svg
        className={className}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 761.78 347.37"
    >
        <path
            d="M761.78,332.13c0,6.09-6.09,12.19-12.19,15.24H12.18C6.1,347.37,0,341.28,0,332.13s9.14-18.28,18.28-18.28h3c70.09,6.1,134.08-39.61,149.32-109.7L216.35,0H545.43l45.71,204.15c15.23,67,79.23,112.75,149.31,109.7h3C752.64,313.85,761.78,323,761.78,332.13Z"
        />
    </Svg>
);

export default DisplayStandView;
