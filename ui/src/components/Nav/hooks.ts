import {
    useEffect,
    useLayoutEffect,
    useState,
    useCallback,
} from 'react';
import { useHistory } from 'react-router';
import { debounce } from 'throttle-debounce';
import { getActiveDOMSection, NAV_ITEMS } from './utils';

export const useHistoryUpdate = (): void => {
    const history = useHistory();
    const [activeSection, setActiveSection] = useState(NAV_ITEMS[0].id);
    const handleScrollResize: () => void = useCallback(debounce(
        300,
        () => setActiveSection(getActiveDOMSection()),
    ), []);

    useLayoutEffect(handleScrollResize, []);
    useEffect(() => {
        window.addEventListener('scroll', handleScrollResize);
        window.addEventListener('resize', handleScrollResize);

        return () => {
            window.removeEventListener('scroll', handleScrollResize);
            window.removeEventListener('resize', handleScrollResize);
        };
    }, [handleScrollResize]);

    useEffect(() => {
        history.push({
            hash: activeSection,
        });
    }, [history, activeSection]);
};
