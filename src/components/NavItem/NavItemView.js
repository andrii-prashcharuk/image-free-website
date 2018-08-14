// @flow
import React from 'react';
import type { ElementProps } from 'react';
import { NavHashLink } from 'react-router-hash-link';
import './NavItem.scss';

const NavItem = (props: ElementProps<typeof NavHashLink>) => (
    <NavHashLink className="NavItem" activeClassName="active" smooth {...props} />
);

export default NavItem;
