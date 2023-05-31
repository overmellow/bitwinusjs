function LoggedinUser({ userSession }: any) {
    return (<>
        {
            userSession && userSession.email
        }
    </>  );
}

export default LoggedinUser;