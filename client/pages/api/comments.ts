import type { NextApiRequest, NextApiResponse } from 'next'
import { GraphQLClient, gql } from 'graphql-request'

const HygraphAPI = process.env.NEXT_PUBLIC_HYGRAPH_ENDPOINT!
const HygraphToken = process.env.HYGRAPH_TOKEN

type Data = {
    name: string,
    email: string,
    comment: string,
    slug: string,
}

export default async function comments(req: NextApiRequest, res: NextApiResponse<Data>) {
    //res.status(200).json({ name: 'John Doe' })
    const graphQLClient: any = new GraphQLClient(HygraphAPI, {
        headers: {
            authorization: `Bearer ${HygraphToken}`
        }
    })

    const query = gql`
        mutation CreateComment($name: String!, $email: String!, $comment: String!, $slug: String!){
            createComment(
                data: {
                    name: $name, 
                    email: $email, 
                    comment: $comment, 
                    post: {
                        connect: {slug: $slug},
                    },
                }
            ) {id}
        }
    `
    // req.body already contains all the properties we need to send the query

    try {
        const result = await graphQLClient.request(query, req.body)
        return res.status(200).send(result)
    } catch (error:any) {
        console.log(error)
        return res.status(500).send(error)
    }
}