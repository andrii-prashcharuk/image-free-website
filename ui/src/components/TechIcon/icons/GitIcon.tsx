/** @jsx jsx */
import React, { JSX } from 'react';
import { jsx } from '@emotion/react';
import { SVGStyles } from './styles';

export function GitIcon(): JSX.Element {
    return (
        <svg css={SVGStyles} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 91.89 91.89">
            <path
                fill="#f05133"
                d="M92.71,44.41,52.59,4.29a5.92,5.92,0,0,0-8.37,0l-8.33,8.33L46.46,23.19a7,7,0,0,1,8.9,9L65.54,42.34a7,7,0,1,1-4.22,4l-9.5-9.5v25A7,7,0,1,1,46,61.6V36.37a7,7,0,0,1-3.82-9.23L31.8,16.72,4.29,44.22a5.92,5.92,0,0,0,0,8.37L44.41,92.71a5.92,5.92,0,0,0,8.37,0L92.71,52.78A5.92,5.92,0,0,0,92.71,44.41Z"
                transform="translate(-2.55 -2.56)"
            />
        </svg>
    );
}
