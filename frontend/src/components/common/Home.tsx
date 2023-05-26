import { useAuth0 } from "@auth0/auth0-react";

import LoginButton from '../auth/LoginButton'
import LogoutButton from '../auth/LogouttButton'


function Home() {
  const { isAuthenticated } = useAuth0();

  return (<>
    <h1>Home</h1>

  </>);
}

export default Home;