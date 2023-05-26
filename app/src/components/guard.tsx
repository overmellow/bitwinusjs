import { useRouter } from 'next/router';
import { useUserContext } from '@/contexts/user';

export default function Guard({ children }: any) {
    const router = useRouter()
    const { user }: any = useUserContext();

    authCheck(router.asPath)

    function authCheck(url: any) {
        const publicPaths = ['/login'];
        const path = url.split('?')[0];
        if (!user) {           
            if(!publicPaths.includes(path)) {
                router.push({
                    pathname: '/login',
                    query: { returnUrl: url }
                });
            }
        }         
    }

    return children;
}