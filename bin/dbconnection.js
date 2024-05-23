require("dotenv").config();
const {Sequelize} = require("sequelize");

var sequelize = new Sequelize({
    database: process.env.DB_NAME,
    port: process.env.DB_PORT,
    host: process.env.DB_HOST,
    username : process.env.DB_USERNAME,
    password : process.env.DB_PASSWORD,
    dialect: process.env.DB_DIALECT
})

sequelize.authenticate().then(()=>{
    console.log("Successfully Connected!!")
}).catch((error)=>{
    console.log("Unable to Connect", error.message )
});

module.exports = sequelize;