import useSWR from 'swr'
import Link from 'next/link'
import { useRouter } from 'next/router';

const fetcher = async (url: string) => {
  const res = await fetch(url)
  const data = await res.json()

  if (res.status !== 200) {
    throw new Error(data.message)
  }
  return data
}

function Contract() {
    const router = useRouter();
    const { data, error, isLoading, mutate } = useSWR<any,any>(() => (`/api/contracts/${router.query.id}`), fetcher)

    if (error) return <div>{error.message}</div>
    if (isLoading) return <div>Loading...</div>
    if (!data) return null
    const remove = async (id: any) => {
      try {
        // Make the delete request
        await fetch(`/api/contracts/${id}`, { method: 'DELETE' });
  
        // Update the data by re-fetching
        mutate();
        router.push('/contracts')
      } catch (error) {
        console.error('Error deleting data:', error);
      }
    }
  
    return <>
      <h1>Contract</h1>
      {data.contract._id}:{data.contract.name}
      <br /><br />
      <button onClick={() => remove(data.contract._id)}>Delete</button> &nbsp;
      <Link href={`/contracts/${data.contract._id}/signers`}>Signers</Link>
    </>;
}

export default Contract;