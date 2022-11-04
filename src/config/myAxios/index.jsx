import useGlobalStore from '@config/store/useGlobalStore';
import apiBundle from './apiBundle';

const myAxios = {
    init() {
        const token = useGlobalStore.getState().token;
        return apiBundle.init({
            baseUrl:
                process.env.NEXT_PUBLIC_API_BASE_URL ||
                'http://localhost:3000/api',
            accessToken: `Bearer ${token}`,
            headers: {
                Authorization: `Bearer ${token}`,
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            timeout: 7000,
        });
    },
};

export default myAxios;
