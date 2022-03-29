const postResolver = {
    
    Query: {
        getPostByAccount: async(_, { account }, { dataSources }) => {
            return await dataSources.postAPI.postByAccount(account);
        },

        getPosts: async(_, { account }, { dataSources }) => {
            return await dataSources.postAPI.posts(account);
        },
    },
    
    Mutation: {
        createPost: async(_, { post }, { dataSources }) => {
            return await dataSources.postAPI.createPost(post);
        }
    }
};

module.exports = postResolver;