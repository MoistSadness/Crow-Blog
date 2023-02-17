import Link from "next/link"
import moment from "moment"

export default function PostCard(post: any) {
    //console.log(post)
    return (
        <div className="bg-[color:var(--color-bg-secondary)] p-0 lg:py-8 lg:px-20 mb-8 pb-12 rounded">
            <div className="flex flex-row">
                <img src={post.author.profilePhoto.url} width='40rem' height='40rem' />
                <span>{post.author.name}</span>
            </div>
            <div className="relative object-contain h-auto">
                <img src={post.contentImg1.url} />
            </div>
            <h3>{post.title}</h3>
            <div>{moment(post.createdAt).format('MMM DD, YYYY')}</div>
            <p>{post.excerpt}</p>
            <div className="text-center">
                <Link href={`/post/${post.slug}`} >
                    <span className='button transition duration-500 transform hover:-translate-y-1 inline-block '>
                        Continue Reading
                    </span>
                </Link>
            </div>
        </div>
    )
}