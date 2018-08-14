// @flow
import axios from 'axios';

const URL = '/__mocks__/sample_data.json';

export default {
    getAllData: () => axios.get(URL),
    getFilteredData: (filter: string) => axios.get(URL, { params: { filter } }),
};
