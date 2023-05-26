import Link from "next/link";
import useSWR from 'swr'

const fetcher = async (url: string) => {
  const res = await fetch(url)
  const data = await res.json()

  if (res.status !== 200) {
    throw new Error(data.message)
  }
  return data
}

export default function Profile() {
  const { data, error, isLoading, isValidating } = useSWR<any,any>(() => ('/api/blog'), fetcher)

  if (error) return <div>{error.message}</div>
  if (isLoading) return <div>Loading...</div>
  if (!data) return null

  return <>
    <h1>Profile</h1>
    <div>{data.name}</div>
    <Link href={"/"} >Home</Link> 
  </>;
}