//Se llama al typedef (esquema) de cada submodulo
const userTypeDefs = require('./user_type_defs');
const accountTypeDefs = require('./account_type_defs');
const postTypeDefs = require('./post_type_defs')

//Se unen
const schemasArrays = [userTypeDefs, accountTypeDefs, postTypeDefs];

//Se exportan
module.exports = schemasArrays;
