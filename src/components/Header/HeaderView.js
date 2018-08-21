// @flow
import React from 'react';
import classNames from 'classnames';
import Nav from '../Nav';
import Logo from '../Logo';
import { isMobileView } from '../../utils';
import './Header.scss';

type State = {
    closed: boolean,
};

export default class Header extends React.Component<*, State> {
    state: State = {
        closed: isMobileView() || !!window.scrollY,
    };
    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
    }
    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }
    handleScroll = () => this.setState((state: State) => ({
        closed: isMobileView() ? state.closed : !!window.scrollY,
    }));
    toggleHeader = () => this.setState((state: State) => ({
        closed: !state.closed,
    }));
    closedOnMobile = () => isMobileView() && this.setState({
        closed: true,
    });
    render = () => (
        <header className={classNames('Header', { closed: this.state.closed })}>
            <Nav onClick={this.closedOnMobile} />
            <Logo onClick={this.toggleHeader} />
            <div className="Header-Overlap" onTouchStart={this.closedOnMobile} />
        </header>
    );
}
