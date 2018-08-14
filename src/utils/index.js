// @flow
import type { $AxiosError } from 'axios';

export function getErrorFromRequest(request: $AxiosError<{ error: string }>) {
    return (request.response && request.response.data) || { error: 'Unknown Error' };
}
