const { RESTDataSource } = require('apollo-datasource-rest');
const serverConfig = require('../server');

class AccountAPI extends RESTDataSource {
    
    constructor() {
        super();
        this.baseURL = serverConfig.account_api_url;
    }

    async createAccount(account) {
        account = new Object(JSON.parse(JSON.stringify(account)));
        return await this.post('/accounts', account);
    }

    async accountsByUsername(username) {
        return await this.get(`/accountuser/${username}`);
    }

    async account(nickname) {
        return await this.get(`/accounts/${nickname}`);
    }
                
}

module.exports = AccountAPI;

