import Link from 'next/link'

function Nav({ userSession }: any) {
    return (
        <nav>
            <Link  href={"/"}>Home</Link> &nbsp;
        {userSession &&
            <>
            <Link href={"/profile"}>Profile</Link> &nbsp;
            <Link href={"/users"}>Users</Link> &nbsp;
            <Link href={"/contracts"}>Contracts</Link> &nbsp;
            <Link href={"/admin/contracts"}>All Contracts</Link> &nbsp;
            </>
        }
        {userSession ? (
            <>
              <Link href="/auth/logout">Log Out</Link>&nbsp;
            </>
          ) : (
            <>
              <Link href="/auth/signup">Sign Up</Link>&nbsp;
              <Link href="/auth/login">Login</Link>&nbsp;
            </>
          )}                     
        </nav>
      );
}

export default Nav;