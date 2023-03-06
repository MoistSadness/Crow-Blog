import PostDetails from "../../components/PostDetails"
import PostWidget from "../../components/PostWidget"
import Categories from "../../components/Categories"
import Author from "../../components/Author"
import Comments from "../../components/Comments"
import CommentsForm from "../../components/CommentsForm"

import { getPosts, getPostDetails } from "../../services"

export default function PostLayout({ post }: any) {
    //console.log(post)
    return (
        <>
            <div className='col-span-1 lg:col-span-8'>
                <div className="bg-[color:var(--color-bg-secondary)] p-0 lg:py-8 lg:px-20 mb-8 pb-12 rounded">
                    <PostDetails post={post}/>
                    <Author author={post.author}/>
                    <CommentsForm slug={post.slug}/>
                    <Comments slug={post.slug}/>
                </div>
            </div>
            <div className='col-span-1 lg:col-span-4'>
                <div className='lg:sticky relative top-8'>
                    <PostWidget/>
                    <Categories />
                </div>
            </div>
        </>
    )
}

export async function getStaticProps({ params }: any) {
    const data = await getPostDetails(params.slug)
    return {
        props: { post: data },
    }
}

export const getStaticPaths: any = async () => {
    const posts = await getPosts()

    return {
        paths: posts.map(({ node: { slug } }:any) => ({ params: { slug } })),
        fallback: true //indicates the type of fallback
    }
}