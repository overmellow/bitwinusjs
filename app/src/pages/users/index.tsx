import useSWR from 'swr'
import { useRouter } from 'next/router';

const fetcher = async (url: string) => {
  const res = await fetch(url)
  const data = await res.json()

  if (res.status !== 200) {
    throw new Error(data.message)
  }
  return data
}

export default function Users() {
  const { data, error, isLoading, mutate } = useSWR<any,any>(() => ('/api/users'), fetcher)
  const router = useRouter();
  if (error) return <div>{error.message}</div>
  if (isLoading) return <div>Loading...</div>
  if (!data) return null

  const remove = async (id: any) => {
    console.log(id)
    try {
      // Make the delete request
      await fetch(`/api/users/${id}`, { method: 'DELETE' });

      // Update the data by re-fetching
      mutate();
      router.push('/users')
    } catch (error) {
      console.error('Error deleting data:', error);
    }
  }

  return <>
    <h2>Users</h2>
    <ul>
    {
      data.users.map((u: any) => {
        return <li key={u._id}>{u.email} <button onClick={() => remove(u._id)}>X</button></li>
      })
    }
    </ul>    
    <div>{data.name}</div>

  </>;
}