import gql from "graphql-tag";

export const typeDefs = gql`
  type User {
    id: ID!
    name: String!
    username: String!
    password: String!
    profile_pic: String
  }

  type Post {
    id: ID!
    user_id: ID!
    title: String!
    description: String
    post_image: String!
    datetime: String
  }

  type Bookmark {
    id: ID!
    user_id: ID!
    post_id: ID!
  }

  type Comment {
    id: ID!
    user_id: ID!
    post_id: ID!
  }

type Query {
  posts: [Post]
  comments: [Comment]
  users: [User]
}
  
`