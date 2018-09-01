// @flow
import React from 'react';
import { throttle } from 'throttle-debounce';
import classNames from 'classnames';
import CodeBackground from '../CodeBackground';
import DisplayStand from '../DisplayStand';
import { isMobileView } from '../../utils';
import './DisplayBackground.scss';

const isVertical = (): boolean => (window.innerWidth / window.innerHeight) < 1;
const getProgress = (): number => Math.min(window.scrollY / window.innerHeight, 1);
const getProgressValue =
    (min: number, max: number, progress: number): number => min + ((max - min) * progress);

type State = {
    vertical: boolean,
    isMobile: boolean,
    progress: number,
};

export default class DisplayBackground extends React.Component<*, State> {
    state: State = {
        vertical: isVertical(),
        isMobile: isMobileView(),
        progress: getProgress(),
    };
    componentDidMount() {
        window.addEventListener('resize', this.handleResizeScroll);
        window.addEventListener('scroll', this.handleResizeScroll);
    }
    componentWillUnmount() {
        window.removeEventListener('resize', this.handleResizeScroll);
        window.removeEventListener('scroll', this.handleResizeScroll);
    }
    handleResizeScroll = throttle(
        100,
        () => this.setState({
            vertical: isVertical(),
            isMobile: isMobileView(),
            progress: getProgress(),
        }),
    );
    render = () => {
        const { vertical, progress, isMobile } = this.state;
        const scale = getProgressValue(0.35, 1, progress);
        const x = isMobile ? 0 : getProgressValue(21.43, 0, progress);
        const y = getProgressValue(-190, 0, progress);
        const transform = `scale3d(${scale}, ${scale}, 1) translate3d(${x}vw, ${y}px, 0)`;

        return (
            <div
                className={classNames('DisplayBackground', { vertical, fullSize: progress === 1 })}
                style={{
                    filter: progress < 1 && progress > 0.75 ? 'blur(1px)' : undefined,
                    WebkitTransform: transform,
                    MozTransform: transform,
                    msTransform: transform,
                    transform,
                }}
            >
                <CodeBackground />
                <DisplayStand />
            </div>
        );
    }
}
