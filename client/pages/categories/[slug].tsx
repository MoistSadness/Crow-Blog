
import { getCategories, getPostsInCategory } from "../../services"
import PostCard from "../../components/PostCard"

export default function PostLayout({ post }: any) {
    console.log(post)

    function displayPosts() {
        return post.map((post: any, index: number) => (
            <div key={index} className='col-span-1 lg:col-span-8'>
                <PostCard {...post.node} />
            </div>
        ))
    }
    return (
        <>
            {displayPosts()}
        </>
    )
}

export async function getStaticProps({ params }: any) {
    const data = await getPostsInCategory(params.slug)
    return {
        props: { post: data },
    }
}

export const getStaticPaths: any = async () => {
    const posts = await getCategories()

    return {
        paths: posts.map(({ slug }: any) => ({ params: { slug } })),
        fallback: true //indicates the type of fallback
    }
}
