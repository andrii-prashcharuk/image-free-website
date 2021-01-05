import type { AxiosError } from 'axios';
import { MOBILE_MAX_WIDTH } from '../constants';
import type { Error } from '../types';

export function getErrorFromRequest(request: AxiosError<Error>): string {
    return (request.response && request.response.data.error) || 'Unknown Error';
}

export function isMobileView(): boolean {
    return window.innerWidth <= MOBILE_MAX_WIDTH;
}

export function isEmailValid(email: string): boolean {
    return (/^([A-Za-z0-9_\-.])+@([A-Za-z0-9_\-.])+\.([A-Za-z]{2,4})$/).test(email);
}

export function easeInOut(t: number): number {
    return 0.5 * (Math.sin((t - 0.5) * Math.PI) + 1);
}

export function getYearsOfExperience(): number {
    const careerStartMonth = 6; // July
    const careerStartYear = 2011;
    const now = new Date();
    const experience = now.getFullYear() - careerStartYear;

    return (now.getMonth() < careerStartMonth) ? (experience - 1) : experience;
}

export function scrollTo(
    destination: number,
    callback?: () => any,
): void {
    const SPEED = 2; // px per millisecond
    const MIN_DURATION = 500;
    const start = window.pageYOffset;
    const duration = Math.max(
        MIN_DURATION,
        Math.abs(destination - start) / SPEED,
    );
    const startTime = 'now' in window.performance ? performance.now() : new Date().getTime();
    const { body, documentElement } = document;
    const documentHeight = body && documentElement
        ? Math.max(
            body.scrollHeight,
            body.offsetHeight,
            documentElement.clientHeight,
            documentElement.scrollHeight,
            documentElement.offsetHeight,
        ) : 0;
    const windowHeight = window.innerHeight
        || (documentElement ? documentElement.clientHeight : 0)
        || (body ? body.clientHeight : 0);
    const destinationOffsetToScroll = Math.round(
        documentHeight - destination < windowHeight
            ? documentHeight - windowHeight
            : destination,
    );

    if (!('requestAnimationFrame' in window)) {
        window.scroll(0, destinationOffsetToScroll);
        if (callback) {
            callback();
        }
        return;
    }

    function scroll() {
        const now = 'now' in window.performance ? performance.now() : new Date().getTime();
        const time = Math.min(1, ((now - startTime) / duration));
        const timeFunction = easeInOut(time);
        window.scroll(0, Math.ceil((timeFunction * (destinationOffsetToScroll - start)) + start));

        if (window.pageYOffset === destinationOffsetToScroll) {
            if (callback) {
                callback();
            }
            return;
        }

        requestAnimationFrame(scroll);
    }

    scroll();
}
