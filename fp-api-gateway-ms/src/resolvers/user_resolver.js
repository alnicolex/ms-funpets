const usersResolver = {

    Query: {
        userDetailById: async(_, { id }, { dataSources, userIdToken }) => {
            return await dataSources.userAPI.userDetailById(id);
        },
    },

    Mutation: {
        signUpUser: async(_, { userInput }, { dataSources }) => {
            return await dataSources.userAPI.createUser(userInput);
        },

        logIn: (_, { credentials }, { dataSources }) =>
            dataSources.userAPI.userRequest(credentials),
        
        refreshToken: (_, { refresh }, { dataSources }) =>
            dataSources.userAPI.refreshToken(refresh),
        
    }

}

module.exports = usersResolver;
