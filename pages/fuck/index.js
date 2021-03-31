import {useState, useEffect} from 'react'
import {MainLayout} from '../../layouts/MainLayout.js'
import Link from 'next/link'


export default function Posts({posts: serverPost}) {
  const [posts, setPosts] = useState(serverPost)
  
  useEffect(() => {
    async function load() {
      const res = await fetch('http://localhost:4200/posts')
      const posts = await res.json()
      setPosts(posts)
    }

    if (!serverPost) return load()
  }, [])
  
  if (!posts) return <MainLayout><p>Loading...</p></MainLayout>


  return (
    <MainLayout title="Fuck Page">
      <h1>Posts Page</h1>
      <ul>
        {posts.map(post => (
          <li key={post.id}>
            <Link href={"/post/[id]"} as={`/post/${post.id}`}><a>{post.title}</a></Link>
          </li>
        ))}
      </ul>
    </MainLayout>
  )
}

Posts.getInitialProps = async ({req}) => {
  if (!req) return {posts: null}
  const res = await fetch('http://localhost:4200/posts')
  const posts = await res.json()
  return {posts}
}