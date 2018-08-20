// @flow
import React from 'react';
import Nav from '../Nav';
import Logo from '../Logo';
import './Header.scss';

const Header = () => (
    <header className="Header">
        <Nav />
        <Logo />
    </header>
);

export default Header;
