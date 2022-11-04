import useGlobalStore from '@config/store/useGlobalStore';
import { useRouter } from 'next/router';

export function PublicRoute({ children }) {
    const router = useRouter();
    const user = useGlobalStore.getState().user;
    const setUser = useGlobalStore.getState().setUser;
    const isBrowser = () => typeof window !== 'undefined';

    const url = router.query.redirect || '/';

    if (isBrowser() && user) {
        router.replace(url);
        return <h1>Loading...</h1>;
    } else {
        return children;
    }
}
