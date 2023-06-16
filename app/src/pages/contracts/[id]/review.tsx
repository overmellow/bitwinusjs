import useSWR from 'swr'
import { useRouter } from 'next/router';
import fetcher from '../fetcher';

function Review() {
    const router = useRouter();
    const { data, error, isLoading } = useSWR<any,any>(() => (`/api/contracts/${router.query.id}`), fetcher)

    if (error) return <div>{error.message}</div>
    if (isLoading) return <div>Loading...</div>
    if (!data) return null
    return (<>
        <h2>Review and send</h2>
        {data.contract?._id} : {data.contract?.name}
        <ul>
            {
            data.contract?.parties.map((p: any) => {
              return <li key={p.email}>{p.email}</li>
            })
            }    
        </ul>
        <ol>
          {
            // data.contract?.parties.map((p: any) => {
            //   return <li key={p.email}>{p.email}</li>
            // })
            data.contract != null &&
            Array.from(data.contract.clauses)?.map((p: any) => {
              return <li key={p._id}>{p.text}</li>
            })
          }
        </ol>
    </>  );
}

export default Review;