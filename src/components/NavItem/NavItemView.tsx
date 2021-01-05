import React from 'react';
import type { MouseEvent } from 'react';
import classNames from 'classnames';
import { scrollTo } from '../../utils';
import './NavItem.scss';

type Props = {
    to: string,
    onClick?: (offsetTop: number) => any,
    children: JSX.Element | string,
    active?: boolean,
};

export default class NavItem extends React.Component<Props> {
    clickHandler = (e: MouseEvent<HTMLAnchorElement>): void => {
        const { onClick, to } = this.props;
        const scrollTarget = window.document.getElementById(to);

        if (scrollTarget) {
            scrollTo(scrollTarget.offsetTop);
            e.preventDefault();
        }

        if (onClick) {
            onClick(scrollTarget ? scrollTarget.offsetTop : -1);
        }
    };

    render(): JSX.Element {
        const { active, to, children } = this.props;

        return (
            <a
                className={classNames('NavItem', { active })}
                href={`/#${to}`}
                onClick={this.clickHandler}
            >
                {children}
            </a>
        );
    }
}
