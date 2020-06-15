// @flow
import React from 'react';
import type { Node } from 'react';
import classNames from 'classnames';
import { scrollTo } from '../../utils';
import './NavItem.scss';

type Props = {
    to: string,
    onClick?: number => *,
    children: Node,
    active?: boolean,
};

export default class NavItem extends React.Component<Props> {
    clickHandler = (e: Event) => {
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

    render() {
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
