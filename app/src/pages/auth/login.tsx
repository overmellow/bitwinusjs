import axios from "axios";
import { useState } from "react";
import { useRouter } from 'next/router';
import { useUserContext } from "@/contexts/user";
import LocalStorage from "@/utils/LocalStorage";

export default function Login() {
    const router = useRouter();
    const { setUser }: any = useUserContext();

    // console.log(useUserContext())
    const initialLogin = {
        email: 'jack@mail.com',
        password: '1000'
    }

    const [loginUser, setLoginUser] = useState(initialLogin);   

    const handleChange = (e: any) => {
        setLoginUser({...loginUser, [e.target.name]: e.target.value})
    }

    const handleSubmit = async(e: any) => {
        e.preventDefault();
        const res = await axios.post('/api/auth/login', loginUser)
        if(res.status == 200) {
            // console.log()
            LocalStorage.setItem('userSession', res.data.user);
            setUser(res.data.user)
            router.push('/')
        }
    }

    return <>
      <h1>Login</h1>
      <form>
        Email: <input type="email" name="email" value={loginUser.email} onChange={handleChange} />
        <br /><br />
        Password: <input type="password" name="password" value={loginUser.password} onChange={handleChange} />
        <br /><br />
        <input type="submit" onClick={handleSubmit} name="Login" />
      </form>      
    </>;
  }