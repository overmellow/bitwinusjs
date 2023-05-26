import { useState } from "react";
import axios from 'axios';

function Signup() {
  let initialNewUser = {
    email: '',
    password: ''
  }
  const [newUser, setNewUser] = useState(initialNewUser);

  const handleChange = (e: any) => {
    setNewUser({...newUser, [e.target.name]: e.target.value})
    console.log(newUser)
  }

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    await axios.post("http://localhost:3000/signup", newUser)
  }

  return (<>
    <h1>Sign Up</h1>
    <form onSubmit={handleSubmit}>
      Email: <input type="text" name="email" value={newUser.email} onChange={handleChange} />
      <br /><br />
      Password: <input type="password" name="password" value={newUser.password} onChange={handleChange} />
      <br /><br />
      <input type="submit" value="Add User" />
    </form>
  </>  );
}

export default Signup;