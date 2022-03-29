const { gql } = require('apollo-server');

const userTypeDefs = gql `
    type Tokens {
        refresh: String!
        access: String!
    }
    
    type Access {
        access: String!
    }
    
    input CredentialsInput {
        username: String!
        password: String!
    }
    
    input SignUpInput {
        username: String!
        password: String!
        name: String!
        last_name: String
        email: String
        phone: String
        description: String
        birthdate: String
    }
 
    type UserDetail {
        id: Int!
        username: String!
        password: String!
        name: String!
        last_name: String!
        email: String!
        phone: String!
        description: String!
        birthdate: String!
        creationdate: String!
    }
    
    type Mutation {
        signUpUser(userInput :SignUpInput): Tokens!
        logIn(credentials: CredentialsInput!): Tokens!
        refreshToken(refresh: String!): Access!
    }
    
    type Query {
        userDetailById(id: Int!): UserDetail!
    }
`;

module.exports = userTypeDefs;
