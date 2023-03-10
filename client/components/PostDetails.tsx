import moment from "moment"
import Comments from "./Comments";
import CommentsForm from "./CommentsForm";

export default function PostDetails({ post }: any) {
    //console.log(post)
    /** For now, the only content that will be supported is Text and images.
     */

    function viewContent() {
        return post.content.raw.children.map((typeObj: any, index: Number) => {
            //console.log(typeObj)

            // Using a switch/case to make it easier to add more types in the future.
            switch (typeObj.type) {
                case 'image':
                    return (
                        <img className="rounded mb-4" key={typeObj.src} src={typeObj.src} />
                    )
                    break;
                case 'paragraph':
                    return typeObj.children.map((paragraph: any, index: Number) => (
                        <p className="font-light mb-4" key={paragraph.text}>{paragraph.text}</p>
                    ))
                    break;
                default:
                    console.log("No text Found")
                    break;
            }
        })
    }

    return (
        <div className="">
            <section className="flex flex-col">
                <span className="text-2xl mb-2">{post.title}</span>
                <div className="text-sm self-end mx-4 mb-4">{moment(post.createdAt).format('MMM DD, YYYY')}</div>
            </section>
            <section>
                <img className="rounded mb-4" src={post.featuredImage.url} />
                <span>{viewContent()}</span>
            </section>
        </div>
    )
}