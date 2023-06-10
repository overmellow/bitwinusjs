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
  

function Compose() {
    const router = useRouter();
    const { data, error, isLoading, mutate } = useSWR<any,any>(() => (`/api/contracts/${router.query.id}`), fetcher)

    if (error) return <div>{error.message}</div>
    if (isLoading) return <div>Loading...</div>
    if (!data) return null
    
    return (<>
        <h2>Compose</h2>
        {data.contract?._id} : {data.contract?.name}
        <br />
    </>  );
}

export default Compose;