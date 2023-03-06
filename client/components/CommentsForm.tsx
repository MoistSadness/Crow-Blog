import { useState, useEffect, useRef } from "react"
import { submitComment } from "../services"

export default function CommentsForm({ slug }: any) {
    const [error, setError] = useState(false)
    const [localStorage, setLocalStorage] = useState(null)
    const [success, setSuccess] = useState(false)
    const commentRef = useRef(null)
    const nameRef = useRef(null)
    const emailRef = useRef(null)
    const storeRef = useRef(null)

    function nothing() { }    // Empty function that doesn't do anyting so I can use ternarys

    function handleSubmit() {
        // Validate that the forms have content in them
        // Destructure the useRef() values into variables

        setError(false)

        const { value: comment }: any = commentRef.current
        const { value: name }: any = nameRef.current
        const { value: email }: any = emailRef.current

        if (!comment || !name || !email) {
            setError(true)
            return
        }

        const commentSubmission = { name, email, comment, slug }

        try {
            submitComment(commentSubmission)
                .then((res) => {
                    setSuccess(true)
                })
        } catch (error: any) {
            setError(true)
            return console.log(error.message)
        }

        console.log("Submitted!")
        setSuccess(true)
    }

    return (
        <div>
            <h3>Join the Conversation</h3>
            <div>
                <textarea
                    ref={commentRef}
                    name="comment"
                    id="comment"
                    placeholder="Your Comment"
                />
            </div>
            <div>
                <input
                    type="text"
                    ref={nameRef}
                    name="name"
                    id="comment"
                    placeholder="Name"
                />
                <input
                    type="text"
                    ref={emailRef}
                    name="email"
                    id="comment"
                    placeholder="Email"
                />
            </div>
            {error && <p>There was an error!</p>}
            {/* When the comment is submitted, remove the submit button so no redundant comments can be made */}
            {success === false && <button onClick={success ? nothing : handleSubmit}>Submit</button>}
            {success && <div>Comment submitted for review</div>}
        </div>
    )
}