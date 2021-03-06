const { RESTDataSource } = require('apollo-datasource-rest');
const serverConfig = require('../server');

class UserAPI extends RESTDataSource {
    
    constructor() {
        super();
        this.baseURL = serverConfig.user_api_url;
    }
        
    async createUser(user) {
        user = new Object(JSON.parse(JSON.stringify(user)));
        return await this.post(`/user/`, user);
    }

    async userDetailById(id) {
        return await this.get(`/user/${id}/`);
    }
    
    async userRequest(credentials) {
        credentials = new Object(JSON.parse(JSON.stringify(credentials)));
        return await this.post(`/login/`, credentials);
    }

    async refreshToken(token) {
        token = new Object(JSON.parse(JSON.stringify({ refresh: token })));
        return await this.post(`/refresh/`, token);
    }
                
}

module.exports = UserAPI;
