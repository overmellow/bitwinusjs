'use client'
import { useThemeContext } from '@/contexts/theme';
import { useUserContext } from '@/contexts/user';

import Link from 'next/link'

export default function Home() {
  const { user, setUser } = useUserContext();
  const { color, setColor } = useThemeContext();
  console.log(useUserContext())
  console.log(useThemeContext())
  return (
    <>
      {user.email}
      {color}
      <h1>Home</h1>
      <Link href={"/profile"}>Profile</Link> &nbsp;
      <Link href={"/users"}>Users</Link> &nbsp;
      <Link href={"/login"}>Login</Link>  &nbsp;
    </>    
  )
}
