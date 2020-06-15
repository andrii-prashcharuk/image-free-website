// @flow
import React from 'react';
import type { ContextRouter } from 'react-router';
import { debounce } from 'throttle-debounce';
import NavItem from '../NavItem';
import './Nav.scss';

type NavItemData = {
    id?: string,
    label?: string,
};

const NAV_ITEMS: NavItemData[] = [
    { id: 'intro', label: 'Introduction' },
    { id: 'about-me', label: 'About Me' },
    {},
    { id: 'about-project', label: 'About Project' },
    { id: 'contact', label: 'Contact' },
];

const NAV_ITEMS_REVERSED = [...NAV_ITEMS].reverse();

export type Props = {|
    ...ContextRouter,
    onClick?: number => *,
|};

export default class Nav extends React.Component<Props> {
    handleScrollResize: () => void = debounce(
        300,
        () => {
            const { history } = this.props;

            history.push({
                hash: this.getActiveSection(),
            });
        },
    );

    componentDidMount() {
        window.addEventListener('scroll', this.handleScrollResize);
        window.addEventListener('resize', this.handleScrollResize);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScrollResize);
        window.removeEventListener('resize', this.handleScrollResize);
    }

    getActiveSection = (): string => {
        const { scrollY } = window;
        let activeSection;
        let activeSectionDiff;

        NAV_ITEMS_REVERSED.forEach((i: NavItemData) => {
            if (!i.id) {
                return;
            }
            const section = document.getElementById(i.id);

            if (!section) {
                return;
            }

            const diff = Math.abs(section.offsetTop - scrollY);

            if (!activeSection || activeSectionDiff === undefined || diff < activeSectionDiff) {
                activeSection = section;
                activeSectionDiff = diff;
            }
        });

        return (activeSection && activeSection.id) || '';
    };

    renderNav = (item: NavItemData) => {
        const { onClick, location } = this.props;

        return ((item.id && item.label) ? (
            <li key={item.id}>
                <NavItem
                    to={item.id}
                    onClick={onClick}
                    active={location.hash === `#${item.id}`}
                >
                    {item.label}
                </NavItem>
            </li>
        ) : (
            <li key="placeholder" className="Nav-LogoPlaceholder" />
        ));
    };

    render = () => (
        <nav className="Nav">
            <ul>
                {NAV_ITEMS.map(this.renderNav)}
            </ul>
        </nav>
    );
}
