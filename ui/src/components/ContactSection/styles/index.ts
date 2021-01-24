import { css } from '@emotion/react';

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
