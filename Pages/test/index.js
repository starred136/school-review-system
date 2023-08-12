import { dehydrate, QueryClient, useQuery } from '@tanstack/react-query'

export default async function getStaticProps() {
  const queryClient = new QueryClient()

  await queryClient.prefetchQuery(['posts'], getPosts)

 
  }
