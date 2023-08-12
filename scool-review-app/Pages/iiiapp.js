
import About from "./about";
import Document from "./_document";
import {
  Hydrate,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'

// Import css


export default function Home({ Component, pageProps }) {

  const [queryClient] = React.useState(() => new QueryClient())

  return (
    <> 
    <QueryClientProvider client={queryClient}>
      <Document>
        <Component {...pageProps} />
      </Document> 
      </QueryClientProvider>
    </>
  )
}
