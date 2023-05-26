import Nav from './nav';
import LoggedinUser from './loggedinUser';


export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function Layout({children }: {children: React.ReactNode}) {
 
  return (
    <>
      <Nav />
      <LoggedinUser />  
      {children}
    </>
  )
}
