const { gql } = require('apollo-server');

const postTypeDefs = gql `

    type Post {
        account: String!
        text: String
        image_ref: String
        video_ref: String
        git_ref: String
        dateCreation: String!
    } 

    input PostInput {
        account: String!
        text: String!
        image_ref: String!
        video_ref: String!
        git_ref: String!
    } 

    extend type Mutation {
        createPost(post :PostInput!): Post
    }

    extend type Query {
        getPostByAccount(account: String!): [Post]
        getPosts(account: String): [Post]
    }   

`;

module.exports = postTypeDefs;