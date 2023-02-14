import { request, gql } from 'graphql-request'

const graphqlAPI = process.env.NEXT_PUBLIC_HYGRAPH_ENDPOINT;

export const getPosts = async () => {
    const query = gql`
    query MyQuery {
        postsConnection {
          edges {
            node {
              author {
                bio
                name
                id
                profilePhoto {
                  url
                }
              }
              categories {
                id
                title
                slug
              }
              createdAt
              excerpt
              title
              slug
              contentImg1 {
                url
              }
              id
            }
          }
        }
      }
    `

    const result = await request(graphqlAPI, query)
    return result.postsConnection.edges
}