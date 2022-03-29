const { RESTDataSource } = require('apollo-datasource-rest');
const serverConfig = require('../server');

class PostAPI extends RESTDataSource {
    
    constructor() {
        super();
        this.baseURL = serverConfig.post_api_url;
    }
        
    async createPost(post) {
        post = new Object(JSON.parse(JSON.stringify(post)));
        return await this.post('/post', post);
    }

    async postByAccount(account) {
        return await this.get(`/post/${account}`);
    }

    async posts(account) {
        return await this.get(`/posts`);
    }
                
}

module.exports = PostAPI;
