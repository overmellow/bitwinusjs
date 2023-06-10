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
      <h2>Contract</h2>
      {data.contract?._id} : {data.contract?.name}
      <br />
      <ol>      
      {
        data.contract?.clauses.map((c: any, i: any) => {
          return <li key={i}>{c}</li>
        })
      }
      </ol>
      <button onClick={() => remove(data.contract?._id)}>Delete</button> &nbsp;
      <Link href={`/contracts/${data.contract?._id}/signers`}>Signers</Link> &nbsp;
      <Link href={`/contracts/${data.contract?._id}/compose`}>Compose</Link>
    </>;
}

export default Contract;