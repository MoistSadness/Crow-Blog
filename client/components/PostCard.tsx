import Link from "next/link"
import moment from "moment"

export default function PostCard(post: any) {
    //console.log(post)
    return (
        <div className="bg-[color:var(--color-bg-secondary)] p-4 lg:py-8 lg:px-20 mb-8 pb-12 rounded">
            <div className="flex flex-row items-center space-x-2 mb-4">
                <img src={post.author.profilePhoto.url} width='40rem' height='40rem' />
                <span>{post.author.name}</span>
            </div>
            <div className="relative object-contain h-auto mb-4">
                <img className="rounded" src={post.featuredImage.url} />
            </div>
            <h3 className="text-2xl mb-2">{post.title}</h3>
            <p className="font-light mb-4">{post.excerpt}</p>
            <div className="flex flex-col text-sm">
                <div className="self-end mx-4 mb-4">
                    {moment(post.createdAt).format('MMM DD, YYYY')}
                </div>
            </div>
            <div className="text-center">
                <Link href={`/post/${post.slug}`} >
                    <button className='button w-44 h-12 rounded-lg transition duration-500 transform hover:-translate-y-1 inline-block hover:brightness-75'>
                        Continue Reading
                    </button>
                </Link>
            </div>
        </div>
    )
}