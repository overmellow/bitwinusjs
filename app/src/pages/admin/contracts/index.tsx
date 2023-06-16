import useSWR from 'swr'
import Link from 'next/link'
import axios from 'axios'
import { useRouter } from 'next/router'
import fetcher from '../../contracts/fetcher'
import { Status } from '@/models/Status'
import { useUserContext } from '@/contexts/user';

function All() {
  const router = useRouter();
  const { data, error, isLoading } = useSWR<any,any>(() => (`/api/contracts`), fetcher)
  
  if (error) return <div>{error.message}</div>
  if (isLoading) return <div>Loading...</div>
  if (!data) return null

  
    return <>
      <h2>Contracts</h2>
      <ul>
      {
        data.contracts?.map((u: any) => {
          return <li key={u._id}>
              <Link href={`/contracts/${u._id}`}>
                { u._id }
              </Link> &nbsp;
            </li>
        })
      }
      </ul>
    </>;
}

export default All;