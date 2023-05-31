import useSWR from 'swr'
import Link from 'next/link'
import { useState } from 'react'

const fetcher = async (url: string) => {
  const res = await fetch(url)
  const data = await res.json()

  if (res.status !== 200) {
    throw new Error(data.message)
  }
  return data
}

function Contracts() {
    const [selectedContract, setSelectedContract] = useState(null);
    const { data, error, isLoading } = useSWR<any,any>(() => ('/api/contracts'), fetcher)
    
    if (error) return <div>{error.message}</div>
    if (isLoading) return <div>Loading...</div>
    if (!data) return null



    const selectContract = (id: any) => {
      const c = data.contracts.find((e: any) => e._id == id);
      setSelectedContract(c);
    }
  
    return <>
      <h1>Contracts</h1>
      <ul>
      {
        data.contracts.map((u: any) => {
          return <li key={u._id}>
              <Link href={`/contracts/${u._id}`}>
              {u.name}
              </Link> &nbsp;
              <a onClick={() => selectContract(u._id)}>
                {u.name}
              </a>
            </li>
        })
      }
      </ul>    
      {
        selectedContract && selectedContract.name
      }
      <br /><br />
      <Link href={'contracts/new'}>New Contract</Link>
    </>;
}

export default Contracts;