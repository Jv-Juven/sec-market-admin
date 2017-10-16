import { getCookie } from 'utils/tools';

export default function (api) {
    api.interceptors.request.use(function (config) {
        // Do something before request is sent
        config.headers['x-csrf-token'] = getCookie('csrfToken');
        return config;
    }, function (error) {
        // Do something with request error
        return Promise.reject(error);
    });
    // api.interceptors.response.use();
}
