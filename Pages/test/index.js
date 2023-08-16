import { useQueries, QueryClient, dehydrate, useQuery } from "@tanstack/react-query"
import React from "react"

export const getStaticProps = async () => {

  const posts =   await fetch('https://jsonplaceholder.typicode.com/users').then(res => res.json())
  console.log("posts", posts)

   return { props: { posts } }

}

const Ninja = (props) => {
  const { data } = useQuery({
    queryKey: ['posts'],
    queryFn: getStaticProps,
    initialData: props.posts,
  })

  console.log("data from post", data)
  return(
    <div>
      <h1>Users</h1>
      { data.map(user => (<h2>{ user.name }</h2>)) }
    </div>
  )
}

export default Ninja