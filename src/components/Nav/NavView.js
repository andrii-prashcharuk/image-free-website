// @flow
import React from 'react';
import type { RouterHistory, LocationShape } from 'react-router';
import { debounce } from 'debounce';
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

type Props = {
    onClick?: number => *,
    location: LocationShape,
    history: RouterHistory,
};

export default class Nav extends React.Component<Props> {
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
    handleScrollResize = debounce(() => {
        this.props.history.push({
            hash: this.getActiveSection(),
        });
    }, 300);
    props: Props;
    renderNav = (item: NavItemData) => (item.id ? (
        <li key={item.id}>
            <NavItem
                to={item.id}
                onClick={this.props.onClick}
                active={this.props.location.hash === `#${item.id}`}
            >
                {item.label}
            </NavItem>
        </li>
    ) : (
        <li key="placeholder" className="Nav-LogoPlaceholder" />
    ));
    render = () => (
        <nav className="Nav">
            <ul>
                {NAV_ITEMS.map(this.renderNav)}
            </ul>
        </nav>
    );
}
