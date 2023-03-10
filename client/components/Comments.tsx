import { useState, useEffect } from "react"
import moment from "moment"
import parse from 'html-react-parser'

import { getComments } from "../services"

export default function Comments({ slug }: any) {
    const [comments, setComments] = useState<any[]>([])
    console.log(comments)

    useEffect(() => {
        getComments(slug)
            .then((comments) => {
                setComments(comments)
            })
    }, [])

    function showComments() {
        return comments.map(comment => (
            <div className="flex flex-col" key={comment.name}>
                    <div>{comment.name}</div>
                <div className="font-light mb-4">{comment.comment}</div>
                <div className="self-end">
                    <div className="text-sm">{moment(comment.createdAt).format('MM DD, YYYY')}</div>
                </div>
            </div>
        )
        )
    }

    return (
        <>
            {showComments()}
        </>
    )
}