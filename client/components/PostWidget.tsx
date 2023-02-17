import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import moment from "moment"
import { getSimilarPosts, getRecentPosts } from "../services"

// Define a type for props
interface Props {
    category: String,
    slug: Array<{}>
}

export default function PostWidget({ category, slug }: Props) {
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
            <Link href={`/post/${post.slug}`} key={post.createdAt} className="flex flex-row">
                <div className="h-20 w-20 relative object-cover">
                    <Image src={post.contentImg1.url} className="object-cover" alt={post.title} fill sizes="20vw" />
                </div>
                <div className="flex flex-row">{post.title}</div>
            </Link>
        ))
    }

    return (
        <div className="bg-[color:var(--color-bg-secondary)] p-0 lg:p-8 mb-8 pb-12 rounded">
            <h3>{slug ? 'Related' : 'Recent'}Posts</h3>
            <br />
            <>
                {viewRecentPosts()}
            </>
        </div>
    )
}