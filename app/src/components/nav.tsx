import Link from 'next/link'

function Nav() {
    return (
        <nav>
            <Link href={"/"}>Home</Link> &nbsp;
            <Link href={"/profile"}>Profile</Link> &nbsp;
            <Link href={"/users"}>Users</Link> &nbsp;
            <Link href={"/login"}>Login</Link> &nbsp;  
            <Link href={"/logout"}>Log Out</Link> &nbsp;  
        </nav>
      );
}

export default Nav;