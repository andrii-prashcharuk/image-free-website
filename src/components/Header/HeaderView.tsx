import React from 'react';
import classNames from 'classnames';
import Nav from '../Nav';
import Logo from '../Logo';
import { isMobileView } from '../../utils';
import './Header.scss';

type Props = Record<string, never>;

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

    componentDidMount(): void {
        window.addEventListener('scroll', this.handleScroll);
    }

    componentWillUnmount(): void {
        window.removeEventListener('scroll', this.handleScroll);
    }

    handleScroll = (): void => this.setState((state: State) => ({
        closed: isMobileView() ? state.closed : !!window.scrollY,
    }));

    toggleHeader = (): void => this.setState((state: State) => ({
        closed: !state.closed,
    }));

    closeOnMobile = (): void => {
        if (isMobileView()) {
            this.setState({
                closed: true,
            });
        }
    }

    render(): JSX.Element {
        const { closed } = this.state;

        return (
            <header className={classNames('Header', { closed })}>
                <Nav onClick={this.closeOnMobile} />
                <Logo onClick={this.toggleHeader} />
                <div className="Header-Overlap" onTouchStart={this.closeOnMobile} />
            </header>
        );
    }
}
