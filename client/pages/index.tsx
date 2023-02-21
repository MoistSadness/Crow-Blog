import type { NextPage } from 'next'

import Image from 'next/image'

import { getPosts } from '../services/index.js'
import PostCard from '../components/PostCard'
import PostWidget from '../components/PostWidget'
import Categories from '../components/Categories'

export default function Home({ posts }: any) {
  /*
  function viewPosts() {
    console.log(posts)
    return posts.map((post: any) => (
      <ul key={post.node.author.id}>
        <li>{post.node.author.name}</li>
        <li>{post.node.author.bio}</li>
      </ul>
    ))
  }
  */


  return (
    <>
      <div className='col-span-1 lg:col-span-8'>
        {posts.map((post: any, index: number) => <PostCard key={index} {...post.node} />)}
      </div>
      <div className='col-span-1 lg:col-span-4'>
        <div className='lg:sticky relative top-8'>
          <PostWidget />
          <Categories />
        </div>
      </div>
    </>
  )
}



// Get posts outside of the component instead of using useEffect()
export async function getStaticProps() {
  const posts = (await getPosts()) || []    // If there is no response, set posts to an empty array
  return {
    props: { posts },
  }
}