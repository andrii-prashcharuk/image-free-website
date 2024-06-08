/** @jsx jsx */
import React, { JSX } from 'react';
import {
    jsx,
    css,
    Global,
    useTheme,
} from '@emotion/react';
import emotionNormalize from 'emotion-normalize';

export function GlobalStyles(): JSX.Element {
    const { color } = useTheme();

    return (
        <Global
            styles={css`
            ${emotionNormalize}
                html, body {
                    margin: 0;
                    padding: 0;
                    width: 100%;
                    height: 100%;
                    background: ${color.white};
                    color: ${color.black};
                    font-family: 'Nunito', sans-serif;
                    font-size: 18px;
                    line-height: normal;
                }
                body {
                    scroll-behavior: smooth;
                }
                button, input, optgroup, select, textarea {
                    line-height: normal;
                }
                @media only screen and (min-width: 1920px) {
                    html, body {
                        font-size: 24px;
                    }
                }
          `}
        />
    );
}
