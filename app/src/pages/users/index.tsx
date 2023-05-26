import useSWR from 'swr'

const fetcher = async (url: string) => {
  const res = await fetch(url)
  const data = await res.json()

  if (res.status !== 200) {
    throw new Error(data.message)
  }
  return data
}

export default function Users() {
  const { data, error, isLoading, isValidating } = useSWR<any,any>(() => ('/api/users'), fetcher)

  if (error) return <div>{error.message}</div>
  if (isLoading) return <div>Loading...</div>
  if (!data) return null

  return <>
    <h1>Blog</h1>
    <ul>
    {
      data.users.map((u: any) => {
        return <li key={u.id}>{u.name}</li>
      })
    }
    </ul>    
    <div>{data.name}</div>

  </>;
}