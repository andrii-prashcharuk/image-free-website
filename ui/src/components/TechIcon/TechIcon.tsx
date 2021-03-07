import React from 'react';
import styled from '@emotion/styled';
import LOGOS from './logos';
import type { LogoType } from './logos';

const Figure = styled.figure`position: relative;
    margin: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    &:hover {
        figcaption {
            opacity: 1;
        }
    }

    figcaption {
        position: absolute;
        top: -25px;
        opacity: 0;
        transition: opacity 500ms;
        color: ${({ theme }) => theme.color.white};
        background: ${({ theme }) => theme.color.black};
        padding: 0 8px;
        border-radius: 12px;
        font-size: 14px;
    }

    figcaption::after {
        content: '';
        position: absolute;
        bottom: -4px;
        left: 0;
        right: 0;
        margin: auto;
        width: 0;
        height: 0;
        border-left: 4px solid transparent;
        border-right: 4px solid transparent;
        border-top: 4px solid ${({ theme }) => theme.color.black};;
    }
`;

type Props = {
    type: LogoType,
};

const TechIcon = ({ type }: Props): JSX.Element => {
    const { title, Component } = LOGOS[type];

    return (
        <Figure className={type}>
            <figcaption>{title}</figcaption>
            <Component />
        </Figure>
    );
};

export default TechIcon;
