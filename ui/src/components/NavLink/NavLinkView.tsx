import React from 'react';
import type { MouseEvent } from 'react';
import classNames from 'classnames';
import styled from '@emotion/styled';
import { scrollTo } from '../../utils';
import { StyledA } from '../StyledA';

const A = styled(StyledA)`
    text-decoration: none;
    transition: background 300ms;

    &, &:active, &:visited {
        color: ${({ theme }) => theme.color.black};
    }

    &:hover,
    &.active {
        background: ${({ theme }) => theme.color.lightBlue};
    }
`;

type Props = {
    to: string,
    className?: string,
    onClick?: (offsetTop: number) => any,
    children: JSX.Element | string,
    active?: boolean,
};

const NavLink = (props: Props): JSX.Element => {
    const {
        className,
        active,
        to,
        children,
        onClick,
    } = props;
    const clickHandler = (e: MouseEvent<HTMLAnchorElement>): void => {
        const scrollTarget = window.document.getElementById(to);

        if (scrollTarget) {
            scrollTo(scrollTarget.offsetTop);
            e.preventDefault();
        }

        if (onClick) {
            onClick(scrollTarget ? scrollTarget.offsetTop : -1);
        }
    };

    return (
        <A
            className={classNames(className, { active })}
            href={`/#${to}`}
            onClick={clickHandler}
        >
            {children}
        </A>
    );
};

export default NavLink;
