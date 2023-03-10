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
        <div className="flex flex-col mb-4">
            <h3 className="text-xl mb-4">Join the Conversation</h3>
            <div>
                <textarea
                    className="bg-[color:var(--color-bg-primary)] text-[color:var(--color-text-primary)] p-2 rounded w-full h-20 mb-2"
                    ref={commentRef}
                    name="comment"
                    id="comment"
                    placeholder="Your Comment"
                />
            </div>
            <div className="flex flex-row space-x-4 mb-4">
                <input
                    className="grow bg-[color:var(--color-bg-primary)] text-[color:var(--color-text-primary)] p-2 rounded w-full h-10"
                    type="text"
                    ref={nameRef}
                    name="name"
                    id="comment"
                    placeholder="Name"
                />
                <input
                    className="grow bg-[color:var(--color-bg-primary)] text-[color:var(--color-text-primary)] p-2 rounded w-full h-10"
                    type="text"
                    ref={emailRef}
                    name="email"
                    id="comment"
                    placeholder="Email"
                />
            </div>
            {error && <p>There was an error!</p>}
            {/* When the comment is submitted, remove the submit button so no redundant comments can be made */}
            {success === false && <button className='button w-44 h-12 rounded-lg transition duration-500 hover:brightness-75 mb-4' onClick={success ? nothing : handleSubmit}>Submit</button>}
            {success && <div className="text-[color:var(--color-button)-md]">Comment submitted for review</div>}
        </div>
    )
}