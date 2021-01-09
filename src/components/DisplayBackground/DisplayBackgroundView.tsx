import React from 'react';
import { throttle } from 'throttle-debounce';
import classnames from 'classnames';
import styled from '@emotion/styled';
import CodeBackground from '../CodeBackground';
import DisplayStand from '../DisplayStand';
import { isMobileView } from '../../utils';

const DisplayBackgroundContainer = styled.div`
    position: fixed;
    width: 100%;
    top: 0;
    left: 0;
    display: flex;
    flex-direction: column;
    justify-content: stretch;
    transform: scale3d(0.35, 0.35, 1) translate3d(21.43 vw, - 190 px, 0);
    transform-origin: left center;
    transition: transform 300ms;

    @media only screen and (max-width: 600px) {
        & {
            transform-origin: bottom center;
        }
    }
`;

const StyledDisplayStand = styled(DisplayStand)`
    margin-top: -5px;

    .vertical &,
    .fullSize & {
        display: none;
    }
`;

const StyledCodeBackground = styled(CodeBackground)`
    position: relative;
    margin-top: -25px;
    margin-left: -25px;
    border: 25px solid ${({ theme }) => theme.color.black};
    border-bottom-width: 50px;
    border-radius: 40px;
    transition: border-radius 300ms;

    &::after {
        content: '';
        position: absolute;
        width: 24px;
        height: 24px;
        border-radius: 12px;
        background: ${({ theme }) => theme.color.darkGray};
        bottom: -37px;
        left: 0;
        right: 0;
        margin: auto;
    }

    .fullSize &::after {
        display: none;
    }
`;

const isVertical = (): boolean => (window.innerWidth / window.innerHeight) < 1;
const getProgress = (): number => Math.min(window.scrollY / window.innerHeight, 1);
const getProgressValue = (min: number, max: number, progress: number): number => (
    min + ((max - min) * progress)
);

type Props = Record<string, never>;

type State = {
    vertical: boolean,
    isMobile: boolean,
    progress: number,
};

export default class DisplayBackground extends React.Component<Props, State> {
    handleResizeScroll: () => void = throttle(
        100,
        () => this.setState({
            vertical: isVertical(),
            isMobile: isMobileView(),
            progress: getProgress(),
        }),
    );

    constructor(props: Props) {
        super(props);

        this.state = {
            vertical: isVertical(),
            isMobile: isMobileView(),
            progress: getProgress(),
        };
    }

    componentDidMount(): void {
        window.addEventListener('resize', this.handleResizeScroll);
        window.addEventListener('scroll', this.handleResizeScroll);
    }

    componentWillUnmount(): void {
        window.removeEventListener('resize', this.handleResizeScroll);
        window.removeEventListener('scroll', this.handleResizeScroll);
    }

    render(): JSX.Element {
        const { vertical, progress, isMobile } = this.state;
        const scale = getProgressValue(0.35, 1, progress);
        const x = isMobile ? 0 : getProgressValue(21.43, 0, progress);
        const y = getProgressValue(-190, 0, progress);
        const transformValue = `scale3d(${scale}, ${scale}, 1) translate3d(${x}vw, ${y}px, 0)`;

        return (
            <DisplayBackgroundContainer
                className={classnames({ vertical, fullSize: progress === 1 })}
                style={{
                    WebkitTransform: transformValue,
                    msTransform: transformValue,
                    transform: transformValue,
                }}
            >
                <StyledCodeBackground blur={progress > 0.75} />
                <StyledDisplayStand />
            </DisplayBackgroundContainer>
        );
    }
}
