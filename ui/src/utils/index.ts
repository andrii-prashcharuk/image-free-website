import type { AxiosError } from 'axios';
import type { Error } from '../types';

export function getErrorFromRequest(request: AxiosError<Error>): string {
    return (request.response && request.response.data.error) || 'Unknown Error';
}

export function isEmailValid(email: string): boolean {
    return (/^([A-Za-z0-9_\-.])+@([A-Za-z0-9_\-.])+\.([A-Za-z]{2,4})$/).test(email);
}

export function getYearsOfExperience(): number {
    const careerStartMonth = 5; // June
    const careerStartYear = 2011;
    const now = new Date();
    const experience = now.getFullYear() - careerStartYear;

    return (now.getMonth() < careerStartMonth) ? (experience - 1) : experience;
}
