import { useUserContext } from "@/contexts/user";

function LoggedinUser() {
    const { user }: any = useUserContext();
    
    return (<>
        {
            user && user.email
        }
    </>  );
}

export default LoggedinUser;