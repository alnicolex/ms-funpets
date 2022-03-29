const { gql } = require('apollo-server');

const accountTypeDefs = gql `
    
    type Account {
        nickname: String!
        nombre: String!
        fechaNacimiento: String
        tipo: String
        description: String
        username: String!
    } 

    input AccountInput {
        nickname: String!
        nombre: String!
        fechaNacimiento: String
        tipo: String
        description: String
        username: String!
    } 
   
    type AccountDetail {
        nickname: String!
        nombre: String!
        fechaNacimiento: String!
        tipo: String!
        description: String!
        username: String!
    }

    extend type Mutation {
        createAccount(account :AccountInput!): Account
    }

    extend type Query {
        accountsByUsername(username: String!): [Account!]
        accountDetailByNickname(nickname: String!): AccountDetail!
    }       
       
`;

module.exports = accountTypeDefs;