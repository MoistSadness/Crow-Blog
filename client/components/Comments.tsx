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
            <div key={comment.name}>
                <div>{comment.comment}</div>
                <div>
                    <div>{comment.name}</div>
                    <div>{moment(comment.createdAt).format('MM DD, YYYY')}</div>
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