/** @jsx jsx */
import React from 'react';
import { jsx } from '@emotion/react';
import { SVGStyles } from './styles';

const HTML5Icon = (): JSX.Element => (
    <svg css={SVGStyles} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 362.8 512">
        <path
            d="M108.4,0h23V22.8h21.2V0h23V69h-23V46h-21V69H108.4M206,23H185.7V0h63.7V23H229V69H206M259.5,0h24.1l14.8,24.3L313.2,0h24.1V69h-23V34.8L298.2,59.6,282.1,34.8V69H259.5M348.7,0h23V46.2h32.6V69H348.7"
            transform="translate(-74.6)"
        />
        <path
            fill="#e44d26"
            d="M107.6,471l-33-370.4H437.4l-33,370.2L255.7,512"
            transform="translate(-74.6)"
        />
        <path
            fill="#f16529"
            d="M256,480.5V131H404.3L376,447"
            transform="translate(-74.6)"
        />
        <path
            fill="#ebebeb"
            d="M142,176.3H256v45.4H191.8l4.2,46.5h60v45.3H154.4m2,22.8H202l3.2,36.3L256,386.2v47.4l-93.2-26"
            transform="translate(-74.6)"
        />
        <path
            fill="#fff"
            d="M369.6,176.3H255.8v45.4H365.4m-4.1,46.5H255.8v45.4h56l-5.3,59-50.7,13.6v47.2l93-25.8"
            transform="translate(-74.6)"
        />
    </svg>
);

export default HTML5Icon;
