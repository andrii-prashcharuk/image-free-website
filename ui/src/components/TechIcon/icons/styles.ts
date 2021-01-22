import { css } from '@emotion/react';

export const SVGStyles = css`
    width: 48px;
    height: 48px;

    @media only screen and (max-width: 600px) {
        & {
            width: 36px;
            height: 36px;
        }
    }

    @media only screen and (min-width: 1920px) {
        & {
            width: 60px;
            height: 60px;
        }
    }
`;
