import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'

import { getPosts } from '../services/index.js'

export default function Home({posts}: any) {
  function viewPosts() {

    console.log(posts)
    
    return posts.map((post: any) => (
      <ul>
        <li>{post.node.author.name}</li>
        <li>{post.node.author.bio}</li>
      </ul>
    ))
    
  }

  return (
    <div>
      <Head>
        <title>Blog</title>
      </Head>

      <div></div>
      {viewPosts()}
    </div>
  )
}



// Get posts outside of the component instead of using useEffect()
export async function getStaticProps() {
  const posts = (await getPosts()) || []    // If there is no response, set posts to an empty array
  return {
    props: { posts },
  }
}