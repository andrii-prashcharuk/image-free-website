// @flow
import React from 'react';
import NavItem from '../NavItem';
import './Nav.scss';

const Nav = () => (
    <nav className="Nav">
        <ul>
            <li><NavItem to="/#intro">Introduction</NavItem></li>
            <li><NavItem to="/#about-me">About Me</NavItem></li>
            <li className="Nav-LogoPlaceholder" />
            <li><NavItem to="/#about-project">About Project</NavItem></li>
            <li><NavItem to="/#contact">Contact</NavItem></li>
        </ul>
    </nav>
);

export default Nav;
