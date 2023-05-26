import { Outlet, Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

import LoginButton from '../auth/LoginButton'
import LogoutButton from '../auth/LogouttButton'

function Layout() {
  const { isAuthenticated } = useAuth0();
  return (
    <>
      <nav>
        {isAuthenticated && <Link to="/">Home</Link> } &nbsp;
        {isAuthenticated && <Link to="/profile">Profile</Link> } &nbsp;
        {isAuthenticated && <Link to="/users">Users</Link> } &nbsp;
        {!isAuthenticated && <Link to="/signup">Sign Up</Link> } &nbsp;
        {isAuthenticated ? <LogoutButton /> : <LoginButton />}
      </nav>

      <Outlet />
    </>
  )
    ;
}

export default Layout;