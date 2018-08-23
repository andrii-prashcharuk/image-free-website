// @flow
import React from 'react';
import LOGOS from './logos';
import type { LogoType } from './logos';
import './TechLogo.scss';

type Props = {
    type: LogoType,
};

const TechLogo = ({ type }: Props) => (
    <figure className={`TechLogo ${type}`}>
        {LOGOS[type].title && <figcaption>{LOGOS[type].title}</figcaption>}
        {LOGOS[type].svg}
    </figure>
);

export default TechLogo;
