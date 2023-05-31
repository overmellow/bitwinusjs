import Guard from "@/components/guard";
import Layout from "@/components/layout";
// import Layout from "@/layout";
import { UserContextProvider } from "@/contexts/user";
import type { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <UserContextProvider>
      <Layout>
        <Guard>
          <Component {...pageProps} />  
        </Guard>          
      </Layout>  
    </UserContextProvider>    
  )
  
}
