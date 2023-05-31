import axios from 'axios'
import { useState } from 'react'
import { useRouter } from 'next/router';
import useSWR from 'swr'

const fetcher = async (url: string, postData: any) => {
  const res = await fetch(url, postData)
  const data = await res.json()

  if (res.status !== 200) {
    throw new Error(data.message)
  }
  return data
}

function NewContract() {
    const router = useRouter();
    const initialNewContract = {
        name: '',
    }

    const [newContract, setNewContract] = useState(initialNewContract);   

    const handleChange = (e: any) => {
        setNewContract({...newContract, [e.target.name]: e.target.value})
    }

    const handleSubmit = async(e: any) => {
        e.preventDefault();
        const res = await axios.post('/api/contracts', newContract)
        if(res.status == 200) {
            // router.push('/contracts')
            router.push('/contracts/signers')
        }
    }
  
    return <>
      <h1>New Contract</h1>
      <form>
        Name: <input type="text" name="name" value={newContract.name} onChange={handleChange} />
        <br /><br />
        <input type="submit" onClick={handleSubmit} name="Login" />
      </form> 
    </>;
}

export default NewContract;