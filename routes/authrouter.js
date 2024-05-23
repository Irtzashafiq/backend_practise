const route = require("express").Router();
const {login,logout} = require("../controllers/authcontroller");

route.get("/login",login)
route.get("/logout",logout)

module.exports = route;