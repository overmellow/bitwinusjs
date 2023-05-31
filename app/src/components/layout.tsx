import Nav from './nav';
import LoggedinUser from './loggedinUser';
import { useUserContext } from '@/contexts/user';

export default function Layout({children }: {children: React.ReactNode}) {
  const { user }: any = useUserContext();

  return (
    <>
      <Nav userSession={user} />
      <LoggedinUser userSession={user} />  
      {children}
    </>
  )
}
