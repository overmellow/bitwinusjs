import useSWR from 'swr'
import Link from 'next/link'
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import axios from 'axios';

const fetcher = async (url: string) => {
    const res = await fetch(url)
    const data = await res.json()
  
    if (res.status !== 200) {
      throw new Error(data.message)
    }
    return data
  }

function Signers() {
    const router = useRouter();

    const [parties, setParties]: any = useState(new Set());
    const [newParty, setNewParty] = useState({email: ''});
    const { data, error, isLoading, mutate } = useSWR<any,any>(() => (`/api/contracts/${router.query.id}`), fetcher)

    if (error) return <div>{error.message}</div>
    if (isLoading) return <div>Loading...</div>
    if (!data) return null
    useEffect(() => {
      setParties(data.contract.parties)
    }, [])
    

    const handleChange = (e: any) => {
      setNewParty({...newParty, email: e.target.value})
    }

    const handleSubmit = async(e: any) => {
      e.preventDefault();
      const res = await axios.put(`/api/contracts/${data.contract?._id}/signers`, {parties: parties})
      if(res.status == 200) {
        console.log(res)
          // router.push('/contracts')   
          // console.log(res.data.contract._id)         
          router.push('/contracts/'+ data.contract._id + '/review')
      }
    }

    const addSigner = (e: any) => {
      setParties([...parties, newParty])
      console.log(parties)
    }

    return (<>
        <h2>Signers</h2>
        {data.contract?._id} : {data.contract?.name}
        <br /><br />
        <form>
          email: <input type="email" name="email" value={newParty.email} onChange={handleChange} /> &nbsp;
          <input type='button' onClick={addSigner} name="Add Signer" value="Add Signer" /> 
          <br /><br />          
          <input type="submit" onClick={handleSubmit} name="Review & Send" value="Review & Send" />
        </form>
        <ul>
          {
            // data.contract?.parties.map((p: any) => {
            //   return <li key={p.email}>{p.email}</li>
            // })
            Array.from(parties)?.map((p: any) => {
              return <li key={p.email}>{p.email}</li>
            })
          }
        </ul>
        {/* <Link href={`/contracts/${data.contract?._id}/review`}>Review & Send</Link> */}

    </>  );
}

export default Signers;