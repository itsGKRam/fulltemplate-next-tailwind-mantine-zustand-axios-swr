import axios from 'axios';

// import jwt from 'jsonwebtoken';

// axios.interceptors.request.use(
//     (config) => {
//         const MySecretKey = process.env.NEXT_PUBLIC_JWT_SECRET_KEY?.toString();
//         const token = jwt.sign(
//             {
//                 ...config.data,
//             },
//             `${MySecretKey}`,
//         );

//         return {
//             ...config,
//             data: {
//                 request: token,
//             },
//         };
//     },
//     (err) => {
//         console.log(err);
//         return Promise.reject(err);
//     },
// );

// axios.interceptors.response.use(
//     (config) => {
//         const MySecretKey = process.env.NEXT_PUBLIC_JWT_SECRET_KEY?.toString();
//         const decode = jwt.verify(config?.data?.response, `${MySecretKey}`);
//         return {
//             ...config,
//             data: decode,
//         };
//     },
//     (err) => {
//         console.log(err);
//         return Promise.reject(err);
//     },
// );

const base = {
    init(opts) {
        const baseUrl = opts.baseUrl || '';
        const accessToken = opts.accessToken || '';

        const cancelToken = opts.CancelTokenSrc;

        return {
            async get(url, queryParams, contentType) {
                const config = {
                    cancelToken,
                    headers: {
                        Accept: contentType,
                        Authorization: accessToken,
                    },
                    params: queryParams,
                };
                url = baseUrl + url;
                return axios.get(url, config).catch((error) => {
                    if (axios.isCancel(error)) {
                        console.log(error.message);
                    } else {
                        throw error;
                    }
                });
            },
            async post(url, queryParams, data, contentType) {
                const config = {
                    cancelToken,
                    headers: {
                        Accept: contentType,
                        Authorization: accessToken,
                    },
                    params: queryParams,
                    maxContentLength: 'infinity',
                    maxBodyLength: 'infinity',
                };
                url = baseUrl + url;
                return axios.post(url, data, config).catch((error) => {
                    if (axios.isCancel(error)) {
                        console.log(error.message);
                    } else {
                        throw error;
                    }
                });
            },

            async patch(url, queryParams, data, contentType) {
                const config = {
                    cancelToken,
                    headers: {
                        Accept: contentType,
                        Authorization: accessToken,
                    },
                    params: queryParams,
                };
                url = baseUrl + url;
                return axios.patch(url, data, config).catch((error) => {
                    if (axios.isCancel(error)) {
                        console.log(error.message);
                    } else {
                        throw error;
                    }
                });
            },

            async put(url, queryParams, data, contentType) {
                const config = {
                    cancelToken,
                    headers: {
                        Accept: contentType,
                        Authorization: accessToken,
                    },
                    params: queryParams,
                };
                url = baseUrl + url;
                return axios.put(url, data, config).catch((error) => {
                    if (axios.isCancel(error)) {
                        console.log(error.message);
                    } else {
                        throw error;
                    }
                });
            },

            async delete(url, queryParams, contentType) {
                const config = {
                    cancelToken,
                    headers: {
                        Accept: contentType,
                        Authorization: accessToken,
                    },
                    params: queryParams,
                };
                url = baseUrl + url;
                return axios.delete(url, config).catch((error) => {
                    if (axios.isCancel(error)) {
                        console.log(error.message);
                    } else {
                        throw error;
                    }
                });
            },
            async url() {
                return baseUrl;
            },
        };
    },
};

export default base;
