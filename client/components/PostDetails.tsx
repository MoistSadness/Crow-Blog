import moment from "moment"

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
                        <img src={typeObj.src} />
                    )
                    break;
                case 'paragraph':
                    return typeObj.children.map((paragraph: any) => (
                        <p>{paragraph.text}</p>
                    ))
                    break;
                default:
                    console.log("No text Found")
                    break;
            }
        })
    }

    return (
        <div>
            <section>
                <span>{post.title}</span>
                <div>{moment(post.createdAt).format('MMM DD, YYYY')}</div>
            </section>
            <section>
                <img src={post.featuredImage.url} />
                <span>{viewContent()}</span>
            </section>

        </div>
    )
}