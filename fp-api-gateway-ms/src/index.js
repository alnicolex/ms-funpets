const { ApolloServer } = require('apollo-server');

const typeDefs = require('./typeDefs');
const resolvers = require('./resolvers');
const UserAPI = require('./dataSources/user_api');
const AccountAPI = require('./dataSources/account_api');
const PostAPI = require('./dataSources/post_api');
const authentication = require('./utils/authentication');

const server = new ApolloServer({
    context: authentication,
    typeDefs,
    resolvers,
    dataSources: () => ({
        userAPI: new UserAPI(),
        accountAPI: new AccountAPI(),
        postAPI: new PostAPI(),
    }),
    introspection: true,
    playground: true
});

server.listen(process.env.PORT || 4000).then(({ url }) => {
    console.log(`🚀  Server ready at ${url}`);
});