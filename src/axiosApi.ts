

import axios from 'axios';

const axiosApi = axios.create({
    baseURL: 'https://pages-83ba3-default-rtdb.europe-west1.firebasedatabase.app/'
});

export default axiosApi;