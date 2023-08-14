import { useQueries, QueryClient, dehydrate, useQuery } from "@tanstack/react-query"
import React from "react"

export const getStaticProps = async () => {
  const queryClient = new QueryClient()
   
  
  const posts =   await fetch('https://jsonplaceholder.typicode.com/users').then(res => res.json()).then(res => res)

  console.log("posts", posts)


   return { props: { posts } }


}

const Ninja = (props) => {
  const { data } = useQuery({
    queryKey: ['posts'],
    queryFn: fetch('https://jsonplaceholder.typicode.com/users').then(res => res.json()).then(res => res),
    initialData: props.posts,
  })

  console.log("data from post", data)
  return(
    <div>
      <h1>Users</h1>
    </div>
  )
}

export default Ninja