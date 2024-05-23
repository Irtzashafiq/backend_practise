const { hash } = require("bcryptjs");
const userModel = require("../models/userModel");
const { v4: uuid } = require("uuid");

module.exports = {
  createUser: async (body) => {
    
    try {
      body.password = await hash(body.password, 10);
      
      delete body.confirmPassword;
      const isUser = await userModel.getUser(false, body.userName);
      
      if (isUser.error || isUser.response) {
        return {
          error: "User Already Existed",
        };
      }
      body.password = await hash(body.password, 10);
      body.userId = uuid();
      

      const user = await userModel.createUser(body);
      if (user.error) {
        return {
          error: user.error,
        };
      }
      
      delete user.response.dataValues.password;
      return {
        response: user.response.dataValues,
      };
    } catch (error) {
      return {
        error: error,
      };
    }
  },
  getAllUsers: async () => {
    try {
      const users = await userModel.getAllUsers();
      if (users.error) {
        return {
          error: users.error,
        };
      }
      return {
         response : users.response
      }
    } catch (error) {
      return {
        message: error,
      };
    }
  },
};
