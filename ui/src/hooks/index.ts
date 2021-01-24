import {
    useCallback,
    useEffect,
    useLayoutEffect,
    useState,
} from 'react';
import { throttle } from 'throttle-debounce';
import { MOBILE_MAX_WIDTH } from '../constants';

const initialWindowScrollY = window.scrollY;

export const useWindowScrollY = (throttleDelay: number): number => {
    const [scrollY, setScrollY] = useState(initialWindowScrollY);
    const updateScrollY = (): void => setScrollY(window.scrollY);
    const handleScroll = useCallback(
        throttle(throttleDelay, updateScrollY),
        [],
    );

    useLayoutEffect(updateScrollY, []);
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [handleScroll]);

    return scrollY;
};

const initialWindowInnerWidth = window.innerWidth;
const initialWindowInnerHeight = window.innerHeight;

export const useWindowInnerSizes = (throttleDelay: number): [number, number] => {
    const [innerWidth, setInnerWidth] = useState(initialWindowInnerWidth);
    const [innerHeight, setInnerHeight] = useState(initialWindowInnerHeight);
    const updateData = (): void => {
        setInnerWidth(window.innerWidth);
        setInnerHeight(window.innerHeight);
    };
    const handleResize = useCallback(
        throttle(throttleDelay, updateData),
        [],
    );

    useLayoutEffect(updateData, []);
    useEffect(() => {
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [handleResize]);

    return [innerWidth, innerHeight];
};

export const useIsMobileView = (): boolean => {
    const [innerWidth] = useWindowInnerSizes(300);

    return innerWidth <= MOBILE_MAX_WIDTH;
};
