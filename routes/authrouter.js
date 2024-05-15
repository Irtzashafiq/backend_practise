const route = require("express").Router();

const {login,logout} = require("../controllers/authcontroller");
const{getUser, createUser,updateUser,deleteUser} = require("../controllers/userController");

route.get("/login",login)
route.get("/logout",logout)
route.get("/getUser" , getUser)
route.patch("/updateUser",updateUser)
route.post("/createUser",createUser)
route.delete("/deleteUser",deleteUser)

module.exports = route;