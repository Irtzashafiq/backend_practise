
const sequelize  = require("../bin/dbconnection");
const users = require("./tables/users");


const models = {users}


const db = {};
db.sequelize = sequelize;
sequelize.models = models;

module.exports = {db, models}