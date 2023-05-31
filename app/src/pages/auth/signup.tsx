import axios from "axios";
import { useState } from "react";
import { useRouter } from 'next/router';
import { useUserContext } from "@/contexts/user";

function Signup() {
    const router = useRouter();
    const { setUser }: any = useUserContext();
    // console.log(useUserContext())
    const initialLogin = {
        name: '',
        email: '',
        password: ''
    }

    const [signupUser, setSignupUser] = useState(initialLogin);   

    const handleChange = (e: any) => {
        setSignupUser({...signupUser, [e.target.name]: e.target.value})
    }

    const handleSubmit = async(e: any) => {
        e.preventDefault();
        const res = await axios.post('/api/auth/signup', signupUser)
        if(res.status == 200) {
            // console.log()
            // setUser(res.data.user)
            router.push('/')
        }
    }

    return <>
      <h1>Sign Up</h1>
      <form>
        Email: <input type="email" name="email" value={signupUser.email} onChange={handleChange} />
        <br /><br />
        Password: <input type="password" name="password" value={signupUser.password} onChange={handleChange} />
        <br /><br />
        <input type="submit" onClick={handleSubmit} name="Sign Up" />
      </form>      
    </>;
}

export default Signup;