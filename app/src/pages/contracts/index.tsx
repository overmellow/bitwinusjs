import useSWR from 'swr'
import Link from 'next/link'
import axios from 'axios'
import { useRouter } from 'next/router'
import fetcher from './fetcher'
import { Status } from '@/models/Status'
import { useUserContext } from '@/contexts/user';

function Contracts() {
  const { user }: any = useUserContext();
  const router = useRouter();
  const { data, error, isLoading } = useSWR<any,any>(() => (`/api/users/${user.id}`), fetcher)
  
  if (error) return <div>{error.message}</div>
  if (isLoading) return <div>Loading...</div>
  if (!data) return null

  const createNew = async () => {
    const res = await axios.post('/api/contracts', {status: Status.NEW});
    if(res.status == 200) {      
      console.log(data)
      router.push('/contracts/'+ res.data.contract._id + '/signers')
    }
  }
  
    return <>
      <h2>Contracts</h2>
      <ul>
      {
        data.user?.contracts?.map((u: any) => {
          return <li key={u}>
              <Link href={`/contracts/${u}`}>
                {/* { u.name != null ? u.name : u._id } */}
                {u}
              </Link> &nbsp;
              {u}
            </li>
        })
      }
      </ul>
      <button onClick={createNew}>New Contract</button>
    </>;
}

export default Contracts;