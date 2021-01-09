import React from 'react';
import classNames from 'classnames';
import styled from '@emotion/styled';
import Nav from '../Nav';
import Logo from '../Logo';
import { isMobileView } from '../../utils';

const Container = styled.header`
    position: fixed;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    z-index: 10;
    top: 0;
    left: 0;
    width: 100%;
    height: 48px;
    background: ${({ theme }) => theme.color.blue};
    border-bottom: 2px solid ${({ theme }) => theme.color.black};
    transition: transform 500ms;

    &.closed {
        transform: translate3d(0, -100%, 0);
    }

    @media only screen and (max-width: 600px) {
        & {
            height: auto;
            padding-bottom: 44px;
            justify-content: flex-start;
        }

        & > * {
            z-index: 1;
        }
    }

    @media only screen and (min-width: 1920px) {
        & {
            height: 64px;
        }
    }
`;

const StyledLogo = styled(Logo)`
    top: calc(100% - 44px);
    transition: transform 500ms;
    position: absolute;

    .closed & {
        transform: translate3d(0, 2px, 0) scale3d(0.9, 0.9, 1);

        &:hover {
            transform: scale3d(1, 1, 1);
        }
    }

    @media only screen and (max-width: 600px) {
        & {
            bottom: 4px;
            position: absolute;
        }
    }

    @media only screen and (min-width: 1920px) {
        & {
            top: calc(100% - 59px);
        }
    }
`;

const Overlap = styled.header`
    display: none;

    @media only screen and (max-width: 600px) {
        & {
            display: block;
            position: fixed;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.01);
            z-index: 0;
        }
        .closed & {
            display: none;
        }
    }
`;

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
            <Container className={classNames({ closed })}>
                <Nav onClick={this.closeOnMobile} />
                <StyledLogo onClick={this.toggleHeader} />
                <Overlap onTouchStart={this.closeOnMobile} />
            </Container>
        );
    }
}
