import useSWR from 'swr'
import { useRouter } from 'next/router';
import fetcher from '../fetcher';
import { useEffect, useState } from 'react';
import axios from 'axios';

function Compose() {
    const router = useRouter();
    const [newClause, setNewClause] = useState({text: ''});
    const [clauses, setClauses]: any = useState(new Set([]));
    const { data, error, isLoading } = useSWR<any,any>(() => (`/api/contracts/${router.query.id}`), fetcher)

    useEffect(() => {
        setClauses(new Set(data?.contract?.clauses))
    }, [])

    if (error) return <div>{error.message}</div>
    if (isLoading) return <div>Loading...</div>
    if (!data) return null

    const handleChange = (e: any) => {
        setNewClause({...newClause, text: e.target.value})        
    }

    const addClause = (e: any) => {
        setClauses([...clauses, newClause])
        setNewClause({text: ''})
    }

    const handleSubmit = async(e: any) => {
        e.preventDefault();
        const res = await axios.put(`/api/contracts/${data.contract?._id}/compose`, {clauses: clauses})
        if(res.status == 200) {
            console.log(res)
            router.push('/contracts/'+ data.contract._id + '/review')
        }
      }
    
    return (<>
        <h2>Compose</h2>
        {data.contract?._id} : {data.contract?.name}
        <br />
        <ol>
          {
            // data.contract?.parties.map((p: any) => {
            //   return <li key={p.email}>{p.email}</li>
            // })
            clauses != null &&
            Array.from(clauses)?.map((p: any) => {
              return <li key={p._id}>{p.text}</li>
            })
          }
        </ol>
        <form>
          clause: <input type="text" name="text" value={newClause.text} onChange={handleChange} /> &nbsp;
          <input type='button' onClick={addClause} name="Add Signer" value="Add Clause" /> 
          <br /><br />          
          <input type="submit" onClick={handleSubmit} name="Review & Send" value="Review & Send" />
        </form>
    </>  );
}

export default Compose;