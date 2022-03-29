const accountResolver = {
    Query: {
        accountsByUsername: async(_, { username }, { dataSources }) => {
            return await dataSources.accountAPI.accountsByUsername(username);
        },

        accountDetailByNickname: async(_, { nickname }, { dataSources }) => {
            return await dataSources.accountAPI.account(nickname);
        },
    },

    Mutation: {
        createAccount: async(_, { account }, { dataSources }) => {
            return await dataSources.accountAPI.createAccount(account);
        }
    }
};

module.exports = accountResolver;