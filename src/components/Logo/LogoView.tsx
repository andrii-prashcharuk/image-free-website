/** @jsx jsx */
import React from 'react';
import type { MouseEvent } from 'react';
import {
    jsx,
    css,
    Interpolation,
    Theme,
} from '@emotion/react';
import styled from '@emotion/styled';
import classNames from 'classnames';

const logoCss = css`
    height: 90px;

    &.interactive:hover {
        cursor: pointer;
    }

    @media only screen and (min-width: 1920px) {
        & {
            height: 120px;
        }
    }
`;

const Circle1 = styled.circle`
    fill: ${({ theme }) => theme.color.blue};
    transition: fill 300ms;

    .interactive:hover & {
        fill: ${({ theme }) => theme.color.lightBlue};
    }
`;

const Circle2 = styled.circle`
    fill: none;
    stroke: ${({ theme }) => theme.color.black};
    stroke-linecap: round;
    stroke-linejoin: round;
    stroke-width: 20px;
`;

const Line = styled(Circle2.withComponent('line'))`
    stroke-width: 50px;
`;

const Line2 = Circle2.withComponent('line');

type Props = {
    className?: string,
    onClick?: (e: MouseEvent<SVGSVGElement>) => any
    containerCss?: Interpolation<Theme>,
};

const Logo = ({ className, onClick, containerCss }: Props): JSX.Element => (
    <svg
        className={classNames(className, { interactive: !!onClick })}
        css={[logoCss, containerCss]}
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        viewBox="0 0 820 875"
        onClick={onClick}
    >
        <g id="bg">
            <g>
                <Circle1 cx="410" cy="437.5" r="400" />
                <Circle2 cx="410" cy="437.5" r="400" />
            </g>
        </g>
        <g id="shape">
            <g>
                <Line x1="447.5" y1="25" x2="210" y2="437.5" />
                <Line x1="610" y1="437.5" x2="372.5" y2="850" />
                <Line x1="465.66" y1="187.5" x2="610" y2="437.5" />
                <Line x1="210" y1="438" x2="354.34" y2="688" />
                <Line2 x1="310" y1="287.5" x2="510" y2="287.5" />
            </g>
        </g>
    </svg>
);

export default Logo;
