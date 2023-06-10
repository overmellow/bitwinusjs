import Guard from "@/components/guard";
import Layout from "@/components/layout";
// import Layout from "@/layout";
import { UserContextProvider } from "@/contexts/user";
import type { AppProps } from 'next/app';

import { Providers } from "@/redux/provider";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Providers>
      <UserContextProvider>
        <Layout>
          <Guard>
            <Component {...pageProps} />  
          </Guard>          
        </Layout>  
      </UserContextProvider>    
    </Providers>
  )
  
}
