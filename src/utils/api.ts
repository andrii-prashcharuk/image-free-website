import axios from 'axios';
import type { AxiosPromise } from 'axios';

axios.defaults.timeout = 2000;

export default {
    sendMessage: (
        name: string,
        email: string,
        message: string,
    ): AxiosPromise<void> => axios.post('/sendMessage', { name, email, message }),
};
