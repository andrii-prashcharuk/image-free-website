// @flow
import React from 'react';
import classNames from 'classnames';
import Nav from '../Nav';
import Logo from '../Logo';
import { isMobileView } from '../../utils';
import './Header.scss';

type Props = {||};

type State = {
    closed: boolean,
};

export default class Header extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);

        this.state = {
            closed: isMobileView() || !!window.scrollY,
        };
    }

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

    render() {
        const { closed } = this.state;

        return (
            <header className={classNames('Header', { closed })}>
                <Nav onClick={this.closedOnMobile} />
                <Logo onClick={this.toggleHeader} />
                <div className="Header-Overlap" onTouchStart={this.closedOnMobile} />
            </header>
        );
    }
}
