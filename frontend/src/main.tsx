// import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { Auth0Provider } from "@auth0/auth0-react";

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>,
  <Auth0Provider
    domain="dev-czl7mhj8tf3voptc.us.auth0.com"
    clientId="4CDR6bgYlcdMJPbT9DMIYeRmiFosc5kL"
    authorizationParams={{
      redirect_uri: window.location.origin,
      audience: "https://dev-czl7mhj8tf3voptc.us.auth0.com/api/v2/",
      scope: "read:current_user update:current_user_metadata"
    }}
  >
    <App />
  </Auth0Provider>,
)
