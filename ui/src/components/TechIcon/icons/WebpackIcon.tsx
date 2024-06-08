/** @jsx jsx */
import React, { JSX } from 'react';
import { jsx } from '@emotion/react';
import { SVGStyles } from './styles';

export function WebpackIcon(): JSX.Element {
    return (
        <svg css={SVGStyles} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 774 875.7">
            <path fill="#fff" d="M387,0,774,218.9V656.8L387,875.7,0,656.8V218.9Z" />
            <path
                fill="#8ed6fb"
                d="M704.9,641.7,399.8,814.3V679.9L589.9,575.3l115,66.4Zm20.9-18.9V261.9L614.2,326.4v232l111.6,64.4ZM67.9,641.7,373,814.3V679.9L182.8,575.3ZM47,622.8V261.9l111.6,64.5v232ZM60.1,238.5,373,61.5V191.4L172.5,301.7l-1.6.9Zm652.6,0L399.8,61.5V191.4L600.3,301.6l1.6.9,110.8-64Z"
            />
            <path
                fill="#1c78c0"
                d="M373,649.3,185.4,546.1V341.8L373,450.1Zm26.8,0L587.4,546.2V341.8L399.8,450.1ZM198.1,318.2,386.4,214.7,574.7,318.2,386.4,426.9,198.1,318.2Z"
            />
        </svg>
    );
}
