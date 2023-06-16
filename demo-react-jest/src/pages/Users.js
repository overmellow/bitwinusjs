import { useEffect } from "react";
import myPromise from "./myPromise";

function Users() {
    useEffect(() => {
        myPromise('success')
        .then((result) => {
            console.log(result); // 'Data fetched successfully'
        })
        .catch((error) => {
            console.log(error); // 'An error occurred'
        });
    })
    return (<>
        Users
    </>  );
}

export default Users;