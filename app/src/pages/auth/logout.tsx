import axios from "axios";
import { useRouter } from 'next/router';
import { useUserContext } from "@/contexts/user";
import LocalStorage from "@/utils/LocalStorage";

export default function Login() {
    const router = useRouter();
    const { setUser }: any = useUserContext();
   
    const handleSubmit = async(e: any) => {
        e.preventDefault();
        // const res = await axios.post('/api/users', loginUser)
        // if(res.status == 200) {
            // console.log()
            LocalStorage.removeItem('userSession')
            setUser(null)
            router.push('/')
        // }
    }

    return <>
      <h1>Log Out</h1>
      <form>
        <input type="submit" onClick={handleSubmit} name="Log Out" value="Log Out" />
      </form>      
    </>;
  }