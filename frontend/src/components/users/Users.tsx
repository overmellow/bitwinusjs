import axios from "axios";
import { useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";

function Users() {
  const { getAccessTokenSilently } = useAuth0();
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const getUsersData = async () => {
      const domain = "dev-czl7mhj8tf3voptc.us.auth0.com";
        
      try {

        const accessToken = await getAccessTokenSilently({
          authorizationParams: {
            audience: `https://${domain}/api/v2/`,
            scope: "read:current_user",
          },
        });

        axios.get('http://localhost:3000/api/users/all', {
            headers: {
              Authorization: `Bearer ${accessToken}`,
              },
          })
          .then(res => {
            setUsers(res.data.users);
          }).catch(error => {
            console.log(error)
          })
        } 
        catch (e: any) {
          console.log(e.message);
        }          
      }
      getUsersData()        
  }, []);
  return (<>
    <h2>Users</h2>
    <ul>
      {
        users.map((u: any) => {
          return <li key={u._id}>{u.name}, {u.email}</li>
        })
      }
    </ul>
  </>);
}

export default Users;