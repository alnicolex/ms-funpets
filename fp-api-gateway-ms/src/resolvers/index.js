const userResolver = require('./user_resolver');
const accountResolver = require('./account_resolver');
const postResolver = require('./post_resolver');

const lodash = require('lodash');

const resolvers = lodash.merge(userResolver, accountResolver, postResolver);

module.exports = resolvers;