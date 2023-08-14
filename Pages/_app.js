import React from 'react' 
import Document from "../components/layout";

import {
  Hydrate,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import Layout from '../components/layout';



export default function Home({ Component, pageProps }) {
  const [queryClient] = React.useState(() => new QueryClient())

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
