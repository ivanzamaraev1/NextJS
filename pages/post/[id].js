import {useState, useEffect} from 'react'
import {MainLayout} from '../../layouts/MainLayout'
import Link from 'next/link'
import {useRouter} from 'next/router'



export default function Post({post: serverPost}) {
  const [post, setPost] = useState(serverPost)
  const router = useRouter()

  useEffect(() => {
    async function load() {
      const res = await fetch(`http://localhost:4200/posts/${router.query.id}`)
      const data = await res.json()
      setPost(data)
    }
    if (!serverPost) return load()
  }, [])

  if (!post) return <MainLayout><p>Loading...</p></MainLayout>


  return(
    <MainLayout>
      <h1>{post.title}</h1>
      <hr></hr>
      <p>{post.body}</p>
      <Link href={'/fuck'}><a>Back to all posts</a></Link>
    </MainLayout>
  )
}

Post.getInitialProps = async ({query, req}) => {
  if (!req) return {post:null}

  const res = await fetch(`http://localhost:4200/posts/${query.id}`)
  const post = await res.json()
  return {post}
}
