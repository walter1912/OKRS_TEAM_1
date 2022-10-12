import axios from 'axios';
import queryString from 'query-string';
import { getLocalStorage } from 'src/utils/localStorage';

export const axiosInstance = axios.create({
    // withCredentials: false,
    // process.env.BASE_API_URL || 
    baseURL: 'https://okr-leoasher.herokuapp.com/api/v1',
    headers: {
        'Content-Type': 'application/json',
    },
    paramsSerializer: (params) => queryString.stringify(params),
});

axiosInstance.interceptors.request.use(
    async (config) => {
        const accessToken = getLocalStorage('accessToken');
        if (accessToken && config && config.headers) {
            config.headers.Authorization = 'Bearer ' + accessToken;
        }
        console.log("config.headers: ", config.headers)
        return config;
    },
    
    (error) => {
        return Promise.reject(error.response);
    },
);

axiosInstance.interceptors.response.use(
    (res) => res,
    async (err) => {
        return Promise.reject(err.response);
    },
);

export default axiosInstance;
