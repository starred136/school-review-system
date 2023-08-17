import { useRouter } from "next/router";
import React from 'react'


export default function Posts() {
    const route = useRouter()
    const routeID = route.query.postID

  return (
    <div>post { routeID } </div>

    
  )
}
