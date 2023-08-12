
import Document from "./_document";
import {
  Hydrate,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'



export default function Home({ Component, pageProps }) {
  const [queryClient] = React.useState(() => new QueryClient())

  return (
    <> 
    <QueryClientProvider client={queryClient}>
        <Document>
        <Hydrate state={pageProps.dehydratedState}>
          <Component {...pageProps} />
          </Hydrate>
        </Document> 
    </QueryClientProvider>
    </>
  )
}
