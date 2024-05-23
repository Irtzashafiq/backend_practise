const route = require("express").Router();

const {getUser,createUser,updateUser,deleteUser,getAllUsers} = require("../controllers/userController");


route.get("/getUser",getUser)
route.post("/createUser",createUser)
route.put("/updateUser",updateUser)
route.delete("/deleteUser",deleteUser)
route.get("/getAll", getAllUsers)

module.exports = route;

