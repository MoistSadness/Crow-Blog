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
              featuredImage {
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

export const getRecentPosts = async () => {
  const query = gql`
    query GetPostDetails(){
      posts(
        orderBy:createdAt_ASC
        last: 3
      ){
        title
        slug
        featuredImage {
          url
        }
        createdAt
      }
    }
  `

  const result = await request(graphqlAPI, query)
  return result.posts
}

export const getSimilarPosts = async (category, slug) => {
  const query = gql`
    query GetPostDetails($slug: String!, $categories: [String!]){
      posts(
        where: {slug_not: $slug, AND: {categories_some: {slug_in: $categories}}}
        last: 3
      ){
        title
        slug
        featuredImage {
          url
        }
        createdAt
      }
    }
  
  `
  const result = await request(graphqlAPI, query)
  return result.posts
}

export const getCategories = async () => {
  const query = gql`
    query GetCategories {
      categories {
        title
        slug
      }
    }
  `
  const result = await request(graphqlAPI, query)
  return result.categories
}

export const getPostDetails = async (slug) => {
  const query = gql`
    query GetPostDetails($slug: String!){
      post(where: {slug: $slug}) {
        author {
          bio
          id
          name
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
        id
        title
        slug
        featuredImage {
          url
        }
        content {
          raw
        }
      }
    }
  `
  const result = await request(graphqlAPI, query, { slug })
  return result.post
}