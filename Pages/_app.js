import React from 'react' 
import Document from "../components/layout";
import Layout from '../components/layout';
import {
  dehydratedState,
  Hydrate,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'




export default function Home({ Component, pageProps }) {
  const [queryClient] = React.useState(() => new QueryClient())

  // const queryClient = new QueryClient()
  
  
  return (
    <> 
    <QueryClientProvider client={queryClient}>
        {/* <Layout> */}
        <Hydrate state={pageProps.dehydratedState}>
          <Component {...pageProps} />
          </Hydrate>
        {/* </Layout>  */}
    </QueryClientProvider>
    </>
  )
}
