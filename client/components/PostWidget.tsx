import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import moment from "moment"
import { getSimilarPosts, getRecentPosts } from "../services"

// Define a type for props
/*
interface Props {
    category: String,
    slug: Array<{}>
}
*/

export default function PostWidget({ category, slug }: any) {
    const [relatedPosts, setRelatedPosts] = useState<any[]>([])
    //console.log(relatedPosts)

    useEffect(() => {
        /** If there is a slug, it means the user is viewing an article, and the UI should be showing posts similar to that post
         * Otherwise, it should be showing recent posts
         */
        if (slug) {
            getSimilarPosts(category, slug).then((result: any) => setRelatedPosts(result))
        } else {
            getRecentPosts().then((result: any) => setRelatedPosts(result))
        }
    }, [])

    function viewRecentPosts() {
        return relatedPosts.map((post) => (
            <Link href={`/post/${post.slug}`} key={post.createdAt} className="flex flex-row space-x-8 mb-4">
                <div className="h-16 w-16 relative object-cover">
                    <Image src={post.featuredImage.url} className="object-cover" alt={post.title} fill sizes="20vw" />
                </div>
                <div className="flex flex-row">{post.title}</div>
            </Link>
        ))
    }

    return (
        <div className="bg-[color:var(--color-bg-secondary)] p-4 lg:py-8 lg:px-10 mb-8 pb-12 rounded">
            <h3 className="text-lg mb-4">{slug ? 'Related ' : 'Recent '}Posts</h3>
            <>
                {viewRecentPosts()}
            </>
        </div>
    )
}