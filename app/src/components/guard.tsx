import { useRouter } from 'next/router';
import { useUserContext } from '@/contexts/user';

export default function Guard({ children }: any) {
    const router = useRouter()
    

    authCheck(router.asPath)

    async function authCheck(url: any) {        
        const publicPaths = ['/auth/login', '/auth/signup', '/'];
        const path = url.split('?')[0];
        const user = useUserContext();
        if (!user) {
            console.log('not there')           
            if(!publicPaths.includes(path)) {
                if (typeof window === "undefined") return null;
                router.push({
                    pathname: '/auth/login',
                    query: { returnUrl: url }
                });
            }
        }         
    }

    return children;
}