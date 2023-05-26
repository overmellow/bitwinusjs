import { useAuth0 } from "@auth0/auth0-react";
import {useEffect, useState} from "react";

function Profile() {
  const { user, isAuthenticated, isLoading, getAccessTokenSilently } = useAuth0();

  const [userMetadata, setUserMetadata] = useState(null);

  useEffect(() => {
    const getUserMetadata = async () => {
      const domain = "dev-czl7mhj8tf3voptc.us.auth0.com";
  
      try {
        const accessToken = await getAccessTokenSilently({
          authorizationParams: {
            audience: `https://${domain}/api/v2/`,
            scope: "read:current_user",
          },
        });
        console.log(accessToken)
        const userDetailsByIdUrl = `https://${domain}/api/v2/users/${user?.sub}`;
  
        const metadataResponse = await fetch(userDetailsByIdUrl, {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        });
  
        // const { user_metadata } = await metadataResponse.json();
        const user_metadata = await metadataResponse.json();
        setUserMetadata(user_metadata);        
      } catch (e: any) {
        console.log(e.message);
      }
    };
  
    getUserMetadata();
  }, [getAccessTokenSilently, user?.sub]);

  if (isLoading) {
    return <div>Loading ...</div>;
  }


  return (
    isAuthenticated && (
      <div>
        <img src={user?.picture} alt={user?.name} />
        <h2>{user?.name}</h2>
        <p>{user?.email}</p>
        <pre>
        {userMetadata ? (
          <pre>{JSON.stringify(userMetadata, null, 2)}</pre>
        ) : (
          "No user metadata defined"
        )}
        </pre>        
      </div>
    )
  );
};

export default Profile;