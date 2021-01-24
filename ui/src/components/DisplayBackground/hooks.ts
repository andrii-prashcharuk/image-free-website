import { useWindowInnerSizes, useWindowScrollY } from '../../hooks';

export const useIsVertical = (): boolean => {
    const [innerWidth, innerHeight] = useWindowInnerSizes(300);

    return (innerWidth / innerHeight) < 1;
};

export const useProgress = (): number => {
    const scrollY = useWindowScrollY(100);
    const [, innerHeight] = useWindowInnerSizes(100);

    return Math.min(scrollY / innerHeight, 1);
};
